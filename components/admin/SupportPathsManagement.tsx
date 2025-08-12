import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent } from '../ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Plus, Edit, Trash2, Heart, Users, MessageCircle, Phone, Video, Calendar } from 'lucide-react';

interface SupportPath {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: string;
  color: string;
  category: 'immediate' | 'ongoing' | 'community' | 'professional';
  contactMethod: 'phone' | 'email' | 'form' | 'booking' | 'external';
  contactInfo: string;
  isActive: boolean;
  order: number;
  features?: string[];
}

const iconOptions = [
  { value: 'heart', label: 'Heart', component: Heart },
  { value: 'users', label: 'Users', component: Users },
  { value: 'message-circle', label: 'Message Circle', component: MessageCircle },
  { value: 'phone', label: 'Phone', component: Phone },
  { value: 'video', label: 'Video', component: Video },
  { value: 'calendar', label: 'Calendar', component: Calendar },
];

const colorOptions = [
  { value: 'blue', label: 'Blue', class: 'bg-blue-100 text-blue-800' },
  { value: 'green', label: 'Green', class: 'bg-green-100 text-green-800' },
  { value: 'purple', label: 'Purple', class: 'bg-purple-100 text-purple-800' },
  { value: 'orange', label: 'Orange', class: 'bg-orange-100 text-orange-800' },
  { value: 'pink', label: 'Pink', class: 'bg-pink-100 text-pink-800' },
  { value: 'teal', label: 'Teal', class: 'bg-teal-100 text-teal-800' },
];

const categoryOptions = [
  { value: 'immediate', label: 'Immediate Support' },
  { value: 'ongoing', label: 'Ongoing Support' },
  { value: 'community', label: 'Community Support' },
  { value: 'professional', label: 'Professional Support' },
];

export function SupportPathsManagement() {
  const [supportPaths, setSupportPaths] = useState<SupportPath[]>([
    {
      id: '1',
      title: 'Crisis Support',
      description: 'Immediate help when you need it most',
      longDescription: 'Access to 24/7 crisis hotlines and emergency mental health support specifically for healthcare workers.',
      icon: 'phone',
      color: 'blue',
      category: 'immediate',
      contactMethod: 'phone',
      contactInfo: '+1-800-CRISIS',
      isActive: true,
      order: 1,
      features: ['24/7 availability', 'Trained counselors', 'Anonymous support']
    },
    {
      id: '2',
      title: 'Peer Support Groups',
      description: 'Connect with fellow healthcare workers',
      longDescription: 'Join support groups led by healthcare professionals who understand your unique challenges.',
      icon: 'users',
      color: 'green',
      category: 'community',
      contactMethod: 'form',
      contactInfo: 'https://forms.gle/peer-support',
      isActive: true,
      order: 2,
      features: ['Peer-led groups', 'Regular meetings', 'Safe space']
    },
    {
      id: '3',
      title: 'One-on-One Counseling',
      description: 'Professional therapy sessions',
      longDescription: 'Individual counseling sessions with licensed therapists who specialize in healthcare worker mental health.',
      icon: 'heart',
      color: 'purple',
      category: 'professional',
      contactMethod: 'booking',
      contactInfo: 'https://calendly.com/counseling',
      isActive: true,
      order: 3,
      features: ['Licensed therapists', 'Flexible scheduling', 'Confidential']
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPath, setEditingPath] = useState<SupportPath | null>(null);
  const [formData, setFormData] = useState<Partial<SupportPath>>({});

  const handleAddPath = () => {
    setEditingPath(null);
    setFormData({ isActive: true, order: supportPaths.length + 1, features: [] });
    setIsDialogOpen(true);
  };

  const handleEditPath = (path: SupportPath) => {
    setEditingPath(path);
    setFormData(path);
    setIsDialogOpen(true);
  };

  const handleDeletePath = (id: string) => {
    if (confirm('Are you sure you want to delete this support path?')) {
      setSupportPaths(supportPaths.filter(p => p.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPath) {
      setSupportPaths(supportPaths.map(p => 
        p.id === editingPath.id 
          ? { ...formData, id: editingPath.id } as SupportPath
          : p
      ));
    } else {
      const newPath: SupportPath = {
        ...formData,
        id: Date.now().toString(),
      } as SupportPath;
      setSupportPaths([...supportPaths, newPath]);
    }
    
    setIsDialogOpen(false);
    setFormData({});
  };

  const moveItem = (id: string, direction: 'up' | 'down') => {
    const sortedPaths = [...supportPaths].sort((a, b) => a.order - b.order);
    const currentIndex = sortedPaths.findIndex(path => path.id === id);
    
    if (
      (direction === 'up' && currentIndex > 0) ||
      (direction === 'down' && currentIndex < sortedPaths.length - 1)
    ) {
      const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
      const updatedPaths = [...sortedPaths];
      
      // Swap orders
      const temp = updatedPaths[currentIndex].order;
      updatedPaths[currentIndex].order = updatedPaths[newIndex].order;
      updatedPaths[newIndex].order = temp;
      
      setSupportPaths(updatedPaths);
    }
  };

  const togglePathStatus = (id: string) => {
    setSupportPaths(supportPaths.map(path =>
      path.id === id ? { ...path, isActive: !path.isActive } : path
    ));
  };

  const getIconComponent = (iconName: string) => {
    const iconOption = iconOptions.find(opt => opt.value === iconName);
    return iconOption ? iconOption.component : Heart;
  };

  const getColorClass = (colorName: string) => {
    const colorOption = colorOptions.find(opt => opt.value === colorName);
    return colorOption ? colorOption.class : 'bg-gray-100 text-gray-800';
  };

  const sortedPaths = [...supportPaths].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Support Paths Management</h2>
          <p className="text-gray-600">Manage support options and services for healthcare workers</p>
        </div>
        <Button onClick={handleAddPath}>
          <Plus className="mr-2 h-4 w-4" />
          Add Support Path
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPaths.map((path, index) => {
          const IconComponent = getIconComponent(path.icon);
          return (
            <Card key={path.id} className={`${!path.isActive ? 'opacity-60' : ''}`}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${getColorClass(path.color)}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{path.title}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1">
                        {categoryOptions.find(c => c.value === path.category)?.label}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => moveItem(path.id, 'up')}
                      disabled={index === 0}
                      className="h-6 w-6 p-0"
                    >
                      ↑
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => moveItem(path.id, 'down')}
                      disabled={index === sortedPaths.length - 1}
                      className="h-6 w-6 p-0"
                    >
                      ↓
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-3">{path.description}</p>
                
                {path.features && path.features.length > 0 && (
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {path.features.slice(0, 2).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {path.features.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{path.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>Order: {path.order}</span>
                  <span>Method: {path.contactMethod}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant={path.isActive ? "default" : "secondary"}
                    onClick={() => togglePathStatus(path.id)}
                    className="text-xs flex-1"
                  >
                    {path.isActive ? 'Active' : 'Inactive'}
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEditPath(path)}
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDeletePath(path.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingPath ? 'Edit Support Path' : 'Add Support Path'}
            </DialogTitle>
            <DialogDescription>
              Configure a support option for healthcare workers
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category || ''}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, category: value as SupportPath['category'] }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryOptions.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Short Description *</Label>
              <Input
                id="description"
                value={formData.description || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Brief description for the card"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="longDescription">Long Description</Label>
              <Textarea
                id="longDescription"
                value={formData.longDescription || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, longDescription: e.target.value }))}
                placeholder="Detailed description for expanded view"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="icon">Icon *</Label>
                <Select
                  value={formData.icon || ''}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, icon: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select icon" />
                  </SelectTrigger>
                  <SelectContent>
                    {iconOptions.map((icon) => (
                      <SelectItem key={icon.value} value={icon.value}>
                        {icon.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="color">Color *</Label>
                <Select
                  value={formData.color || ''}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, color: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent>
                    {colorOptions.map((color) => (
                      <SelectItem key={color.value} value={color.value}>
                        {color.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactMethod">Contact Method *</Label>
                <Select
                  value={formData.contactMethod || ''}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, contactMethod: value as SupportPath['contactMethod'] }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="form">Form</SelectItem>
                    <SelectItem value="booking">Booking Link</SelectItem>
                    <SelectItem value="external">External Link</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contactInfo">Contact Information *</Label>
                <Input
                  id="contactInfo"
                  value={formData.contactInfo || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactInfo: e.target.value }))}
                  placeholder="Phone, email, or URL"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="features">Features (comma-separated)</Label>
              <Input
                id="features"
                value={formData.features?.join(', ') || ''}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  features: e.target.value.split(',').map(f => f.trim()).filter(f => f)
                }))}
                placeholder="24/7 availability, Trained counselors, Anonymous support"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="order">Display Order</Label>
                <Input
                  id="order"
                  type="number"
                  value={formData.order || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, order: parseInt(e.target.value) || 1 }))}
                  min="1"
                />
              </div>
              
              <div className="flex items-center space-x-2 pt-6">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive || false}
                  onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                  className="rounded"
                />
                <Label htmlFor="isActive">Active (visible on website)</Label>
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {editingPath ? 'Update' : 'Add'} Support Path
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}