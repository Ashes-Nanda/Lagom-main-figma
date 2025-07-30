# Icon Usage Guidelines

## Overview
We use **Lucide React** icons in **line/outline style** throughout the application. Icons should only be used to reinforce meaning, not for decoration.

## Icon Constants

### Sizes
```tsx
import { ICON_SIZES } from "./ui/icons";

ICON_SIZES = {
  xs: "w-3 h-3",    // 12px - Badges, indicators
  sm: "w-4 h-4",    // 16px - Buttons, lists, most UI elements
  md: "w-5 h-5",    // 20px - Emphasis, larger buttons
  lg: "w-6 h-6",    // 24px - Feature icons, cards
  xl: "w-8 h-8",    // 32px - Hero sections, large features
  "2xl": "w-12 h-12", // 48px - Very large features
  "3xl": "w-16 h-16"  // 64px - Hero icons
}
```

### Semantic Icons
```tsx
import { SEMANTIC_ICONS } from "./ui/icons";

// ✅ Use these semantic icons
SEMANTIC_ICONS = {
  // Communication
  phone: PhoneCall,      // Near phone numbers
  email: Mail,           // Near email addresses
  message: MessageCircle, // Near messaging features
  
  // Navigation & Actions
  external: ExternalLink, // For external links
  download: Download,     // For downloadable content
  search: Search,         // For search functionality
  filter: Filter,         // For filtering options
  close: X,              // For close buttons
  
  // Media Controls
  play: Play,            // For media playback
  pause: Pause,          // For media pause
  volume: Volume2,       // For volume controls
  mute: VolumeX,         // For mute controls
  
  // Content Types
  book: BookOpen,        // For articles, reading
  headphones: Headphones, // For audio content
  brain: Brain,          // For mental health tools
  calendar: Calendar,     // For events, dates
  location: MapPin,      // For addresses, locations
  
  // Status & Feedback
  heart: Heart,          // For favorites, love
  star: Star,            // For ratings, favorites
  shield: Shield,        // For safety, protection
  clock: Clock,          // For time, duration
  alert: AlertTriangle,  // For warnings, alerts
  
  // Users & Social
  user: User,            // For individual users
  users: Users,          // For groups, communities
  userCheck: UserCheck,  // For verified users
  
  // And many more...
}
```

## Usage Examples

### ✅ Good - Semantic Usage
```tsx
// Phone icon near phone number
<SEMANTIC_ICONS.phone className={`${ICON_SIZES.sm} text-accent`} />
<span>+1 (555) 123-4567</span>

// Calendar icon near event date
<SEMANTIC_ICONS.calendar className={`${ICON_SIZES.sm} text-accent`} />
<span>March 15, 2025</span>

// Location icon near address
<SEMANTIC_ICONS.location className={`${ICON_SIZES.sm} text-accent`} />
<span>San Francisco, CA</span>

// Download icon for downloadable content
<SEMANTIC_ICONS.download className={`${ICON_SIZES.sm} mr-2`} />
<span>Download Guide</span>
```

### ❌ Avoid - Arbitrary Usage
```tsx
// Don't use heart icon just for decoration
<Heart className="w-4 h-4" />
<span>Random content</span>

// Don't use star icon without rating context
<Star className="w-4 h-4" />
<span>Generic button</span>

// Don't use random icons to fill space
<Zap className="w-4 h-4" />
<span>Unrelated content</span>
```

## Implementation

### Using Icon Constants
```tsx
import { SEMANTIC_ICONS, ICON_SIZES } from "./ui/icons";

// In your component
<SEMANTIC_ICONS.phone className={`${ICON_SIZES.sm} text-accent mr-2`} />
```

### Helper Function
```tsx
import { getIcon } from "./ui/icons";

// Alternative approach
{getIcon("phone", "sm", "text-accent mr-2")}
```

## Best Practices

1. **Always use semantic icons** - Icons should reinforce the meaning of the content
2. **Consistent sizing** - Use the predefined size constants
3. **Meaningful placement** - Place icons near related content
4. **Accessibility** - Icons should enhance, not replace, text content
5. **Line style only** - We use Lucide React's line/outline style consistently

## Common Patterns

### Navigation
- `external` - External links
- `chevronDown/chevronUp` - Dropdowns
- `arrowLeft/arrowRight` - Navigation

### Content Types
- `book` - Articles, reading materials
- `headphones` - Audio content, podcasts
- `play` - Video content
- `brain` - Mental health tools

### Actions
- `download` - Downloadable content
- `search` - Search functionality
- `filter` - Filtering options
- `close` - Close buttons

### Status
- `heart` - Favorites, love
- `star` - Ratings, favorites
- `shield` - Safety, protection
- `clock` - Time, duration 