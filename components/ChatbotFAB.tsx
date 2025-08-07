import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent,  DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import {
  MessageCircle,
  Send,
  X,
  Bot,
  User,
  Heart,
  Phone,
  BookOpen,
  Brain,
  Users,
  Zap,
  RefreshCw,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  hasQuickActions?: boolean;
  quickActions?: QuickAction[];
}

interface QuickAction {
  label: string;
  action: () => void;
  icon?: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary";
}

interface UserContext {
  currentPage: string;
  previousQueries: string[];
  needsCrisisSupport: boolean;
  preferredTopics: string[];
}

export function ChatbotFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userContext, setUserContext] = useState<UserContext>({
    currentPage: "/",
    previousQueries: [],
    needsCrisisSupport: false,
    preferredTopics: [],
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Initialize conversation when chatbot opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initializeConversation();
    }
  }, [isOpen]);

  // Track current page for context
  useEffect(() => {
    setUserContext((prev) => ({ ...prev, currentPage: location.pathname }));
  }, [location.pathname]);

  const initializeConversation = () => {
    const welcomeMessage: Message = {
      id: "welcome",
      text: `Hello! I'm Lagom, your Being.Lagom mental health assistant. 🌟 I'm here to support healthcare professionals like you with compassionate guidance and platform navigation.

I can help you with:
• Finding peer support or therapy
• Crisis support resources  
• Self-help tools and mindfulness
• Platform navigation
• Mental health guidance

What brings you here today? How can I support you? 💙`,
      isUser: false,
      timestamp: new Date(),
      hasQuickActions: true,
      quickActions: [
        {
          label: "🆘 Crisis Support",
          action: () => handleQuickAction("I need crisis support right now"),
          variant: "destructive",
        },
        {
          label: "🤝 Find Support",
          action: () =>
            handleQuickAction("I need to find peer support or therapy"),
          icon: <Users className="w-3 h-3" />,
        },
        {
          label: "🧘 Mindfulness",
          action: () => handleQuickAction("Show me mindfulness activities"),
          icon: <Brain className="w-3 h-3" />,
        },
        {
          label: "📚 Resources",
          action: () =>
            handleQuickAction("I want to explore self-help resources"),
          icon: <BookOpen className="w-3 h-3" />,
        },
      ],
    };
    setMessages([welcomeMessage]);
  };

  const handleQuickAction = (query: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: query,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    processMessage(query);
  };

  const detectCrisisKeywords = (message: string): boolean => {
    const crisisKeywords = [
      "suicide",
      "suicidal",
      "kill myself",
      "end my life",
      "die",
      "dying",
      "hurt myself",
      "self-harm",
      "cutting",
      "overdose",
      "pills",
      "crisis",
      "emergency",
      "desperate",
      "can't take it",
      "give up",
      "hopeless",
      "worthless",
      "better off dead",
    ];

    return crisisKeywords.some((keyword) =>
      message.toLowerCase().includes(keyword)
    );
  };

  const detectBurnoutKeywords = (message: string): boolean => {
    const burnoutKeywords = [
      "burnout",
      "exhausted",
      "overwhelmed",
      "stressed",
      "can't cope",
      "too much",
      "breaking point",
      "tired",
      "drained",
      "empty",
    ];

    return burnoutKeywords.some((keyword) =>
      message.toLowerCase().includes(keyword)
    );
  };

  const getContextualResponse = (
    userMessage: string
  ): { text: string; quickActions?: QuickAction[] } => {
    const message = userMessage.toLowerCase();

    // Crisis support detection
    if (detectCrisisKeywords(message)) {
      setUserContext((prev) => ({ ...prev, needsCrisisSupport: true }));
      return {
        text: `🚨 I'm very concerned about what you've shared. Your life has value, and there are people who want to help you right now.

**IMMEDIATE HELP:**
🇺🇸 **US**: 988 (Suicide & Crisis Lifeline)
🇬🇧 **UK**: 116 123 (Samaritans)
🌍 **Global**: 1-741-741 (Crisis Text Line)

**For Healthcare Workers:**
• Physician Support Line: 1-888-409-0141
• National Academy of Medicine Action Collaborative

Please reach out immediately. You don't have to face this alone. Would you like me to connect you with crisis resources right now?`,
        quickActions: [
          {
            label: "🚨 Crisis Resources",
            action: () => navigate("/contact"),
            variant: "destructive",
          },
          {
            label: "📞 Call Now",
            action: () => window.open("tel:988"),
            variant: "destructive",
          },
        ],
      };
    }

    // Burnout and stress support
    if (detectBurnoutKeywords(message)) {
      return {
        text: `I hear you, and what you're experiencing is valid. Burnout is incredibly common among healthcare professionals - you're not alone in feeling this way. 💙

**Immediate Support Options:**
• **Peer Support**: Connect with others who understand your journey
• **Professional Help**: Access to specialized therapists
• **Self-Care Tools**: Mindfulness and stress management resources
• **Assessment**: Take a confidential mental health check-in

The fact that you're reaching out shows incredible strength. What type of support feels most helpful right now?`,
        quickActions: [
          {
            label: "🤝 Peer Support",
            action: () => navigate("/directory"),
            icon: <Users className="w-3 h-3" />,
          },
          {
            label: "📋 Assessment",
            action: () => navigate("/assessment"),
            icon: <Brain className="w-3 h-3" />,
          },
          {
            label: "🧘 Mindfulness",
            action: () => navigate("/mindfulness"),
            icon: <Heart className="w-3 h-3" />,
          },
        ],
      };
    }

    // Navigation queries
    if (message.includes("home") || message.includes("main page")) {
      setTimeout(() => navigate("/"), 1000);
      return {
        text: "I'll take you to our homepage where you can explore our mission and get an overview of all our services. You'll also see our institutional credibility and impact statistics there! ✨",
      };
    }

    if (
      message.includes("directory") ||
      message.includes("find therapist") ||
      message.includes("peer support")
    ) {
      setTimeout(() => navigate("/directory"), 1000);
      return {
        text: "Perfect! I'll guide you to our Directory page where you can access both our P2P Directory for peer support AND explore our wellness events and programs. Two great ways to connect and find support! 🤝",
        quickActions: [
          {
            label: "🔗 P2P Directory",
            action: () => window.open("https://p2p.being.lagom", "_blank"),
          },
          {
            label: "👩‍⚕️ Therapist Directory",
            action: () =>
              window.open("https://therapist.being.lagom", "_blank"),
          },
        ],
      };
    }

    if (
      message.includes("resources") ||
      message.includes("self help") ||
      message.includes("articles")
    ) {
      setTimeout(() => navigate("/resources"), 1000);
      return {
        text: "Excellent choice! Our Resources section has curated self-help materials, research articles, and evidence-based tools specifically designed for healthcare professionals. Knowledge is empowerment! 📚",
      };
    }

    if (
      message.includes("assessment") ||
      message.includes("questionnaire") ||
      message.includes("mental health test")
    ) {
      setTimeout(() => navigate("/assessment"), 1000);
      return {
        text: "I'll direct you to our confidential Assessment page. This psychometric questionnaire can help you better understand your current mental health status. It's completely private and can provide valuable insights. 📋",
      };
    }

    if (
      message.includes("mindfulness") ||
      message.includes("meditation") ||
      message.includes("breathing") ||
      message.includes("games")
    ) {
      setTimeout(() => navigate("/mindfulness"), 1000);
      return {
        text: "Wonderful! Our Mindfulness section offers interactive games like the 'love shower', guided breathing exercises, and calming activities. Perfect for taking a moment to recharge and center yourself. 🧘‍♀️✨",
      };
    }

    // Platform information with context
    if (
      message.includes("being.lagom") ||
      message.includes("what is") ||
      message.includes("about platform")
    ) {
      return {
        text: `Being.Lagom is your mental health sanctuary, specifically created for healthcare professionals, medical students, and young doctors. 🏥💙

**Our Impact:**
• 1,200+ healthcare workers supported
• 15+ countries reached
• 4+ years of dedicated service
• 24/7 crisis support available

**What makes us special:**
• Evidence-based interventions
• Partnerships with Oxford & Stanford Universities
• Pro-bono therapy programs
• Human-centric approach based on community feedback

We understand the unique challenges you face, and we're here with both professional support and peer connections.`,
        quickActions: [
          {
            label: "📖 Learn More",
            action: () => navigate("/about"),
            icon: <BookOpen className="w-3 h-3" />,
          },
          {
            label: "🏆 Our Impact",
            action: () => navigate("/"),
            icon: <Zap className="w-3 h-3" />,
          },
        ],
      };
    }

    // Lagom philosophy
    if (
      message.includes("lagom") ||
      message.includes("swedish") ||
      message.includes("philosophy")
    ) {
      return {
        text: `Lagom is a beautiful Swedish concept meaning "just the right amount" - not too little, not too much, but perfectly balanced. 🌸

This philosophy guides everything we do:
• **Balanced Care**: Taking care of others AND yourself
• **Sustainable Support**: Long-term wellness, not quick fixes  
• **Just Right**: Personalized support that fits YOUR needs
• **Mindful Living**: Present, purposeful, and peaceful

As healthcare professionals, you give so much to others. Lagom reminds us that to care for others sustainably, we must first learn to care for ourselves - not selfishly, but wisely. 💙`,
      };
    }

    // Contextual suggestions based on current page
    const currentPageContext = getCurrentPageSuggestions();
    if (currentPageContext) {
      return currentPageContext;
    }

    // Enhanced default responses with more personality
    const defaultResponses = [
      {
        text: "I'm here to be your companion on this journey. As a healthcare professional, you give so much to others - let me help you find the support you deserve. What's on your mind today? 💙",
        quickActions: [
          {
            label: "🎯 Get Started",
            action: () =>
              handleQuickAction("I'm new here, where should I start?"),
          },
        ],
      },
      {
        text: "Every healthcare worker's journey is unique, and I'm here to help you navigate yours. Whether you need immediate support, peer connections, or just someone to listen - I've got you covered. What would be most helpful right now? 🌟",
      },
      {
        text: "Remember, seeking support is a sign of wisdom, not weakness. You care for so many others - you deserve that same level of care. How can I help you take that next step today? 🤗",
      },
    ];

    const randomResponse =
      defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    return randomResponse;
  };

  const getCurrentPageSuggestions = (): {
    text: string;
    quickActions?: QuickAction[];
  } | null => {
    const currentPath = userContext.currentPage;

    if (currentPath === "/resources") {
      return {
        text: "I see you're exploring our Resources! This section is packed with evidence-based tools. Would you like me to highlight specific resources that might be most relevant to what you're experiencing? 📚",
        quickActions: [
          {
            label: "🔍 Burnout Resources",
            action: () =>
              handleQuickAction("Show me burnout prevention resources"),
          },
          {
            label: "💪 Resilience Tools",
            action: () => handleQuickAction("I want to build resilience"),
          },
        ],
      };
    }

    if (currentPath === "/mindfulness") {
      return {
        text: "Perfect timing to focus on mindfulness! Our activities are designed specifically for busy healthcare professionals. Which type of mindful moment sounds most appealing right now? 🧘‍♀️",
      };
    }

    return null;
  };

  const processMessage = (userMessage: string) => {
    setIsTyping(true);

    // Update user context
    setUserContext((prev) => ({
      ...prev,
      previousQueries: [...prev.previousQueries.slice(-4), userMessage], // Keep last 5 queries
    }));

    // Simulate realistic typing delay
    setTimeout(() => {
      const response = getContextualResponse(userMessage);

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isUser: false,
        timestamp: new Date(),
        hasQuickActions: !!response.quickActions,
        quickActions: response.quickActions,
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const messageToProcess = inputValue;
    setInputValue("");
    processMessage(messageToProcess);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const resetConversation = () => {
    setMessages([]);
    setUserContext({
      currentPage: location.pathname,
      previousQueries: [],
      needsCrisisSupport: false,
      preferredTopics: [],
    });
    initializeConversation();
  };

  return (
    <>
      {/* Floating Action Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 h-14 w-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all duration-200 hover:scale-110"
        size="sm"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg w-full h-[90vh] max-h-[600px] flex flex-col p-0 gap-0">
          {/* Fixed Header */}
          <div className="bg-primary p-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-left text-lg text-primary-foreground font-semibold">
                    Lagom Assistant
                  </DialogTitle>
                  <p className="text-sm text-primary-foreground/80">
                    Always here to help you
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetConversation}
                  className="h-8 w-8 p-0 text-white hover:bg-white/20"
                  title="Reset conversation"
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 p-0 text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Scrollable Messages Container */}
          <div className="flex-1 min-h-0 relative">
            <ScrollArea className="h-full px-4 py-4">
              <div className="space-y-6 pb-4">
                {messages.map((message) => (
                  <div key={message.id} className="space-y-3">
                    <div
                      className={cn(
                        "flex w-full",
                        message.isUser ? "justify-end" : "justify-start"
                      )}
                    >
                      <div
                        className={cn(
                          "flex max-w-[80%] items-start space-x-2",
                          message.isUser && "flex-row-reverse space-x-reverse"
                        )}
                      >
                        <div
                          className={cn(
                            "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full",
                            message.isUser ? "bg-primary/10" : "bg-muted"
                          )}
                        >
                          {message.isUser ? (
                            <User className="text-primary h-4 w-4" />
                          ) : (
                            <Bot className="text-muted-foreground h-4 w-4" />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <div
                            className={cn(
                              "rounded-2xl px-4 py-2 shadow-sm",
                              message.isUser
                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                : "border-border bg-card text-card-foreground rounded-tl-none border"
                            )}
                          >
                            <p className="whitespace-pre-wrap text-sm leading-relaxed">
                              {message.text}
                            </p>
                          </div>
                          <span
                            className={cn(
                              "text-muted-foreground mt-1 text-xs",
                              message.isUser ? "text-right" : "text-left"
                            )}
                          >
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    {message.hasQuickActions && message.quickActions && (
                      <div
                        className={cn(
                          "flex flex-wrap gap-2",
                          message.isUser ? "justify-end mr-10" : "ml-10"
                        )}
                      >
                        {message.quickActions.map((action, index) => (
                          <Button
                            key={index}
                            variant={action.variant || "outline"}
                            size="sm"
                            onClick={action.action}
                            className="text-xs h-8 px-3"
                          >
                            {action.icon}
                            {action.label}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="text-muted-foreground flex items-center space-x-2 text-sm">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                      <Bot className="text-muted-foreground h-4 w-4" />
                    </div>
                    <div className="flex space-x-1">
                      <div
                        className="bg-muted-foreground/70 h-2 w-2 animate-bounce rounded-full"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="bg-muted-foreground/70 h-2 w-2 animate-bounce rounded-full"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="bg-muted-foreground/70 h-2 w-2 animate-bounce rounded-full"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                    <span>Lagom is typing...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </div>

          {/* Fixed Input Area */}
          <div className="border-t p-4 flex-shrink-0">
            {userContext.needsCrisisSupport && (
              <div className="mb-3 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-sm text-destructive font-medium flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Crisis support is available 24/7: Call 988 (US) or your local
                  emergency number
                </p>
              </div>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex space-x-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share what's on your mind..."
                className="flex-1"
                disabled={isTyping}
                maxLength={500}
              />
              <Button
                type="submit"
                size="icon"
                disabled={!inputValue.trim() || isTyping}
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-2">
              This AI assistant provides guidance but cannot replace
              professional medical advice.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
