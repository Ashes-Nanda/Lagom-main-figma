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
    code: 'SG',
    name: 'Singapore',
    flag: '🇸🇬',
    contacts: [
      { 
        name: 'National Mindline', 
        phone: '1771', 
        type: 'call', 
        hours: '24/7',
        description: '24/7 mental health support'
      },
      { 
        name: 'Institute of Mental Health Helpline', 
        phone: '6389 2222', 
        type: 'call', 
        hours: '24/7',
        description: '24-hour mental health crisis support'
      },
      { 
        name: 'Samaritans of Singapore', 
        phone: '1-767', 
        type: 'call', 
        hours: '24/7',
        description: '24-hour crisis hotline'
      },
      { 
        name: 'Hear4U WhatsApp', 
        phone: '6978 2728', 
        type: 'text', 
        hours: 'Various',
        description: 'WhatsApp counselling service'
      }
    ]
  },
  {
    code: 'NL',
    name: 'Netherlands',
    flag: '🇳🇱',
    contacts: [
      { 
        name: '113 Suicide Prevention', 
        phone: '113', 
        type: 'call', 
        hours: '24/7',
        description: 'Primary crisis hotline'
      },
      { 
        name: '113 Suicide Prevention (Alternative)', 
        phone: '0800 0113', 
        type: 'call', 
        hours: '24/7',
        description: 'Alternative crisis hotline number'
      },
      { 
        name: 'GGZ Nederland Mental Health', 
        phone: '0900 1450', 
        type: 'call', 
        hours: '09:00-21:00',
        description: 'Mental health helpline'
      },
      { 
        name: 'Emergency Services', 
        phone: '112', 
        type: 'call', 
        hours: '24/7',
        description: 'Police, medical emergency'
      },
      { 
        name: 'LGBTQIA+ Switchboard', 
        phone: '0800 228 888', 
        type: 'call', 
        hours: '18:00-21:00',
        description: 'LGBTQIA+ support (evenings)'
      }
    ]
  },
  {
    code: 'LK',
    name: 'Sri Lanka',
    flag: '🇱🇰',
    contacts: [
      { 
        name: 'National Mental Health Helpline', 
        phone: '1926', 
        type: 'call', 
        hours: '24/7',
        description: 'National mental health support'
      },
      { 
        name: 'Sumithrayo', 
        phone: '0112 692 909', 
        type: 'call', 
        hours: '09:00-20:00',
        description: 'Suicide prevention and emotional support'
      },
      { 
        name: 'Emergency Services', 
        phone: '110', 
        type: 'call', 
        hours: '24/7',
        description: 'Medical emergency'
      },
      { 
        name: 'Police Emergency', 
        phone: '119', 
        type: 'call', 
        hours: '24/7',
        description: 'Police emergency'
      },
      { 
        name: 'Women\'s Protection Helpline', 
        phone: '1938', 
        type: 'call', 
        hours: '24/7',
        description: 'Women\'s protection and support'
      }
    ]
  },
  {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    contacts: [
      { 
        name: 'Emergency Suicide Hotline', 
        phone: '112', 
        type: 'call', 
        hours: '24/7',
        description: 'National emergency number'
      },
      { 
        name: 'Emergency Suicide Hotline (Alternative)', 
        phone: '8888817666', 
        type: 'call', 
        hours: '24/7',
        description: 'Alternative emergency suicide hotline'
      },
      { 
        name: 'ND Prana Lifeline', 
        phone: '1800 121 203040', 
        type: 'call', 
        hours: '24/7',
        description: 'Mental health crisis support'
      },
      { 
        name: 'Vandrevala Foundation', 
        phone: '9999 666 555', 
        type: 'call', 
        hours: '24/7',
        description: 'Crisis helpline and mental health support'
      },
      { 
        name: '1 Life Crisis Support', 
        phone: '78930 78930', 
        type: 'call', 
        hours: '24/7',
        description: 'Crisis support and counseling'
      },
      { 
        name: 'Manodarpan', 
        phone: '844 844 0632', 
        type: 'call', 
        hours: 'Various',
        description: 'Support for students and teachers'
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
        description: 'Mental health support'
      },
      { 
        name: 'Suicide Call Back Service', 
        phone: '1300 659 467', 
        type: 'call', 
        hours: '24/7',
        description: 'Suicide prevention callback service'
      },
      { 
        name: 'Emergency Services', 
        phone: '000', 
        type: 'call', 
        hours: '24/7',
        description: 'Police, ambulance, fire emergency'
      },
      { 
        name: 'Drs4Drs Australia', 
        phone: 'Various', 
        type: 'call', 
        hours: 'Various',
        description: 'Specifically supports doctors',
        website: 'https://www.drs4drs.com.au'
      }
    ]
  },
  {
    code: 'MY',
    name: 'Malaysia',
    flag: '🇲🇾',
    contacts: [
      { 
        name: 'Befrienders Malaysia', 
        phone: '15999', 
        type: 'call', 
        hours: '24/7',
        description: 'Primary crisis hotline'
      },
      { 
        name: 'Talian Kasih', 
        phone: '03-2935 9935', 
        type: 'call', 
        hours: '24/7',
        description: 'Mental health helpline'
      },
      { 
        name: 'Emergency Services', 
        phone: '999', 
        type: 'call', 
        hours: '24/7',
        description: 'Emergency number'
      }
    ]
  },
  {
    code: 'CN',
    name: 'China',
    flag: '🇨🇳',
    contacts: [
      { 
        name: 'Mental Health Hotline', 
        phone: '12356', 
        type: 'call', 
        hours: '24/7',
        description: 'Nationwide mental health and psychological distress hotline'
      },
      { 
        name: 'Beijing/Guangzhou Crisis Hotline', 
        phone: '81899120', 
        type: 'call', 
        hours: '24/7',
        description: '24/7 crisis hotline for Beijing and Guangzhou'
      },
      { 
        name: 'LifeLine Across China', 
        phone: 'Various', 
        type: 'call', 
        hours: 'Various',
        description: 'English-speaking crisis hotline'
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
        name: 'NHS Mental Health Crisis', 
        phone: '111', 
        type: 'call', 
        hours: '24/7',
        description: 'NHS mental health crisis services (choose mental health option)'
      },
      { 
        name: 'Greater Manchester Crisis Line', 
        phone: '0800 953 0285', 
        type: 'call', 
        hours: '24/7',
        description: 'Local crisis helpline for Greater Manchester area'
      }
    ]
  },
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    contacts: [
      { 
        name: '988 Lifeline', 
        phone: '988', 
        type: 'both', 
        hours: '24/7',
        description: 'National Suicide Prevention Lifeline - call or text'
      },
      { 
        name: 'Lorna Breen Foundation', 
        phone: 'Various', 
        type: 'call', 
        hours: 'Various',
        description: 'Resources for healthcare providers',
        website: 'https://www.drlornabreen.org'
      },
      { 
        name: 'Employee Assistance Programs', 
        phone: 'Various', 
        type: 'call', 
        hours: 'Various',
        description: 'Many hospitals have specialized crisis support for healthcare workers'
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