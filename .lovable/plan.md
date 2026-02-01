

## Overview

This plan implements three key changes to the Fulflit website:
1. Remove the "Watch Demo" button from the Hero section
2. Add scroll-animated logistics fleet images in the Hero section
3. Create a new contact form component that sends emails to waqas@fulflit.com

---

## 1. Hero Section Changes

### 1.1 Remove Watch Demo Button
- Delete the "Watch Demo" button from lines 137-139 in `src/components/Hero.tsx`
- Keep only the "Get Started Today" button

### 1.2 Add Fleet Images with Scroll Animation
Add a horizontal row of logistics-related images below the main hero content that animate as users scroll. Images will include:
- Distribution warehouse/fleet
- Delivery vans
- Cargo ships
- Cargo planes
- Final delivery van

**Implementation approach:**
- Add 4-5 royalty-free logistics images to `src/assets/` folder
- Create a floating image gallery section within the sticky hero container
- Apply scroll-linked transforms using framer-motion:
  - Images slide in from the sides as user scrolls
  - Staggered parallax effect (each image moves at different speed)
  - Scale and opacity transitions for depth effect

**Image sources (to be downloaded):**
- Fleet of delivery vans
- Container ship
- Cargo airplane
- Delivery truck/van for last-mile

---

## 2. Contact Form Section

### 2.1 Create New Component: `src/components/ContactForm.tsx`

A two-column layout matching the reference design:

**Left Side (Primary/Gold background with rounded corners):**
- Heading: "How to ensure logistics in a new region?"
- Subtext: "Tell us more about your task, we will calculate the cost and contact you within a few hours"

**Right Side (White card with shadow):**
- Form fields:
  - Your Name (text input)
  - Your Email (email input)
  - Company Name (text input)
  - Tell us about your logistics needs (textarea)
- "Get Quote" button (primary gold color)
- Privacy policy disclaimer with link

### 2.2 Form Functionality
- Use react-hook-form for form state management
- Validate inputs with Zod schema
- On submit, Send form data to waqas@fulflit.com using google smtp if possible
- Include form data in email body

### 2.3 Add to Index Page
- Import and add `<ContactForm />` component between `<CTA />` and `<Footer />` in `src/pages/Index.tsx`

---

## Technical Details

### Files to Create:
1. `src/components/ContactForm.tsx` - New contact form component

### Files to Modify:
1. `src/components/Hero.tsx`:
   - Remove Watch Demo button
   - Add fleet images with scroll animations
2. `src/pages/Index.tsx`:
   - Add ContactForm import and component

### Assets to Add:
Download and add logistics-related images to `src/assets/`:
- `fleet-vans.jpg` - Distribution fleet
- `cargo-ship.jpg` - Container ship
- `cargo-plane.jpg` - Cargo airplane  
- `delivery-van.jpg` - Last-mile delivery van

### Dependencies Used (already installed):
- `framer-motion` - for scroll animations
- `react-hook-form` - for form handling
- `zod` - for validation
- `lucide-react` - for icons

### Form Validation Schema:
```text
name: required, max 100 chars
email: required, valid email format
company: optional, max 100 chars
message: required, max 1000 chars
```

### Email Integration:
The form will use a `mailto:` link to open the user's default email client with:
- To: waqas@fulflit.com
- Subject: "Quote Request from [Company Name]"
- Body: Formatted form data

