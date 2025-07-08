# Portfolio Project

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, experience, and provides a contact form for potential clients or employers to reach out.

## Tech Stack

- **Framework:** Next.js 15.2.4 with App Router
- **Language:** TypeScript 5
- **Styling:** 
  - Tailwind CSS 3.4
  - CSS Modules
  - tailwindcss-animate for animations
- **UI Components:** 
  - Radix UI (Accessible component primitives)
  - shadcn/ui component system
  - Lucide React for icons
- **Form Handling:**
  - React Hook Form
  - Zod for validation
- **Animations:** Framer Motion
- **Email:** Nodemailer for contact form submissions
- **Notifications:** Sonner for toast notifications
- **Theming:** next-themes for dark/light mode
- **Package Manager:** pnpm

## Features

- **Responsive Design:** Fully responsive layout that works on all device sizes
- **Dark/Light Mode:** Theme toggle with system preference detection
- **Modern UI Components:** Using Radix UI primitives for accessible, customizable components
- **Smooth Animations:** Page transitions and UI animations using Framer Motion
- **Type-Safe Development:** Full TypeScript support throughout the codebase
- **Contact Form:** Server-side form processing with email notifications
- **Sections:**
  - Hero section with introduction
  - About section with personal information
  - Skills section showcasing technical abilities
  - Projects section displaying portfolio work
  - Experience section showing work history
  - Contact section with form and contact information
- **SEO Optimized:** Meta tags and structured data for better search engine visibility

## Project Structure

```
portfolio/
├── app/                  # Next.js App Router
│   ├── api/              # API routes
│   │   └── contact/      # Contact form API endpoint
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/               # UI components
│   ├── hero-section.tsx  # Hero section
│   ├── about-section.tsx # About section
│   ├── skills-section.tsx # Skills section
│   ├── projects-section.tsx # Projects section
│   ├── experience-section.tsx # Experience section
│   ├── contact-section.tsx # Contact section
│   └── navigation.tsx    # Navigation component
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Global styles
```

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```
3. Create a `.env.local` file with the following variables:
```
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
EMAIL_TO=recipient-email@example.com
```
4. Run the development server:
```bash
pnpm dev
```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

To build the application for production:

```bash
pnpm build
```

To start the production server:

```bash
pnpm start
```

## Customization

The portfolio is designed to be easily customizable:

- Update content in the respective section components
- Modify the theme in `tailwind.config.ts`
- Add new projects in the `projects-section.tsx` component
- Customize the contact form in `contact-section.tsx`

## License

This project is open source and available under the [MIT License](LICENSE).
