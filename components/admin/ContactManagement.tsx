import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Plus, Edit, Trash2, Phone, Globe, Clock } from 'lucide-react';

interface CrisisContact {
  id: string;
  name: string;
  phone: string;
  type: 'call' | 'text' | 'both';
  hours?: string;
  description?: string;
  website?: string;
}

interface CountryData {
  id: string;
  code: string;
  name: string;
  flag: string;
  contacts: CrisisContact[];
}

export function ContactManagement() {
  const [countries, setCountries] = useState<CountryData[]>([
    {
      id: '1',
      code: 'SG',
      name: 'Singapore',
      flag: '🇸🇬',
      contacts: [
        {
          id: '1',
          name: 'National Mindline',
          phone: '1771',
          type: 'call',
          hours: '24/7',
          description: '24/7 mental health support'
        },
        {
          id: '2',
          name: 'Institute of Mental Health Helpline',
          phone: '6389 2222',
          type: 'call',
          hours: '24/7',
          description: '24-hour mental health crisis support'
        }
      ]
    },
    {
      id: '2',
      code: 'IN',
      name: 'India',
      flag: '🇮🇳',
      contacts: [
        {
          id: '3',
          name: 'Emergency Suicide Hotline',
          phone: '112',
          type: 'call',
          hours: '24/7',
          description: 'National emergency number'
        },
        {
          id: '4',
          name: 'Vandrevala Foundation',
          phone: '9999 666 555',
          type: 'call',
          hours: '24/7',
          description: 'Crisis helpline and mental health support'
        }
      ]
    }
  ]);

  const [isCountryDialogOpen, setIsCountryDialogOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [editingCountry, setEditingCountry] = useState<CountryData | null>(null);
  const [editingContact, setEditingContact] = useState<{ country: CountryData; contact: CrisisContact } | null>(null);
  const [countryFormData, setCountryFormData] = useState<Partial<CountryData>>({});
  const [contactFormData, setContactFormData] = useState<Partial<CrisisContact>>({});
  const [selectedCountryForContact, setSelectedCountryForContact] = useState<CountryData | null>(null);

  const handleAddCountry = () => {
    setEditingCountry(null);
    setCountryFormData({ contacts: [] });
    setIsCountryDialogOpen(true);
  };

  const handleEditCountry = (country: CountryData) => {
    setEditingCountry(country);
    setCountryFormData(country);
    setIsCountryDialogOpen(true);
  };

  const handleDeleteCountry = (id: string) => {
    if (confirm('Are you sure you want to delete this country and all its contacts?')) {
      setCountries(countries.filter(c => c.id !== id));
    }
  };

  const handleAddContact = (country: CountryData) => {
    setEditingContact(null);
    setContactFormData({});
    setSelectedCountryForContact(country);
    setIsContactDialogOpen(true);
  };

  const handleEditContact = (country: CountryData, contact: CrisisContact) => {
    setEditingContact({ country, contact });
    setContactFormData(contact);
    setSelectedCountryForContact(country);
    setIsContactDialogOpen(true);
  };

  const handleDeleteContact = (countryId: string, contactId: string) => {
    if (confirm('Are you sure you want to delete this contact?')) {
      setCountries(countries.map(country =>
        country.id === countryId
          ? { ...country, contacts: country.contacts.filter(c => c.id !== contactId) }
          : country
      ));
    }
  };

  const handleCountrySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingCountry) {
      setCountries(countries.map(c => 
        c.id === editingCountry.id 
          ? { ...countryFormData, id: editingCountry.id, contacts: editingCountry.contacts } as CountryData
          : c
      ));
    } else {
      const newCountry: CountryData = {
        ...countryFormData,
        id: Date.now().toString(),
        contacts: []
      } as CountryData;
      setCountries([...countries, newCountry]);
    }
    
    setIsCountryDialogOpen(false);
    setCountryFormData({});
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCountryForContact) return;

    if (editingContact) {
      setCountries(countries.map(country =>
        country.id === selectedCountryForContact.id
          ? {
              ...country,
              contacts: country.contacts.map(contact =>
                contact.id === editingContact.contact.id
                  ? { ...contactFormData, id: editingContact.contact.id } as CrisisContact
                  : contact
              )
            }
          : country
      ));
    } else {
      const newContact: CrisisContact = {
        ...contactFormData,
        id: Date.now().toString(),
      } as CrisisContact;
      
      setCountries(countries.map(country =>
        country.id === selectedCountryForContact.id
          ? { ...country, contacts: [...country.contacts, newContact] }
          : country
      ));
    }
    
    setIsContactDialogOpen(false);
    setContactFormData({});
    setSelectedCountryForContact(null);
  };

  const getContactTypeColor = (type: string) => {
    switch (type) {
      case 'call': return 'bg-blue-100 text-blue-800';
      case 'text': return 'bg-green-100 text-green-800';
      case 'both': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Contact & Crisis Support Management</h2>
          <p className="text-gray-600">Manage crisis support contacts by country</p>
        </div>
        <Button onClick={handleAddCountry}>
          <Plus className="mr-2 h-4 w-4" />
          Add Country
        </Button>
      </div>

      <div className="space-y-6">
        {countries.map((country) => (
          <Card key={country.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{country.flag}</span>
                  <div>
                    <CardTitle className="text-lg">{country.name}</CardTitle>
                    <CardDescription>Code: {country.code}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleAddContact(country)}
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    Add Contact
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEditCountry(country)}
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDeleteCountry(country.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                {country.contacts.map((contact) => (
                  <div key={contact.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm">{contact.name}</h4>
                        <Badge className={`text-xs ${getContactTypeColor(contact.type)}`}>
                          {contact.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {contact.phone}
                        </div>
                        {contact.hours && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {contact.hours}
                          </div>
                        )}
                        {contact.website && (
                          <div className="flex items-center gap-1">
                            <Globe className="h-3 w-3" />
                            Website
                          </div>
                        )}
                      </div>
                      
                      {contact.description && (
                        <p className="text-xs text-gray-500 mt-1">{contact.description}</p>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-1 ml-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEditContact(country, contact)}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteContact(country.id, contact.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                {country.contacts.length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-4">
                    No contacts added yet. Click "Add Contact" to get started.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Country Add/Edit Dialog */}
      <Dialog open={isCountryDialogOpen} onOpenChange={setIsCountryDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingCountry ? 'Edit Country' : 'Add Country'}
            </DialogTitle>
            <DialogDescription>
              Country information for crisis support
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleCountrySubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Country Name *</Label>
              <Input
                id="name"
                value={countryFormData.name || ''}
                onChange={(e) => setCountryFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="code">Country Code *</Label>
              <Input
                id="code"
                value={countryFormData.code || ''}
                onChange={(e) => setCountryFormData(prev => ({ ...prev, code: e.target.value.toUpperCase() }))}
                placeholder="e.g., US, IN, SG"
                maxLength={2}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="flag">Flag Emoji *</Label>
              <Input
                id="flag"
                value={countryFormData.flag || ''}
                onChange={(e) => setCountryFormData(prev => ({ ...prev, flag: e.target.value }))}
                placeholder="e.g., 🇺🇸, 🇮🇳, 🇸🇬"
                required
              />
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsCountryDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {editingCountry ? 'Update' : 'Add'} Country
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Contact Add/Edit Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingContact ? 'Edit Contact' : 'Add Contact'}
            </DialogTitle>
            <DialogDescription>
              Crisis support contact information
              {selectedCountryForContact && ` for ${selectedCountryForContact.name}`}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contactName">Contact Name *</Label>
              <Input
                id="contactName"
                value={contactFormData.name || ''}
                onChange={(e) => setContactFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={contactFormData.phone || ''}
                  onChange={(e) => setContactFormData(prev => ({ ...prev, phone: e.target.value }))}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="type">Contact Type *</Label>
                <Select
                  value={contactFormData.type || ''}
                  onValueChange={(value) => setContactFormData(prev => ({ ...prev, type: value as CrisisContact['type'] }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="call">Call Only</SelectItem>
                    <SelectItem value="text">Text Only</SelectItem>
                    <SelectItem value="both">Call & Text</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="hours">Operating Hours</Label>
                <Input
                  id="hours"
                  value={contactFormData.hours || ''}
                  onChange={(e) => setContactFormData(prev => ({ ...prev, hours: e.target.value }))}
                  placeholder="e.g., 24/7, 9:00-17:00"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="website">Website (Optional)</Label>
                <Input
                  id="website"
                  value={contactFormData.website || ''}
                  onChange={(e) => setContactFormData(prev => ({ ...prev, website: e.target.value }))}
                  placeholder="https://example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={contactFormData.description || ''}
                onChange={(e) => setContactFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Brief description of the service"
                rows={2}
              />
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsContactDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {editingContact ? 'Update' : 'Add'} Contact
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}