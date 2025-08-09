export interface CrisisContact {
  name: string;
  phone: string;
  type: 'call' | 'text' | 'both';
  hours?: string;
  description?: string;
  website?: string;
}

export interface CountryData {
  code: string;
  name: string;
  flag: string;
  contacts: CrisisContact[];
}

// Crisis support data sourced from WHO and Befrienders International
export const CRISIS_SUPPORT_DATA: CountryData[] = [
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    contacts: [
      { 
        name: 'Suicide & Crisis Lifeline', 
        phone: '988', 
        type: 'both', 
        hours: '24/7',
        description: 'Call or text for immediate support'
      },
      { 
        name: 'Crisis Text Line', 
        phone: '741741', 
        type: 'text', 
        description: 'Text HOME to 741741',
        hours: '24/7'
      },
      { 
        name: 'SAMHSA Mental Health', 
        phone: '1-800-662-4357', 
        type: 'call', 
        hours: '24/7',
        description: 'Treatment referral and information service'
      }
    ]
  },
  {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    contacts: [
      { 
        name: 'Snehi Helpline', 
        phone: '+91 95822 16860', 
        type: 'call', 
        hours: '24/7',
        description: 'Delhi-based crisis helpline'
      },
      { 
        name: 'AASRA', 
        phone: '+91 98204 66726', 
        type: 'call', 
        hours: '24/7',
        description: 'Mumbai-based suicide prevention'
      },
      { 
        name: 'Vandrevala Foundation', 
        phone: '1860 266 2345', 
        type: 'call', 
        hours: '24/7',
        description: 'Mental health support and counseling'
      }
    ]
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    contacts: [
      { 
        name: 'Samaritans', 
        phone: '116 123', 
        type: 'call', 
        hours: '24/7',
        description: 'Free emotional support for anyone in distress'
      },
      { 
        name: 'Shout Crisis Text Line', 
        phone: '85258', 
        type: 'text', 
        description: 'Text SHOUT to 85258',
        hours: '24/7'
      },
      { 
        name: 'NHS Mental Health Helpline', 
        phone: '111', 
        type: 'call', 
        hours: '24/7',
        description: 'NHS urgent mental health support'
      }
    ]
  },
  {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    contacts: [
      { 
        name: 'Talk Suicide Canada', 
        phone: '1-833-456-4566', 
        type: 'call', 
        hours: '24/7',
        description: 'National suicide prevention service'
      },
      { 
        name: 'Crisis Text Line', 
        phone: '686868', 
        type: 'text', 
        description: 'Text TALK to 686868',
        hours: '24/7'
      },
      { 
        name: 'Kids Help Phone', 
        phone: '1-800-668-6868', 
        type: 'both', 
        hours: '24/7',
        description: 'Support for young people up to age 29'
      }
    ]
  },
  {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    contacts: [
      { 
        name: 'Lifeline', 
        phone: '13 11 14', 
        type: 'call', 
        hours: '24/7',
        description: 'Crisis support and suicide prevention'
      },
      { 
        name: 'Beyond Blue', 
        phone: '1300 22 4636', 
        type: 'call', 
        hours: '24/7',
        description: 'Depression, anxiety and suicide prevention'
      },
      { 
        name: 'Crisis Text Line', 
        phone: '0477 13 11 14', 
        type: 'text', 
        hours: '24/7',
        description: 'Text-based crisis support'
      }
    ]
  },
  {
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪',
    contacts: [
      { 
        name: 'Telefonseelsorge', 
        phone: '0800 111 0 111', 
        type: 'call', 
        hours: '24/7',
        description: 'Free telephone counseling service'
      },
      { 
        name: 'Telefonseelsorge (Alternative)', 
        phone: '0800 111 0 222', 
        type: 'call', 
        hours: '24/7',
        description: 'Alternative number for telephone counseling'
      }
    ]
  },
  {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷',
    contacts: [
      { 
        name: 'SOS Amitié', 
        phone: '09 72 39 40 50', 
        type: 'call', 
        hours: '24/7',
        description: 'Emotional support and suicide prevention'
      },
      { 
        name: 'Suicide Écoute', 
        phone: '01 45 39 40 00', 
        type: 'call', 
        hours: '24/7',
        description: 'National suicide prevention hotline'
      }
    ]
  },
  {
    code: 'JP',
    name: 'Japan',
    flag: '🇯🇵',
    contacts: [
      { 
        name: 'TELL Lifeline', 
        phone: '03-5774-0992', 
        type: 'call', 
        hours: '9:00-23:00',
        description: 'English-language crisis support'
      },
      { 
        name: 'Inochi no Denwa', 
        phone: '0570-783-556', 
        type: 'call', 
        hours: '24/7',
        description: 'Japanese crisis support hotline'
      }
    ]
  },
  {
    code: 'BR',
    name: 'Brazil',
    flag: '🇧🇷',
    contacts: [
      { 
        name: 'CVV - Centro de Valorização da Vida', 
        phone: '188', 
        type: 'call', 
        hours: '24/7',
        description: 'Suicide prevention and emotional support'
      }
    ]
  },
  {
    code: 'ZA',
    name: 'South Africa',
    flag: '🇿🇦',
    contacts: [
      { 
        name: 'SADAG', 
        phone: '0800 567 567', 
        type: 'call', 
        hours: '8:00-20:00',
        description: 'South African Depression and Anxiety Group'
      },
      { 
        name: 'Lifeline', 
        phone: '0861 322 322', 
        type: 'call', 
        hours: '24/7',
        description: 'Crisis counseling and suicide prevention'
      }
    ]
  }
];

// Helper function to get country by code
export function getCountryByCode(code: string): CountryData | undefined {
  return CRISIS_SUPPORT_DATA.find(country => country.code === code);
}

// Helper function to search countries
export function searchCountries(query: string): CountryData[] {
  if (!query.trim()) return CRISIS_SUPPORT_DATA;
  
  const lowercaseQuery = query.toLowerCase();
  return CRISIS_SUPPORT_DATA.filter(country =>
    country.name.toLowerCase().includes(lowercaseQuery) ||
    country.code.toLowerCase().includes(lowercaseQuery)
  );
}