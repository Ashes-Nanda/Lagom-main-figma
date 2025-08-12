import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent } from '../ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Plus, Edit, Trash2, Calendar, MapPin, Clock, Users } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: string;
  category: string;
  image: string;
  status: 'Open' | 'Almost Full' | 'Full' | 'Ongoing' | 'Completed';
  registrationUrl?: string;
  maxCapacity?: number;
  currentRegistrations?: number;
}

const eventCategories = [
  'Healing Circle',
  'Meditation',
  'Workshop',
  'Book Club',
  'Support Group',
  'Training',
  'Conference',
  'Webinar'
];

const eventStatuses = [
  'Open',
  'Almost Full', 
  'Full',
  'Ongoing',
  'Completed'
];

export function EventsManagement() {
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Healing Circle Bangalore',
      description: 'A nurturing space to simply be, surrounded by people who understand your journey. Come as you are - leave feeling lighter!',
      date: '2025-08-17',
      time: '15:00-19:00',
      location: 'Bangalore, India',
      price: 'Free',
      category: 'Healing Circle',
      image: '/events/1.png',
      status: 'Open',
      registrationUrl: 'https://forms.gle/aEBVRTvV1swgRD178',
      maxCapacity: 50,
      currentRegistrations: 23
    },
    {
      id: '2',
      title: 'Mantra Meditation',
      description: 'Experience the healing power of mantra meditation designed specifically for healthcare workers.',
      date: '2025-08-11',
      time: '19:00-20:00',
      location: 'Virtual Event',
      price: 'Free',
      category: 'Meditation',
      image: '/events/5.png',
      status: 'Open',
      maxCapacity: 100,
      currentRegistrations: 45
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState<Partial<Event>>({});

  const handleAddEvent = () => {
    setEditingEvent(null);
    setFormData({});
    setIsDialogOpen(true);
  };

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event);
    setFormData(event);
    setIsDialogOpen(true);
  };

  const handleDeleteEvent = (id: string) => {
    if (confirm('Are you sure you want to delete this event?')) {
      setEvents(events.filter(e => e.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingEvent) {
      setEvents(events.map(e => 
        e.id === editingEvent.id 
          ? { ...formData, id: editingEvent.id } as Event
          : e
      ));
    } else {
      const newEvent: Event = {
        ...formData,
        id: Date.now().toString(),
        currentRegistrations: 0
      } as Event;
      setEvents([...events, newEvent]);
    }
    
    setIsDialogOpen(false);
    setFormData({});
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-green-100 text-green-800 border-green-200';
      case 'Almost Full': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Full': return 'bg-red-100 text-red-800 border-red-200';
      case 'Ongoing': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Completed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Events & Programs Management</h2>
          <p className="text-gray-600">Manage events, workshops, and programs</p>
        </div>
        <Button onClick={handleAddEvent}>
          <Plus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={event.image || '/placeholder.svg'}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-1">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleEditEvent(event)}
                >
                  <Edit className="h-3 w-3" />
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDeleteEvent(event.id)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="text-xs">
                    {event.category}
                  </Badge>
                  <Badge className={`text-xs ${getStatusColor(event.status)}`}>
                    {event.status}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-lg">{event.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
                
                <div className="space-y-1 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    {event.location}
                  </div>
                  {event.maxCapacity && (
                    <div className="flex items-center gap-2">
                      <Users className="h-3 w-3" />
                      {event.currentRegistrations || 0} / {event.maxCapacity} registered
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <span className="font-semibold text-primary">{event.price}</span>
                  {event.registrationUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                        View Registration
                      </a>
                    </Button>
                  )}
                </div>
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
              {editingEvent ? 'Edit Event' : 'Add Event'}
            </DialogTitle>
            <DialogDescription>
              Fill in the event details
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Event Title *</Label>
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
                  onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time">Time *</Label>
                <Input
                  id="time"
                  value={formData.time || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                  placeholder="e.g., 15:00-19:00"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="price">Price *</Label>
                <Input
                  id="price"
                  value={formData.price || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  placeholder="e.g., Free, $25"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  value={formData.location || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="e.g., Bangalore, India or Virtual Event"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="status">Status *</Label>
                <Select
                  value={formData.status || ''}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, status: value as Event['status'] }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventStatuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="maxCapacity">Max Capacity</Label>
                <Input
                  id="maxCapacity"
                  type="number"
                  value={formData.maxCapacity || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, maxCapacity: parseInt(e.target.value) || undefined }))}
                  placeholder="e.g., 50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="currentRegistrations">Current Registrations</Label>
                <Input
                  id="currentRegistrations"
                  type="number"
                  value={formData.currentRegistrations || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, currentRegistrations: parseInt(e.target.value) || 0 }))}
                  placeholder="e.g., 23"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="image">Event Image URL</Label>
                <Input
                  id="image"
                  value={formData.image || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                  placeholder="https://example.com/event-image.jpg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="registrationUrl">Registration URL</Label>
                <Input
                  id="registrationUrl"
                  value={formData.registrationUrl || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, registrationUrl: e.target.value }))}
                  placeholder="https://forms.gle/..."
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {editingEvent ? 'Update' : 'Add'} Event
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}