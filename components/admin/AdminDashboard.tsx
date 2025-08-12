import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { 
  Users, 
  Calendar, 
  ShoppingBag, 
  MessageSquare, 
  Phone, 
  MapPin, 
  FileText, 
  LogOut,
  Settings,
  BarChart3
} from 'lucide-react';

// Import admin components
import { TeamManagement } from './TeamManagement';
import { EventsManagement } from './EventsManagement';
import { MerchandiseManagement } from './MerchandiseManagement';
import { FAQManagement } from './FAQManagement';
import { ContactManagement } from './ContactManagement';
import { SupportPathsManagement } from './SupportPathsManagement';
import { FooterManagement } from './FooterManagement';
import { LegalPagesManagement } from './LegalPagesManagement';

interface AdminDashboardProps {
  onLogout: () => void;
}

type AdminSection = 
  | 'overview' 
  | 'team' 
  | 'events' 
  | 'merchandise' 
  | 'faq' 
  | 'contact' 
  | 'support-paths' 
  | 'footer' 
  | 'legal';

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeSection, setActiveSection] = useState<AdminSection>('overview');

  const menuItems = [
    { id: 'overview' as AdminSection, label: 'Overview', icon: BarChart3 },
    { id: 'team' as AdminSection, label: 'Team Management', icon: Users },
    { id: 'events' as AdminSection, label: 'Events & Programs', icon: Calendar },
    { id: 'merchandise' as AdminSection, label: 'Merchandise', icon: ShoppingBag },
    { id: 'faq' as AdminSection, label: 'FAQ Management', icon: MessageSquare },
    { id: 'contact' as AdminSection, label: 'Contact & Crisis Support', icon: Phone },
    { id: 'support-paths' as AdminSection, label: 'Support Paths', icon: MapPin },
    { id: 'footer' as AdminSection, label: 'Footer Management', icon: Settings },
    { id: 'legal' as AdminSection, label: 'Legal Pages', icon: FileText },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <AdminOverview />;
      case 'team':
        return <TeamManagement />;
      case 'events':
        return <EventsManagement />;
      case 'merchandise':
        return <MerchandiseManagement />;
      case 'faq':
        return <FAQManagement />;
      case 'contact':
        return <ContactManagement />;
      case 'support-paths':
        return <SupportPathsManagement />;
      case 'footer':
        return <FooterManagement />;
      case 'legal':
        return <LegalPagesManagement />;
      default:
        return <AdminOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Being.Lagom Admin Panel
              </h1>
            </div>
            <Button 
              variant="outline" 
              onClick={onLogout}
              className="flex items-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

function AdminOverview() {
  const stats = [
    { label: 'Team Members', value: '25', change: '+2 this month' },
    { label: 'Upcoming Events', value: '5', change: '3 this week' },
    { label: 'Merchandise Items', value: '4', change: 'All active' },
    { label: 'FAQ Items', value: '6', change: 'Recently updated' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Welcome to the Being.Lagom admin panel. Manage your content and settings here.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-2xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks you might want to perform</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="justify-start">
            <Users className="mr-2 h-4 w-4" />
            Add Team Member
          </Button>
          <Button variant="outline" className="justify-start">
            <Calendar className="mr-2 h-4 w-4" />
            Create Event
          </Button>
          <Button variant="outline" className="justify-start">
            <MessageSquare className="mr-2 h-4 w-4" />
            Update FAQ
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}