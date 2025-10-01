import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";

interface SocialLink {
  id: string;
  platform:
    | "instagram"
    | "linkedin"
    | "facebook"
    | "twitter"
    | "youtube"
    | "tiktok";
  url: string;
  isActive: boolean;
}

interface FooterLink {
  id: string;
  title: string;
  url: string;
  category: "main" | "legal" | "support" | "about";
  isActive: boolean;
  order: number;
}

interface FooterContent {
  organizationName: string;
  tagline: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  copyrightText: string;
}

const socialPlatforms = [
  { value: "instagram", label: "Instagram", icon: Instagram },
  { value: "linkedin", label: "LinkedIn", icon: Linkedin },
  { value: "facebook", label: "Facebook", icon: Facebook },
  { value: "twitter", label: "Twitter", icon: Twitter },
  { value: "youtube", label: "YouTube", icon: ExternalLink },
  { value: "tiktok", label: "TikTok", icon: ExternalLink },
];

const linkCategories = [
  { value: "main", label: "Main Navigation" },
  { value: "legal", label: "Legal Pages" },
  { value: "support", label: "Support Resources" },
  { value: "about", label: "About Us" },
];

export function FooterManagement() {
  const [footerContent, setFooterContent] = useState<FooterContent>({
    organizationName: "Being.Lagom",
    tagline: "Mental health support for healthcare workers",
    description:
      "Creating safe trauma-informed spaces, by HCPs for HCPs, to seek mental health support, build institutional resilience, and transform care culture.",
    contactEmail: "admin@beinglagom.com | lagommentalhealth@gmail.com",
    contactPhone: "+1-800-LAGOM",
    address: "Global Organization",
    copyrightText: "© 2024 Being.Lagom. All rights reserved.",
  });

  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    {
      id: "1",
      platform: "instagram",
      url: "https://www.instagram.com/being.lagom",
      isActive: true,
    },
    {
      id: "2",
      platform: "linkedin",
      url: "https://www.linkedin.com/company/being-lagom",
      isActive: true,
    },
  ]);

  const [footerLinks, setFooterLinks] = useState<FooterLink[]>([
    {
      id: "1",
      title: "About Us",
      url: "/about",
      category: "about",
      isActive: true,
      order: 1,
    },
    {
      id: "2",
      title: "Support Directory",
      url: "/directory",
      category: "support",
      isActive: true,
      order: 2,
    },
    {
      id: "3",
      title: "Privacy Policy",
      url: "/privacy-policy",
      category: "legal",
      isActive: true,
      order: 3,
    },
    {
      id: "4",
      title: "Terms of Service",
      url: "/terms-of-service",
      category: "legal",
      isActive: true,
      order: 4,
    },
  ]);

  const [isSocialDialogOpen, setIsSocialDialogOpen] = useState(false);
  const [isLinkDialogOpen, setIsLinkDialogOpen] = useState(false);
  const [editingSocial, setEditingSocial] = useState<SocialLink | null>(null);
  const [editingLink, setEditingLink] = useState<FooterLink | null>(null);
  const [socialFormData, setSocialFormData] = useState<Partial<SocialLink>>({});
  const [linkFormData, setLinkFormData] = useState<Partial<FooterLink>>({});

  const handleContentUpdate = (field: keyof FooterContent, value: string) => {
    setFooterContent((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddSocial = () => {
    setEditingSocial(null);
    setSocialFormData({ isActive: true });
    setIsSocialDialogOpen(true);
  };

  const handleEditSocial = (social: SocialLink) => {
    setEditingSocial(social);
    setSocialFormData(social);
    setIsSocialDialogOpen(true);
  };

  const handleDeleteSocial = (id: string) => {
    if (confirm("Are you sure you want to delete this social link?")) {
      setSocialLinks(socialLinks.filter((s) => s.id !== id));
    }
  };

  const handleSocialSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingSocial) {
      setSocialLinks(
        socialLinks.map((s) =>
          s.id === editingSocial.id
            ? ({ ...socialFormData, id: editingSocial.id } as SocialLink)
            : s
        )
      );
    } else {
      const newSocial: SocialLink = {
        ...socialFormData,
        id: Date.now().toString(),
      } as SocialLink;
      setSocialLinks([...socialLinks, newSocial]);
    }

    setIsSocialDialogOpen(false);
    setSocialFormData({});
  };

  const handleAddLink = () => {
    setEditingLink(null);
    setLinkFormData({ isActive: true, order: footerLinks.length + 1 });
    setIsLinkDialogOpen(true);
  };

  const handleEditLink = (link: FooterLink) => {
    setEditingLink(link);
    setLinkFormData(link);
    setIsLinkDialogOpen(true);
  };

  const handleDeleteLink = (id: string) => {
    if (confirm("Are you sure you want to delete this footer link?")) {
      setFooterLinks(footerLinks.filter((l) => l.id !== id));
    }
  };

  const handleLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingLink) {
      setFooterLinks(
        footerLinks.map((l) =>
          l.id === editingLink.id
            ? ({ ...linkFormData, id: editingLink.id } as FooterLink)
            : l
        )
      );
    } else {
      const newLink: FooterLink = {
        ...linkFormData,
        id: Date.now().toString(),
      } as FooterLink;
      setFooterLinks([...footerLinks, newLink]);
    }

    setIsLinkDialogOpen(false);
    setLinkFormData({});
  };

  const toggleSocialStatus = (id: string) => {
    setSocialLinks(
      socialLinks.map((social) =>
        social.id === id ? { ...social, isActive: !social.isActive } : social
      )
    );
  };

  const toggleLinkStatus = (id: string) => {
    setFooterLinks(
      footerLinks.map((link) =>
        link.id === id ? { ...link, isActive: !link.isActive } : link
      )
    );
  };

  const getSocialIcon = (platform: string) => {
    const socialPlatform = socialPlatforms.find((p) => p.value === platform);
    return socialPlatform ? socialPlatform.icon : ExternalLink;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Footer Management
          </h2>
          <p className="text-gray-600">
            Manage footer content, social links, and navigation
          </p>
        </div>
      </div>

      <Tabs defaultValue="content" className="space-y-4">
        <TabsList>
          <TabsTrigger value="content">Footer Content</TabsTrigger>
          <TabsTrigger value="social">Social Links</TabsTrigger>
          <TabsTrigger value="links">Footer Links</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Organization Information</CardTitle>
              <CardDescription>
                Basic information displayed in the footer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="orgName">Organization Name</Label>
                  <Input
                    id="orgName"
                    value={footerContent.organizationName}
                    onChange={(e) =>
                      handleContentUpdate("organizationName", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    value={footerContent.tagline}
                    onChange={(e) =>
                      handleContentUpdate("tagline", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={footerContent.description}
                  onChange={(e) =>
                    handleContentUpdate("description", e.target.value)
                  }
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Contact Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={footerContent.contactEmail}
                    onChange={(e) =>
                      handleContentUpdate("contactEmail", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Phone</Label>
                  <Input
                    id="phone"
                    value={footerContent.contactPhone}
                    onChange={(e) =>
                      handleContentUpdate("contactPhone", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={footerContent.address}
                    onChange={(e) =>
                      handleContentUpdate("address", e.target.value)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="copyright">Copyright Text</Label>
                  <Input
                    id="copyright"
                    value={footerContent.copyrightText}
                    onChange={(e) =>
                      handleContentUpdate("copyrightText", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button>Save Footer Content</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Social Media Links</h3>
            <Button onClick={handleAddSocial}>
              <Plus className="mr-2 h-4 w-4" />
              Add Social Link
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialLinks.map((social) => {
              const IconComponent = getSocialIcon(social.platform);
              return (
                <Card
                  key={social.id}
                  className={`${!social.isActive ? "opacity-60" : ""}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-5 w-5" />
                        <span className="font-medium capitalize">
                          {social.platform}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Button
                          size="sm"
                          variant={social.isActive ? "default" : "secondary"}
                          onClick={() => toggleSocialStatus(social.id)}
                          className="text-xs"
                        >
                          {social.isActive ? "Active" : "Inactive"}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditSocial(social)}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteSocial(social.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 truncate">
                      {social.url}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="links" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Footer Navigation Links</h3>
            <Button onClick={handleAddLink}>
              <Plus className="mr-2 h-4 w-4" />
              Add Footer Link
            </Button>
          </div>

          <div className="space-y-4">
            {linkCategories.map((category) => {
              const categoryLinks = footerLinks.filter(
                (link) => link.category === category.value
              );
              return (
                <Card key={category.value}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">
                      {category.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {categoryLinks.length > 0 ? (
                      <div className="space-y-2">
                        {categoryLinks.map((link) => (
                          <div
                            key={link.id}
                            className="flex items-center justify-between p-2 bg-gray-50 rounded"
                          >
                            <div className="flex-1">
                              <span
                                className={`font-medium ${
                                  !link.isActive ? "text-gray-500" : ""
                                }`}
                              >
                                {link.title}
                              </span>
                              <span className="text-xs text-gray-500 ml-2">
                                ({link.url})
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Button
                                size="sm"
                                variant={
                                  link.isActive ? "default" : "secondary"
                                }
                                onClick={() => toggleLinkStatus(link.id)}
                                className="text-xs"
                              >
                                {link.isActive ? "Active" : "Inactive"}
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEditLink(link)}
                              >
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleDeleteLink(link.id)}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 text-center py-4">
                        No links in this category yet.
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>

      {/* Social Link Dialog */}
      <Dialog open={isSocialDialogOpen} onOpenChange={setIsSocialDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingSocial ? "Edit Social Link" : "Add Social Link"}
            </DialogTitle>
            <DialogDescription>
              Add or edit a social media link
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSocialSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="platform">Platform *</Label>
              <select
                id="platform"
                value={socialFormData.platform || ""}
                onChange={(e) =>
                  setSocialFormData((prev) => ({
                    ...prev,
                    platform: e.target.value as SocialLink["platform"],
                  }))
                }
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="">Select platform</option>
                {socialPlatforms.map((platform) => (
                  <option key={platform.value} value={platform.value}>
                    {platform.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="url">URL *</Label>
              <Input
                id="url"
                type="url"
                value={socialFormData.url || ""}
                onChange={(e) =>
                  setSocialFormData((prev) => ({
                    ...prev,
                    url: e.target.value,
                  }))
                }
                placeholder="https://..."
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="socialActive"
                checked={socialFormData.isActive || false}
                onChange={(e) =>
                  setSocialFormData((prev) => ({
                    ...prev,
                    isActive: e.target.checked,
                  }))
                }
                className="rounded"
              />
              <Label htmlFor="socialActive">Active (visible on website)</Label>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsSocialDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                {editingSocial ? "Update" : "Add"} Social Link
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Footer Link Dialog */}
      <Dialog open={isLinkDialogOpen} onOpenChange={setIsLinkDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingLink ? "Edit Footer Link" : "Add Footer Link"}
            </DialogTitle>
            <DialogDescription>
              Add or edit a footer navigation link
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleLinkSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="linkTitle">Link Title *</Label>
              <Input
                id="linkTitle"
                value={linkFormData.title || ""}
                onChange={(e) =>
                  setLinkFormData((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkUrl">URL *</Label>
              <Input
                id="linkUrl"
                value={linkFormData.url || ""}
                onChange={(e) =>
                  setLinkFormData((prev) => ({ ...prev, url: e.target.value }))
                }
                placeholder="/about or https://..."
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkCategory">Category *</Label>
              <select
                id="linkCategory"
                value={linkFormData.category || ""}
                onChange={(e) =>
                  setLinkFormData((prev) => ({
                    ...prev,
                    category: e.target.value as FooterLink["category"],
                  }))
                }
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="">Select category</option>
                {linkCategories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="linkOrder">Display Order</Label>
              <Input
                id="linkOrder"
                type="number"
                value={linkFormData.order || ""}
                onChange={(e) =>
                  setLinkFormData((prev) => ({
                    ...prev,
                    order: parseInt(e.target.value) || 1,
                  }))
                }
                min="1"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="linkActive"
                checked={linkFormData.isActive || false}
                onChange={(e) =>
                  setLinkFormData((prev) => ({
                    ...prev,
                    isActive: e.target.checked,
                  }))
                }
                className="rounded"
              />
              <Label htmlFor="linkActive">Active (visible on website)</Label>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsLinkDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                {editingLink ? "Update" : "Add"} Footer Link
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
