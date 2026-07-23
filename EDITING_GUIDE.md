# Hazel White Portfolio - Circuit Workshop Theme

## Overview
This is a fully responsive portfolio website featuring a vintage electronics workshop aesthetic combined with modern computer engineering themes.

## Editable Content Guide

### 🎨 Theme Colors
Located in `/src/styles/theme.css`:
- **Primary Burgundy**: `#5B1E2D`
- **Secondary Burgundy**: `#8A2E3F`
- **Engineering Gold**: `#D4AF37`
- **Aged Parchment**: `#E9D8A6`
- **Gunmetal Gray**: `#4A4A4A`
- **Dark Workshop**: `#2D2D2D`
- **Near Black**: `#111111`
- **Steel Gray**: `#7C7C7C`

To change colors, edit the CSS custom properties in `:root`.

### 📝 Pages & Content

#### Home Page (`/src/app/pages/Home.tsx`)
- **Hero Title**: Line 96 - "Hazel White"
- **Subtitle**: Line 99 - "Computer Engineering Student"
- **University**: Line 102 - "University of Texas at Dallas"
- **Intro Text**: Line 109-111
- **Stats**: Lines 137-159

#### About Page (`/src/app/pages/About.tsx`)
- **Personal Info**: Lines 68-179
- **Interests Cards**: Lines 7-16
- **Background Details**: Lines 159-177

#### Experience Page (`/src/app/pages/Experience.tsx`)
- **Experiences Array**: Lines 7-95
- Add/edit jobs by modifying the experiences array

#### Projects Page (`/src/app/pages/Projects.tsx`)
- **Projects Array**: Lines 7-97
- Each project has: title, subtitle, period, status, description, highlights, technologies

#### Skills Page (`/src/app/pages/Skills.tsx`)
- **Skill Categories**: Lines 4-51
- Add/remove skills by editing the arrays in each category

#### Certifications Page (`/src/app/pages/Certifications.tsx`)
- **Completed Certifications**: Lines 6-21
- **In Progress**: Lines 23-40
- **Planned**: Lines 42-87

#### Resume Page (`/src/app/pages/Resume.tsx`)
- Full resume content starting at line 23
- Edit sections for Education, Experience, Skills, Projects

#### Contact Page (`/src/app/pages/Contact.tsx`)
- **Contact Information**: Lines 165-239
- **Email**: Line 186
- **Phone**: Line 203
- **Location**: Line 176

### 🎯 Navigation
Edit navigation links in `/src/app/components/Layout.tsx` at lines 8-17.

### 🖼️ Images
- Replace Unsplash images with your own by changing the `src` prop in ImageWithFallback components
- Profile photo placeholder is at `/src/app/pages/About.tsx` line 56

### 🎨 Typography
Fonts are imported in `/src/styles/fonts.css`:
- **Headings**: IBM Plex Serif, Crimson Pro
- **Body**: IBM Plex Mono, JetBrains Mono

### 📱 Responsive Design
All pages are fully responsive with mobile breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Chat Editing Examples

You can ask the AI to make changes like:

- "Update my email address to newone@example.com"
- "Add a new project about machine learning"
- "Change the primary color to blue"
- "Update my phone number"
- "Add a new skill in the Programming Languages section"
- "Change the hero subtitle to 'Embedded Systems Engineer'"

## File Structure

```
/src/app/
├── App.tsx                 # Main app component
├── routes.tsx              # Router configuration
├── components/
│   ├── Layout.tsx          # Navigation and footer
│   ├── PCBTraces.tsx       # Animated background
│   └── ui/                 # Reusable UI components
└── pages/
    ├── Home.tsx            # Landing page
    ├── About.tsx           # About section
    ├── Experience.tsx      # Work history
    ├── Projects.tsx        # Project showcase
    ├── Skills.tsx          # Technical skills
    ├── Certifications.tsx  # Certifications
    ├── Resume.tsx          # Downloadable resume
    └── Contact.tsx         # Contact form
```

## Features

✅ Multi-page navigation with React Router
✅ Animated oscilloscope display
✅ Vintage electronics theme
✅ PCB trace background patterns
✅ Blueprint-style project cards
✅ IC chip skill displays
✅ Certificate-style certification cards
✅ Printable resume
✅ Contact form
✅ Fully responsive design
✅ Professional color palette
✅ Engineering-inspired typography

## Quick Edits

### Change Personal Information
All personal information can be updated in individual page files. Search for:
- Name: "Hazel White"
- Email: "hazel.white5306@gmail.com"
- Phone: "720-350-0414"
- Location: "Plano, Texas"

### Add Social Links
Edit the Contact page to add LinkedIn, GitHub, or other social links.

### Customize Stats
Home page stats are at lines 137-159 in Home.tsx

## Technical Stack

- **Framework**: React 18
- **Routing**: React Router 7
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Fonts**: Google Fonts (IBM Plex family)
