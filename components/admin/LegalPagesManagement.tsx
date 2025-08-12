import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';

import { Badge } from '../ui/badge';
import { Edit, Save, FileText, Calendar, Eye } from 'lucide-react';

interface LegalPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  lastUpdated: string;
  isPublished: boolean;
  version: number;
}

export function LegalPagesManagement() {
  const [legalPages, setLegalPages] = useState<LegalPage[]>([
    {
      id: '1',
      title: 'Privacy Policy',
      slug: 'privacy-policy',
      content: `# Privacy Policy

## Information We Collect

We collect information you provide directly to us, such as when you create an account, participate in our programs, or contact us for support.

### Personal Information
- Name and contact information
- Professional credentials and affiliations
- Health and wellness information (when voluntarily provided)
- Communication preferences

### Usage Information
- How you interact with our services
- Pages visited and time spent
- Device and browser information

## How We Use Your Information

We use the information we collect to:
- Provide and improve our mental health support services
- Communicate with you about programs and resources
- Ensure the safety and security of our platform
- Comply with legal obligations

## Information Sharing

We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.

### We may share information:
- With healthcare providers (with your explicit consent)
- To comply with legal requirements
- To protect the rights and safety of our users
- With service providers who assist in our operations

## Data Security

We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

## Your Rights

You have the right to:
- Access your personal information
- Correct inaccurate information
- Request deletion of your information
- Opt-out of certain communications

## Contact Us

If you have questions about this Privacy Policy, please contact us at privacy@being.lagom

*Last updated: January 2024*`,
      lastUpdated: '2024-01-15T10:30:00Z',
      isPublished: true,
      version: 2
    },
    {
      id: '2',
      title: 'Terms of Service',
      slug: 'terms-of-service',
      content: `# Terms of Service

## Acceptance of Terms

By accessing and using Being.Lagom services, you accept and agree to be bound by the terms and provision of this agreement.

## Use License

Permission is granted to temporarily access Being.Lagom services for personal, non-commercial transitory viewing only.

### This license does not include the right to:
- Modify or copy the materials
- Use the materials for commercial purposes
- Attempt to reverse engineer any software
- Remove any copyright or proprietary notations

## Disclaimer

The materials on Being.Lagom's website are provided on an 'as is' basis. Being.Lagom makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

## Medical Disclaimer

Being.Lagom provides mental health resources and support but does not provide medical advice, diagnosis, or treatment. Always seek the advice of qualified health providers with questions regarding medical conditions.

## Limitations

In no event shall Being.Lagom or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Being.Lagom services.

## Privacy

Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.

## Governing Law

These terms and conditions are governed by and construed in accordance with applicable laws.

## Contact Information

Questions about the Terms of Service should be sent to us at legal@being.lagom

*Last updated: January 2024*`,
      lastUpdated: '2024-01-15T10:30:00Z',
      isPublished: true,
      version: 1
    },
    {
      id: '3',
      title: 'Cookie Policy',
      slug: 'cookie-policy',
      content: `# Cookie Policy

## What Are Cookies

Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.

## How We Use Cookies

We use cookies for several purposes:

### Essential Cookies
These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.

### Analytics Cookies
We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.

### Preference Cookies
These cookies remember your preferences and settings to provide a more personalized experience.

## Types of Cookies We Use

### Session Cookies
Temporary cookies that are deleted when you close your browser.

### Persistent Cookies
Cookies that remain on your device for a set period or until you delete them.

### Third-Party Cookies
Cookies set by third-party services we use, such as analytics providers.

## Managing Cookies

You can control and manage cookies in various ways:

- **Browser Settings**: Most browsers allow you to refuse cookies or delete existing ones
- **Opt-out Tools**: Some third-party services provide opt-out mechanisms
- **Privacy Settings**: Adjust your privacy preferences on our website

## Cookie Consent

By continuing to use our website, you consent to our use of cookies as described in this policy.

## Updates to This Policy

We may update this Cookie Policy from time to time. Please check this page periodically for changes.

## Contact Us

If you have questions about our use of cookies, please contact us at privacy@being.lagom

*Last updated: January 2024*`,
      lastUpdated: '2024-01-15T10:30:00Z',
      isPublished: true,
      version: 1
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPage, setEditingPage] = useState<LegalPage | null>(null);
  const [formData, setFormData] = useState<Partial<LegalPage>>({});

  const handleEditPage = (page: LegalPage) => {
    setEditingPage(page);
    setFormData(page);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPage) {
      const updatedPage: LegalPage = {
        ...formData,
        id: editingPage.id,
        lastUpdated: new Date().toISOString(),
        version: editingPage.version + 1
      } as LegalPage;
      
      setLegalPages(legalPages.map(p => 
        p.id === editingPage.id ? updatedPage : p
      ));
    }
    
    setIsDialogOpen(false);
    setFormData({});
  };

  const togglePublishStatus = (id: string) => {
    setLegalPages(legalPages.map(page =>
      page.id === id ? { 
        ...page, 
        isPublished: !page.isPublished,
        lastUpdated: new Date().toISOString()
      } : page
    ));
  };

  const previewPage = (page: LegalPage) => {
    // In a real implementation, this would open a preview modal or new tab
    alert(`Preview functionality would show the rendered content of: ${page.title}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Legal Pages Management</h2>
          <p className="text-gray-600">Manage privacy policy, terms of service, and other legal documents</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {legalPages.map((page) => (
          <Card key={page.id}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-gray-500" />
                  <CardTitle className="text-lg">{page.title}</CardTitle>
                </div>
                <Badge 
                  variant={page.isPublished ? "default" : "secondary"}
                  className={page.isPublished ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                >
                  {page.isPublished ? 'Published' : 'Draft'}
                </Badge>
              </div>
              <CardDescription>/{page.slug}</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-600">
                <div className="flex items-center gap-1 mb-1">
                  <Calendar className="h-3 w-3" />
                  Last updated: {new Date(page.lastUpdated).toLocaleDateString()}
                </div>
                <div>Version: {page.version}</div>
              </div>
              
              <div className="text-xs text-gray-500">
                Content length: {page.content.length} characters
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => previewPage(page)}
                  className="flex-1"
                >
                  <Eye className="h-3 w-3 mr-1" />
                  Preview
                </Button>
                
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEditPage(page)}
                >
                  <Edit className="h-3 w-3" />
                </Button>
                
                <Button
                  size="sm"
                  variant={page.isPublished ? "secondary" : "default"}
                  onClick={() => togglePublishStatus(page.id)}
                  className="text-xs"
                >
                  {page.isPublished ? 'Unpublish' : 'Publish'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit {editingPage?.title}</DialogTitle>
            <DialogDescription>
              Update the content and settings for this legal page
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Page Title *</Label>
                <Input
                  id="title"
                  value={formData.title || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="slug">URL Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-') }))}
                  placeholder="privacy-policy"
                  required
                />
                <p className="text-xs text-gray-500">
                  This will be the URL: /legal/{formData.slug}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Page Content *</Label>
              <Textarea
                id="content"
                value={formData.content || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                rows={20}
                className="font-mono text-sm"
                placeholder="Enter the page content using Markdown formatting..."
                required
              />
              <p className="text-xs text-gray-500">
                You can use Markdown formatting. The content will be rendered as HTML on the website.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isPublished"
                checked={formData.isPublished || false}
                onChange={(e) => setFormData(prev => ({ ...prev, isPublished: e.target.checked }))}
                className="rounded"
              />
              <Label htmlFor="isPublished">Published (visible on website)</Label>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-medium text-yellow-800 mb-2">Important Legal Notice</h4>
              <p className="text-sm text-yellow-700">
                Legal documents should be reviewed by qualified legal counsel before publication. 
                Ensure all content complies with applicable laws and regulations in your jurisdiction.
              </p>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
          <CardDescription>Common tasks for legal page management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Export All Pages
            </Button>
            <Button variant="outline" className="justify-start">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Review
            </Button>
            <Button variant="outline" className="justify-start">
              <Eye className="mr-2 h-4 w-4" />
              Preview All Pages
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}