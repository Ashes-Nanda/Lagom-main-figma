import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent } from '../ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Plus, Edit, Trash2, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { LoadingSpinner } from '../ui/loading-spinner';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialty: string;
  category: string;
  imageUrl: string;
  actionFigureUrl?: string;
  socialLinks?: {
    platform: 'linkedin' | 'instagram' | 'facebook' | 'twitter';
    url: string;
  }[];
}

const categories = [
  'Ahd TaskForce',
  'Leadership',
  'Core Leads',
  'Psychology & Clinical Team',
  'Social Media & Communications',
  'Curriculum & Education',
  'Operations & Support',
  'Tech',
];

const socialPlatforms = [
  { value: 'linkedin', label: 'LinkedIn', icon: Linkedin },
  { value: 'instagram', label: 'Instagram', icon: Instagram },
  { value: 'facebook', label: 'Facebook', icon: Facebook },
  { value: 'twitter', label: 'Twitter', icon: Twitter },
];

export function TeamManagement() {
  const [members, setMembers] = useState<TeamMember[]>([
    {
      id: '1',
      name: 'Dr. Vyshnavi Desiraju',
      role: 'Medical doctor, Executive Director of Being.Lagom (Singapore)',
      bio: 'Ahmedabad Taskforce: Strategy Lead',
      specialty: 'Strategy & Leadership',
      category: 'Ahd TaskForce',
      imageUrl: '/assets/Vyshnavi.jpg',
      actionFigureUrl: '/action-fig/Vyshnavi-action.png',
      socialLinks: [
        {
          platform: 'linkedin',
          url: 'https://www.linkedin.com/in/vyshnavi-desiraju-b09b1799',
        },
      ],
    },
    // Add more sample members as needed
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);
  const [formData, setFormData] = useState<Partial<TeamMember>>({
    socialLinks: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddMember = () => {
    setEditingMember(null);
    setFormData({ socialLinks: [] });
    setIsDialogOpen(true);
  };

  const handleEditMember = (member: TeamMember) => {
    setEditingMember(member);
    setFormData(member);
    setIsDialogOpen(true);
  };

  const handleDeleteMember = (id: string) => {
    if (confirm('Are you sure you want to delete this team member?')) {
      setMembers(members.filter(m => m.id !== id));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (editingMember) {
      // Update existing member
      setMembers(members.map(m => 
        m.id === editingMember.id 
          ? { ...formData, id: editingMember.id } as TeamMember
          : m
      ));
    } else {
      // Add new member
      const newMember: TeamMember = {
        ...formData,
        id: Date.now().toString(),
      } as TeamMember;
      setMembers([...members, newMember]);
    }
    
    setIsSubmitting(false);
    setIsDialogOpen(false);
    setFormData({ socialLinks: [] });
  };

  const addSocialLink = () => {
    setFormData(prev => ({
      ...prev,
      socialLinks: [
        ...(prev.socialLinks || []),
        { platform: 'linkedin', url: '' }
      ]
    }));
  };

  const updateSocialLink = (index: number, field: 'platform' | 'url', value: string) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: prev.socialLinks?.map((link, i) => 
        i === index ? { ...link, [field]: value } : link
      )
    }));
  };

  const removeSocialLink = (index: number) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: prev.socialLinks?.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Team Management</h2>
          <p className="text-gray-600">Manage team members, their roles, and information</p>
        </div>
        <Button onClick={handleAddMember}>
          <Plus className="mr-2 h-4 w-4" />
          Add Team Member
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <div className="aspect-square relative">
              <img
                src={member.imageUrl || '/placeholder.svg'}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-1">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleEditMember(member)}
                >
                  <Edit className="h-3 w-3" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDeleteMember(member.id)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <Badge variant="outline" className="text-xs">
                  {member.category}
                </Badge>
                <h3 className="font-semibold text-sm">{member.name}</h3>
                <p className="text-xs text-gray-600 line-clamp-2">{member.role}</p>
                <p className="text-xs text-gray-500">{member.specialty}</p>
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="flex gap-1 pt-1">
                    {member.socialLinks.map((link, index) => {
                      const Platform = socialPlatforms.find(p => p.value === link.platform)?.icon;
                      return Platform ? (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <Platform size={14} />
                        </a>
                      ) : null;
                    })}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingMember ? 'Edit Team Member' : 'Add Team Member'}
            </DialogTitle>
            <DialogDescription>
              Fill in the details for the team member
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category || ''}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role *</Label>
              <Input
                id="role"
                value={formData.role || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialty">Specialty</Label>
              <Input
                id="specialty"
                value={formData.specialty || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, specialty: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={formData.bio || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="imageUrl">Profile Image URL</Label>
                <Input
                  id="imageUrl"
                  value={formData.imageUrl || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="actionFigureUrl">Action Figure URL (Optional)</Label>
                <Input
                  id="actionFigureUrl"
                  value={formData.actionFigureUrl || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, actionFigureUrl: e.target.value }))}
                  placeholder="https://example.com/action-figure.jpg"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>Social Links</Label>
                <Button type="button" variant="outline" size="sm" onClick={addSocialLink}>
                  <Plus className="h-3 w-3 mr-1" />
                  Add Link
                </Button>
              </div>
              
              {formData.socialLinks?.map((link, index) => (
                <div key={index} className="flex gap-2 items-end">
                  <div className="flex-1">
                    <Select
                      value={link.platform}
                      onValueChange={(value) => updateSocialLink(index, 'platform', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {socialPlatforms.map((platform) => (
                          <SelectItem key={platform.value} value={platform.value}>
                            {platform.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-2">
                    <Input
                      value={link.url}
                      onChange={(e) => updateSocialLink(index, 'url', e.target.value)}
                      placeholder="https://..."
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeSocialLink(index)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    {editingMember ? 'Updating...' : 'Adding...'}
                  </>
                ) : (
                  `${editingMember ? 'Update' : 'Add'} Member`
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}