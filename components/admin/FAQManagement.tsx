import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent } from '../ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Plus, Edit, Trash2, ChevronDown, ChevronRight } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

interface FAQItem {
  id: string;
  title: string;
  content: string;
  order: number;
  isActive: boolean;
}

export function FAQManagement() {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      id: '1',
      title: 'What does "Being.Lagom" mean, and how do you pronounce it?',
      content: '"Lagom" is a Swedish word that means not too much, not too little - just right. It\'s pronounced "la-gom" (rhymes with problem, ironically). Think of it as the opposite of your hospital shift schedule: not overburdened, not underutilized - just… enough.\n\nBeing.Lagom is about reclaiming that elusive middle ground - in healing, in helping, and in how we show up for ourselves.',
      order: 1,
      isActive: true
    },
    {
      id: '2',
      title: 'How can I get involved in the Being.Lagom community?',
      content: 'Start where you are. Whether it\'s joining our events, co-creating healing circles, or simply following us on social media - there\'s space for you here. You can even start your own Being.Lagom chapter.\n\nWe\'re building a movement, not a membership. No hierarchy, no gatekeeping — just humans showing up for each other in radically honest, hopeful ways.',
      order: 2,
      isActive: true
    },
    {
      id: '3',
      title: 'Can I really make a difference in addressing physician burnout and mental health issues?',
      content: 'Yes. And not just in some vague, motivational way.\n\nAs Margaret Mead said: "Never doubt that a small group of thoughtful, committed citizens can change the world. Indeed, it is the only thing that ever has."\n\nBurnout isn\'t just an individual problem - it\'s a systemic crisis. But systems don\'t shift without culture change, and culture doesn\'t shift without courageous communities. That\'s where you come in. One conversation, one circle, one action at a time.',
      order: 3,
      isActive: true
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<FAQItem | null>(null);
  const [formData, setFormData] = useState<Partial<FAQItem>>({});
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const handleAddItem = () => {
    setEditingItem(null);
    setFormData({ isActive: true, order: faqItems.length + 1 });
    setIsDialogOpen(true);
  };

  const handleEditItem = (item: FAQItem) => {
    setEditingItem(item);
    setFormData(item);
    setIsDialogOpen(true);
  };

  const handleDeleteItem = (id: string) => {
    if (confirm('Are you sure you want to delete this FAQ item?')) {
      setFaqItems(faqItems.filter(item => item.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingItem) {
      setFaqItems(faqItems.map(item => 
        item.id === editingItem.id 
          ? { ...formData, id: editingItem.id } as FAQItem
          : item
      ));
    } else {
      const newItem: FAQItem = {
        ...formData,
        id: Date.now().toString(),
      } as FAQItem;
      setFaqItems([...faqItems, newItem]);
    }
    
    setIsDialogOpen(false);
    setFormData({});
  };

  const toggleItemExpansion = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const moveItem = (id: string, direction: 'up' | 'down') => {
    const sortedItems = [...faqItems].sort((a, b) => a.order - b.order);
    const currentIndex = sortedItems.findIndex(item => item.id === id);
    
    if (
      (direction === 'up' && currentIndex > 0) ||
      (direction === 'down' && currentIndex < sortedItems.length - 1)
    ) {
      const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
      const updatedItems = [...sortedItems];
      
      // Swap orders
      const temp = updatedItems[currentIndex].order;
      updatedItems[currentIndex].order = updatedItems[newIndex].order;
      updatedItems[newIndex].order = temp;
      
      setFaqItems(updatedItems);
    }
  };

  const toggleItemStatus = (id: string) => {
    setFaqItems(faqItems.map(item =>
      item.id === id ? { ...item, isActive: !item.isActive } : item
    ));
  };

  const sortedItems = [...faqItems].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">FAQ Management</h2>
          <p className="text-gray-600">Manage frequently asked questions and their answers</p>
        </div>
        <Button onClick={handleAddItem}>
          <Plus className="mr-2 h-4 w-4" />
          Add FAQ Item
        </Button>
      </div>

      <div className="space-y-4">
        {sortedItems.map((item, index) => (
          <Card key={item.id} className={`${!item.isActive ? 'opacity-60' : ''}`}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Collapsible
                    open={expandedItems.has(item.id)}
                    onOpenChange={() => toggleItemExpansion(item.id)}
                  >
                    <CollapsibleTrigger className="flex items-center gap-2 text-left hover:text-primary transition-colors">
                      {expandedItems.has(item.id) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                      <h3 className="font-semibold text-sm pr-4">{item.title}</h3>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="mt-3 ml-6">
                      <div className="text-sm text-gray-600 whitespace-pre-wrap">
                        {item.content}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <div className="flex flex-col gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => moveItem(item.id, 'up')}
                      disabled={index === 0}
                      className="h-6 w-6 p-0"
                    >
                      ↑
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => moveItem(item.id, 'down')}
                      disabled={index === sortedItems.length - 1}
                      className="h-6 w-6 p-0"
                    >
                      ↓
                    </Button>
                  </div>
                  
                  <Button
                    size="sm"
                    variant={item.isActive ? "default" : "secondary"}
                    onClick={() => toggleItemStatus(item.id)}
                    className="text-xs"
                  >
                    {item.isActive ? 'Active' : 'Inactive'}
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEditItem(item)}
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                <span>Order: {item.order}</span>
                <span>Status: {item.isActive ? 'Active' : 'Inactive'}</span>
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
              {editingItem ? 'Edit FAQ Item' : 'Add FAQ Item'}
            </DialogTitle>
            <DialogDescription>
              Create or modify a frequently asked question
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Question *</Label>
              <Input
                id="title"
                value={formData.title || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter the question"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Answer *</Label>
              <Textarea
                id="content"
                value={formData.content || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                placeholder="Enter the answer (supports line breaks)"
                rows={6}
                required
              />
              <p className="text-xs text-gray-500">
                Use line breaks to separate paragraphs. The content will preserve formatting.
              </p>
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
                {editingItem ? 'Update' : 'Add'} FAQ Item
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}