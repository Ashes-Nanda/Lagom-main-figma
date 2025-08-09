import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Phone, MessageSquare, Globe } from 'lucide-react';
import { Input } from './input';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { CountryData, CrisisContact, searchCountries } from '../../lib/crisisSupportData';

interface CountrySearchProps {
  onCountrySelect?: (country: CountryData) => void;
}

export function CountrySearch({ onCountrySelect }: CountrySearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredCountries = useMemo(() => {
    return searchCountries(searchQuery);
  }, [searchQuery]);

  const handleCountrySelect = (country: CountryData) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setSearchQuery('');
    onCountrySelect?.(country);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsDropdownOpen(false);
      setSearchQuery('');
    }
  };

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const getContactIcon = (type: CrisisContact['type']) => {
    switch (type) {
      case 'call':
        return <Phone className="w-4 h-4" />;
      case 'text':
        return <MessageSquare className="w-4 h-4" />;
      case 'both':
        return <Phone className="w-4 h-4" />;
      default:
        return <Phone className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto" ref={containerRef}>
      {/* Search Input */}
      <div className="relative mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="text"
            placeholder="🔍 Find my country..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsDropdownOpen(true);
            }}
            onFocus={() => setIsDropdownOpen(true)}
            onKeyDown={handleKeyDown}
            className="pl-10 pr-4 py-3 text-lg"
            aria-label="Search for your country"
          />
        </div>

        {/* Dropdown */}
        {isDropdownOpen && searchQuery && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => handleCountrySelect(country)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-2xl">{country.flag}</span>
                  <span className="font-medium">{country.name}</span>
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-muted-foreground text-center">
                No countries found matching "{searchQuery}"
              </div>
            )}
          </div>
        )}
      </div>

      {/* Selected Country Crisis Support */}
      {selectedCountry && (
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <span className="text-3xl">{selectedCountry.flag}</span>
              <span>{selectedCountry.name} Crisis Support</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {selectedCountry.contacts.map((contact, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {getContactIcon(contact.type)}
                        <span className="font-semibold text-lg">{contact.name}</span>
                        {contact.hours && (
                          <span className="text-sm text-muted-foreground bg-white px-2 py-1 rounded">
                            {contact.hours}
                          </span>
                        )}
                      </div>
                      {contact.description && (
                        <p className="text-sm text-muted-foreground mb-3">{contact.description}</p>
                      )}
                      <div className="flex items-center gap-2 text-sm font-mono text-gray-700">
                        <span className="font-semibold">{contact.phone}</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => handleCall(contact.phone)}
                      className="ml-4 bg-red-600 hover:bg-red-700 text-white font-semibold px-6"
                      size="lg"
                    >
                      {contact.type === 'text' ? '💬 Text Now' : '📞 Call Now'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Instructions */}
      {!selectedCountry && (
        <div className="text-center text-muted-foreground">
          <Globe className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p>Start typing your country name to find crisis support resources</p>
          <p className="text-sm mt-1">Data sourced from WHO and Befrienders International</p>
        </div>
      )}
    </div>
  );
}