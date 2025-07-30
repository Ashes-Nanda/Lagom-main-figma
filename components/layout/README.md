# Layout System Documentation

## Overview

This layout system provides consistent spacing, prevents content overlap with sticky navigation, and ensures accessibility compliance across the Being.Lagom platform.

## Components

### PageLayout
Main page wrapper that handles sticky navigation offset and provides consistent page-level spacing.

```tsx
<PageLayout 
  withTopPadding={true}    // Prevents overlap with sticky header
  spacing="md"             // Adds consistent horizontal padding
  fullHeight={true}        // Ensures minimum viewport height
>
  {children}
</PageLayout>
```

### SectionContainer
Standardized section wrapper with responsive spacing and semantic markup.

```tsx
<SectionContainer
  spacing="lg"                    // Vertical padding (sm|md|lg|xl)
  size="xl"                      // Max width constraint
  background="muted"             // Background variant
  aria-label="Section description"
>
  {children}
</SectionContainer>
```

### GridContainer
Responsive grid with consistent spacing and accessibility features.

```tsx
<GridContainer
  columns={{ default: 1, md: 2, lg: 3 }}
  gap="md"
  align="stretch"
  autoFit={true}                 // CSS Grid auto-fit
  minItemWidth="300px"           // Minimum item width for auto-fit
  aria-label="Grid of items"
>
  {children}
</GridContainer>
```

### ContentContainer
Content wrapper that ensures proper spacing and prevents overflow.

```tsx
<ContentContainer
  spacing="normal"               // Space between child elements
  centerContent={true}           // Center horizontally
  preventOverflow={true}         // Prevent horizontal scroll
  size="lg"                     // Max width constraint
>
  {children}
</ContentContainer>
```

### StickyAwareContainer
Automatically adjusts for sticky navigation height.

```tsx
<StickyAwareContainer
  offsetSelector="header"        // Element to measure
  additionalOffset={16}          // Extra spacing if needed
>
  {children}
</StickyAwareContainer>
```

### AccessibleContainer
Ensures accessibility compliance with proper touch targets and focus management.

```tsx
<AccessibleContainer
  touchTargets={true}            // Enforce minimum touch target sizes
  focusManagement={true}         // Handle focus indicators
  spacing="comfortable"          // Accessibility-compliant spacing
  interactive={true}             // Interactive container styles
  aria-label="Accessible content area"
>
  {children}
</AccessibleContainer>
```

### Spacer
Utility component for consistent spacing between elements.

```tsx
<Spacer 
  size="lg"                     // xs|sm|md|lg|xl|2xl|3xl|4xl
  direction="vertical"          // vertical|horizontal|both
  responsive={true}             // Responsive sizing
/>
```

## CSS Utilities

### Spacing Variables
```css
--spacing-xs: 0.25rem;    /* 4px */
--spacing-sm: 0.5rem;     /* 8px */
--spacing-md: 1rem;       /* 16px */
--spacing-lg: 1.5rem;     /* 24px */
--spacing-xl: 2rem;       /* 32px */
--spacing-2xl: 3rem;      /* 48px */
--spacing-3xl: 4rem;      /* 64px */
--spacing-4xl: 5rem;      /* 80px */
```

### Touch Target Variables
```css
--touch-target-min: 2.75rem;        /* 44px - WCAG minimum */
--touch-target-comfortable: 3rem;    /* 48px - Comfortable */
--touch-target-large: 3.5rem;       /* 56px - Large */
```

### Utility Classes

#### Section Spacing
- `.section-spacing-sm` - Small section padding
- `.section-spacing-md` - Medium section padding  
- `.section-spacing-lg` - Large section padding
- `.section-spacing-xl` - Extra large section padding

#### Container Padding
- `.container-padding` - Responsive horizontal padding

#### Touch Targets
- `.touch-target` - Minimum 44px touch target
- `.touch-target-comfortable` - 48px touch target
- `.touch-target-large` - 56px touch target

#### Navigation Offset
- `.header-offset` - Adds top padding equal to header height
- `.safe-area-top` - Handles safe area insets
- `.safe-area-bottom` - Handles bottom safe area

#### Accessibility
- `.focus-ring` - Consistent focus indicators
- `.skip-link` - Accessible skip navigation links

## Usage Examples

### Basic Page Layout
```tsx
function MyPage() {
  return (
    <PageLayout withTopPadding={true}>
      <SectionContainer spacing="lg" aria-label="Main content">
        <ContentContainer spacing="normal">
          <h1>Page Title</h1>
          <p>Page content...</p>
        </ContentContainer>
      </SectionContainer>
    </PageLayout>
  );
}
```

### Grid Layout with Accessibility
```tsx
function CardGrid() {
  return (
    <AccessibleContainer touchTargets={true} aria-label="Resource cards">
      <GridContainer 
        columns={{ default: 1, md: 2, lg: 3 }}
        gap="lg"
        aria-label="Grid of resource cards"
      >
        {items.map(item => (
          <Card key={item.id} className="touch-target">
            {item.content}
          </Card>
        ))}
      </GridContainer>
    </AccessibleContainer>
  );
}
```

### Responsive Content with Proper Spacing
```tsx
function ResponsiveSection() {
  return (
    <SectionContainer 
      spacing="xl" 
      size="lg"
      background="muted"
      aria-labelledby="section-heading"
    >
      <ContentContainer 
        spacing="relaxed" 
        centerContent={true}
      >
        <h2 id="section-heading">Section Title</h2>
        <Spacer size="md" responsive={true} />
        <p>Section content with proper spacing...</p>
      </ContentContainer>
    </SectionContainer>
  );
}
```

## Accessibility Features

- **Touch Targets**: All interactive elements meet WCAG 2.1 AA minimum size requirements (44px)
- **Focus Management**: Consistent focus indicators and keyboard navigation
- **Semantic Markup**: Proper ARIA labels and semantic HTML elements
- **Safe Areas**: Support for mobile device safe areas and notches
- **Screen Reader Support**: Proper labeling and structure for assistive technologies

## Responsive Behavior

- **Mobile First**: All components use mobile-first responsive design
- **Flexible Grids**: CSS Grid with auto-fit capabilities for truly responsive layouts
- **Adaptive Spacing**: Spacing scales appropriately across breakpoints
- **Touch Friendly**: Larger touch targets and spacing on mobile devices

## Browser Support

- Modern browsers with CSS Grid support
- Fallbacks for older browsers where appropriate
- Progressive enhancement for advanced features