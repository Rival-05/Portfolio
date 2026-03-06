# Sleek Portfolio Codebase Analysis

## 📋 Overview

This document provides a detailed breakdown of the sleek-portfolio project structure and explains what each file/folder does.

---

## 🏗️ Project Structure

```
sleek-portfolio/
├── 📁 public/                      # Static assets (images, icons, etc.)
│   ├── assets/                     # General assets
│   ├── blog/                       # Blog post thumbnail images
│   ├── company/                    # Company logos for experience section
│   ├── meta/                       # SEO meta images (og-image, etc.)
│   ├── project/                    # Project thumbnail images
│   ├── setup/                      # Setup section related files
│   └── skills/                     # Skill/technology icons
│
├── 📁 src/
│   ├── 📁 app/                     # Next.js App Router - Pages & Routing
│   │   ├── layout.tsx              # Root layout (wraps all pages)
│   │   ├── page.tsx                # Home page (/)
│   │   ├── blog/
│   │   │   ├── page.tsx            # Blog listing page (/blog)
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Individual blog post (/blog/post-title)
│   │   ├── projects/
│   │   │   ├── page.tsx            # Projects listing page (/projects)
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Individual project details (/projects/project-title)
│   │   ├── resume/
│   │   │   └── page.tsx            # Resume page (/resume)
│   │   ├── journey/
│   │   │   └── page.tsx            # Journey/timeline page (/journey)
│   │   ├── gears/
│   │   │   └── page.tsx            # Gears/setup page (/gears)
│   │   ├── setup/
│   │   │   └── page.tsx            # VS Code setup guide page (/setup)
│   │   └── api/                    # API routes (if any)
│   │
│   ├── 📁 components/              # Reusable React Components
│   │   ├── 📁 landing/             # Homepage section components
│   │   │   ├── Hero.tsx            # Hero section (intro, skills, social links)
│   │   │   ├── About.tsx           # About section
│   │   │   ├── Experience.tsx      # Work experience timeline
│   │   │   ├── Projects.tsx        # Featured projects preview
│   │   │   ├── Blog.tsx            # Latest blog posts preview
│   │   │   ├── Github.tsx          # GitHub contribution graph
│   │   │   ├── Setup.tsx           # Setup section with links
│   │   │   ├── Journey.tsx         # Journey timeline section
│   │   │   └── CTA.tsx             # Call-to-action section
│   │   │
│   │   ├── 📁 common/              # Shared/Utility Components
│   │   │   ├── Navbar.tsx          # Navigation bar
│   │   │   ├── Footer.tsx          # Footer
│   │   │   ├── Container.tsx       # Wrapper for max-width & padding
│   │   │   ├── ThemeSwitch.tsx     # Dark/Light mode toggle
│   │   │   ├── ChatBubble.tsx      # Contact form bubble
│   │   │   ├── Quote.tsx           # Random quote display
│   │   │   ├── OnekoCat.tsx        # Animated cat element
│   │   │   ├── Skill.tsx           # Skill badge component
│   │   │   ├── SectionHeading.tsx  # Section header component
│   │   │   └── FontSizeControls.tsx# Font size adjustment for blog
│   │   │
│   │   ├── 📁 blog/                # Blog-specific components
│   │   │   ├── BlogContent.tsx     # Blog post content renderer
│   │   │   ├── BlogList.tsx        # Blog posts grid/list
│   │   │   ├── BlogComponents.tsx  # Custom MDX components for blog
│   │   │   └── ...other blog components
│   │   │
│   │   ├── 📁 projects/            # Projects-specific components
│   │   │   ├── ProjectList.tsx     # Projects grid/list
│   │   │   ├── ProjectContent.tsx  # Project details renderer
│   │   │   ├── ProjectNavigation.tsx # Next/Previous project nav
│   │   │   ├── ProjectCard.tsx     # Single project card
│   │   │   ├── ProjectComponents.tsx # Custom MDX components for projects
│   │   │   └── ...other project components
│   │   │
│   │   ├── 📁 technologies/        # Tech stack icon components
│   │   │   ├── NextJs.tsx
│   │   │   ├── React.tsx
│   │   │   ├── TypeScript.tsx
│   │   │   ├── TailwindCss.tsx
│   │   │   ├── Appwrite.tsx
│   │   │   ├── MongoDB.tsx
│   │   │   └── ...etc (one component per technology)
│   │   │
│   │   ├── 📁 svgs/                # SVG Icon components
│   │   │   ├── CV.tsx              # CV/Resume icon
│   │   │   ├── Chat.tsx            # Chat/contact icon
│   │   │   ├── Github.tsx          # GitHub icon
│   │   │   ├── Gear.tsx            # Settings/gear icon
│   │   │   ├── Code.tsx            # Code editor icon
│   │   │   ├── Sun.tsx             # Light mode icon
│   │   │   ├── Copy.tsx            # Copy icon
│   │   │   ├── ArrowLeft.tsx       # Back arrow
│   │   │   ├── Website.tsx         # Website icon
│   │   │   ├── CheckCircle.tsx     # Check mark icon
│   │   │   └── devices/            # Device icons
│   │   │
│   │   ├── 📁 ui/                  # shadcn/ui components (pre-built)
│   │   │   ├── button.tsx          # Button component
│   │   │   ├── card.tsx            # Card component
│   │   │   ├── separator.tsx       # Divider line
│   │   │   ├── sheet.tsx           # Mobile menu (sheet/drawer)
│   │   │   ├── tooltip.tsx         # Tooltip component
│   │   │   └── ...etc (from shadcn library)
│   │   │
│   │   └── 📁 analytics/           # Analytics components
│   │       └── UmamiAnalytics.tsx  # Privacy-focused analytics integration
│   │
│   ├── 📁 config/                  # Configuration & Data Files
│   │   ├── About.tsx               # About section content
│   │   ├── Contact.tsx             # Contact form settings
│   │   ├── Experience.tsx          # Work experience data
│   │   ├── Footer.tsx              # Footer links & content
│   │   ├── Gears.tsx               # Gears/tools section data
│   │   ├── Github.tsx              # GitHub integration settings
│   │   ├── Hero.tsx                # Hero section content (intro, skills)
│   │   ├── Journey.tsx             # Journey/timeline data
│   │   ├── Meta.tsx                # SEO metadata for all pages
│   │   ├── Navbar.tsx              # Navigation links
│   │   ├── Projects.tsx            # Featured projects data
│   │   ├── Quote.ts                # Random quotes list
│   │   ├── Resume.ts               # Resume section configuration
│   │   ├── Setup.tsx               # VS Code setup steps & tools
│   │   └── cat.ts                  # Enable/disable Oneko cat animation
│   │
│   ├── 📁 data/                    # MDX Content Files
│   │   ├── 📁 blog/                # Blog posts in MDX format
│   │   │   ├── routing-in-nextjs.mdx
│   │   │   ├── how-to-be-me.mdx
│   │   │   └── ...other blog posts
│   │   └── 📁 projects/            # Project details in MDX format
│   │       ├── intent-js.mdx
│   │       ├── quest.mdx
│   │       └── ...other projects
│   │
│   ├── 📁 lib/                     # Utility Functions & Helpers
│   │   ├── blog.ts                 # Blog post fetching/parsing functions
│   │   ├── project.ts              # Project fetching/parsing functions
│   │   ├── journey.ts              # Journey content functions
│   │   ├── hero.ts                 # Hero section utilities
│   │   ├── utils.ts                # General utility functions (cn, etc.)
│   │   └── ...other helper files
│   │
│   ├── 📁 hooks/                   # Custom React Hooks
│   │   ├── useMobile.ts            # Mobile device detection
│   │   ├── useTheme.ts             # Theme management
│   │   └── ...other custom hooks
│   │
│   ├── 📁 types/                   # TypeScript Type Definitions
│   │   ├── index.ts                # Common types
│   │   ├── blog.ts                 # Blog-related types
│   │   ├── project.ts              # Project-related types
│   │   └── ...other type files
│   │
│   └── globals.css                 # Global styles & Tailwind imports
│
├── .env.example                    # Example environment variables
├── .gitigore                       # Git ignore rules
├── .prettierrc.json                # Code formatter config
├── .husky/                         # Git hooks configuration
├── components.json                 # shadcn/ui configuration
├── eslint.config.mjs               # ESLint configuration
├── knip.json                       # Unused imports checker
├── next.config.ts                  # Next.js configuration
├── package.json                    # Project dependencies & scripts
├── postcss.config.mjs              # PostCSS configuration (for Tailwind)
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # Project documentation
```

---

## 🎯 Key Folders & Their Purpose

### **1. `/public`** - Static Assets

- Stores all images, icons, and static files
- Images are served directly without processing
- Subdirectories organize assets by type:
  - `blog/` - Thumbnail images for blog posts
  - `company/` - Company logos for work experience
  - `project/` - Thumbnail images for projects
  - `meta/` - Open Graph images for SEO

### **2. `/src/app`** - Pages & Routing (Next.js App Router)

- Each folder = a URL route
- `page.tsx` file in a folder = that page's content
- `[slug]` = dynamic routes (e.g., `/blog/[slug]` matches `/blog/any-post`)
- `layout.tsx` = shared layout for all pages (Navbar, Footer, etc.)
- Example: `/blog/my-post` → `src/app/blog/[slug]/page.tsx`

### **3. `/src/components`** - Reusable Components

**Organized by feature:**

- **`/landing`** - Components for homepage sections (Hero, About, Projects, etc.)
- **`/common`** - Shared components used across pages (Navbar, Footer, etc.)
- **`/blog`** - Blog-specific components (BlogList, BlogContent)
- **`/projects`** - Projects-specific components (ProjectList, ProjectCard)
- **`/ui`** - Pre-built shadcn/ui components (Button, Card, etc.)
- **`/svgs`** - Icon/SVG components
- **`/technologies`** - Technology stack icons
- **`/analytics`** - Analytics-related components

### **4. `/src/config`** - Configuration & Content Data

- Central place to edit portfolio content
- Files export TypeScript objects with configuration
- Examples:
  - `Hero.tsx` → Home intro, skills, social links
  - `Experience.tsx` → Work experience timeline data
  - `Projects.tsx` → Featured projects data
  - `Meta.tsx` → SEO metadata for all pages
  - `Resume.ts` → Resume section configuration

### **5. `/src/data`** - MDX Content

- **MDX** = Markdown + embedded React components
- Blog posts and project details are written in MDX
- Folder structure:
  - `/blog/` - All blog post files (e.g., `routing-in-nextjs.mdx`)
  - `/projects/` - All project detail files (e.g., `intent-js.mdx`)
- Each MDX file has frontmatter (metadata) like title, date, featured status

### **6. `/src/lib`** - Utility Functions

- Helper functions for fetching and parsing content
- Examples:
  - `blog.ts` - Functions to read MDX blog files and extract data
  - `project.ts` - Functions to read MDX project files
  - `utils.ts` - General utilities (className merging, formatting, etc.)

### **7. `/src/hooks`** - Custom React Hooks

- Custom hooks for component logic
- Examples:
  - `useMobile()` - Detect if viewport is mobile
  - `useTheme()` - Manage dark/light theme

### **8. `/src/types`** - TypeScript Type Definitions

- Type definitions for consistent data structures
- Examples:
  - Blog post types
  - Project types
  - Experience types

---

## 🔄 Data Flow Example: Blog Post

1. **Write content** → Create MDX file in `/src/data/blog/post-title.mdx`
2. **Define metadata** → Add frontmatter (title, date, tags, etc.) at top of MDX
3. **Library reads file** → `lib/blog.ts` reads the MDX file
4. **Component renders** → `components/blog/BlogList.tsx` displays posts
5. **Fetch data** → `app/blog/[slug]/page.tsx` fetches post content
6. **Render MDX** → Uses custom components from `BlogComponents.tsx`
7. **Display** → User sees blog post with styling and interactive elements

---

## 🎨 Key Features & Where They're Implemented

| Feature                 | Location                                                       | Purpose                                |
| ----------------------- | -------------------------------------------------------------- | -------------------------------------- |
| **Dark/Light Mode**     | `components/common/ThemeSwitch.tsx`, `config/cat.ts`           | Toggle theme throughout portal         |
| **Navigation**          | `components/common/Navbar.tsx`, `config/Navbar.tsx`            | Top navigation bar with links          |
| **Hero Section**        | `components/landing/Hero.tsx`, `config/Hero.tsx`               | Home intro with skills & CTA           |
| **Blog System**         | `src/data/blog/`, `lib/blog.ts`, `components/blog/`            | Create & display blog posts            |
| **Projects Showcase**   | `src/data/projects/`, `lib/project.ts`, `components/projects/` | Display project case studies           |
| **Experience Timeline** | `config/Experience.tsx`, `components/landing/Experience.tsx`   | Show work history                      |
| **GitHub Graph**        | `components/landing/Github.tsx`                                | Display contribution graph             |
| **Contact Form**        | `components/common/ChatBubble.tsx`, `config/Contact.tsx`       | Contact form with Telegram integration |
| **Analytics**           | `components/analytics/UmamiAnalytics.tsx`                      | Privacy-focused tracking               |
| **Responsive Design**   | Throughout (uses Tailwind CSS)                                 | Mobile-friendly layouts                |
| **SEO Optimization**    | `config/Meta.tsx`, Next.js metadata API                        | Search engine optimization             |

---

## 🚀 Key Technologies Used

| Technology                | Purpose                                                   |
| ------------------------- | --------------------------------------------------------- |
| **Next.js 15**            | React framework with SSR, routing, API routes             |
| **TypeScript**            | Type-safe JavaScript                                      |
| **Tailwind CSS**          | Utility-first CSS framework for styling                   |
| **shadcn/ui**             | Pre-built, customizable React components                  |
| **MDX**                   | Markdown with embedded React components                   |
| **next-mdx-remote**       | Parse & render MDX content                                |
| **Framer Motion**         | Animation library (mentioned in projects)                 |
| **Umami Analytics**       | Privacy-focused analytics alternative to Google Analytics |
| **Telegram Integration**  | Send contact form submissions via Telegram bot            |
| **React Lenis**           | Smooth scrolling library                                  |
| **next-view-transitions** | Page transition animations                                |

---

## 📝 Configuration Files Purpose

| File                 | Purpose                                 |
| -------------------- | --------------------------------------- |
| `package.json`       | Project dependencies & NPM scripts      |
| `tsconfig.json`      | TypeScript compiler settings            |
| `next.config.ts`     | Next.js application settings            |
| `tailwind.config.ts` | Tailwind CSS customization              |
| `postcss.config.mjs` | PostCSS plugins (required for Tailwind) |
| `components.json`    | shadcn/ui component configuration       |
| `eslint.config.mjs`  | Code linting rules                      |
| `.prettierrc.json`   | Code formatting rules                   |
| `.env.example`       | Example environment variables           |

---

## 🌐 Environment Variables Needed

```env
TELEGRAM_BOT_TOKEN=         # For contact form integration
TELEGRAM_CHAT_ID=           # Where to send contact messages
GEMINI_API_KEY=             # AI integration (optional)
NEXT_PUBLIC_URL=            # Your portfolio URL
NEXT_PUBLIC_UMAMI_SRC=      # Analytics script URL
NEXT_PUBLIC_UMAMI_ID=       # Analytics website ID
```

---

## 💡 How to Customize

### **Easy Changes (Edit Config Files)**

1. **Personal Info** → Edit `config/Hero.tsx`, `config/About.tsx`
2. **Experience** → Edit `config/Experience.tsx`
3. **Featured Projects** → Edit `config/Projects.tsx`
4. **Skills** → Edit `config/Hero.tsx`
5. **Navigation Links** → Edit `config/Navbar.tsx`
6. **Footer** → Edit `config/Footer.tsx`

### **Content Changes (Edit/Create MDX Files)**

1. **Add Blog Post** → Create `src/data/blog/new-post.mdx`
2. **Add Project** → Create `src/data/projects/new-project.mdx`
3. **Update Journey** → Edit `src/data/journey.mdx`

### **Component Changes**

1. **Styling** → Edit files in `/src/components/`
2. **Layout Changes** → Edit `/src/app/layout.tsx`
3. **New Section** → Create new component in `components/landing/` and add to `app/page.tsx`

---

## 🎯 Summary: Quick Start

1. **Update personal info** → Edit `/src/config/` files
2. **Add blog posts** → Create `.mdx` files in `/src/data/blog/`
3. **Add projects** → Create `.mdx` files in `/src/data/projects/`
4. **Change images** → Add images to `/public/` subdirectories
5. **Customize styles** → Edit components or `globals.css`
6. **Deploy** → Push to GitHub → Deploy on Vercel

---

## 🔗 File Dependencies

```
App Structure:
  layout.tsx (root layout)
    ├── Navbar (from config/Navbar.tsx)
    ├── page.tsx (homepage)
    │   ├── Hero (from config/Hero.tsx)
    │   ├── Experience (from config/Experience.tsx)
    │   ├── Projects (from config/Projects.tsx)
    │   ├── About (from config/About.tsx)
    │   ├── Github
    │   ├── Blog (shows latest from /data/blog/)
    │   ├── Setup
    │   └── Journey (from /data/journey.mdx)
    ├── blog/page.tsx → shows all blog posts from /data/blog/
    ├── projects/page.tsx → shows all projects from /data/projects/
    ├── [other pages with their own routes]
    ├── Footer (from config/Footer.tsx)
    ├── OnekoCat (from config/cat.ts - enable/disable)
    ├── Quote (from config/Quote.ts)
    └── ChatBubble (contact form)
```
