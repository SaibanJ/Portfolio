# 💼 Saiban James Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.
This site showcases my skills, projects, and experience, and includes a contact form for clients and employers.

---

## 🚀 Tech Stack

- **Framework:** Next.js 15.2.4 (App Router)
- **Language:** TypeScript 5
- **Styling:**
  - Tailwind CSS 3.4
  - CSS Modules
  - tailwindcss-animate
- **UI Components:**
  - Radix UI (Accessible primitives)
  - shadcn/ui
  - Lucide React (icons)
- **Forms:**
  - React Hook Form
  - Zod (schema validation)
- **Animations:** Framer Motion
- **Notifications:** Sonner
- **Theming:** next-themes (light/dark toggle)
- **Email:** Nodemailer (server-side contact form)
- **Package Manager:** pnpm

---

## ✨ Features

- ⚡️ Fully responsive for mobile, tablet, and desktop
- 🌗 Dark/Light mode with system detection
- 🧱 Accessible UI via Radix primitives
- 🎞️ Framer Motion animations and transitions
- 🔐 Type-safe with full TypeScript support
- ✉️ Contact form with server-side email delivery
- 📈 SEO-optimized with meta tags and structured data

## 📚 Site Sections

- **Hero:** Personal intro
- **About:** Background & values
- **Skills:** Tech stack overview
- **Projects:** Live demos and repo links
- **Experience:** Work history
- **Contact:** Reach out via form

---

## 🧩 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── api/contact/        # Contact API endpoint
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # UI + sections
│   ├── ui/                 # shadcn & custom UI
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── skills-section.tsx
│   ├── projects-section.tsx
│   ├── experience-section.tsx
│   ├── contact-section.tsx
│   └── navigation.tsx
├── hooks/                  # Custom hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
└── styles/                 # Global styles
```

---

## ⚙️ Getting Started

```bash
# 1. Clone repo
git clone https://github.com/your-username/your-portfolio.git

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
touch .env.local
```

**.env.local example:**

```
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
EMAIL_TO=recipient@example.com
```

```bash
# 4. Start development server
pnpm dev

# 5. Open in browser
http://localhost:3000
```

---

## 🏗️ Build for Production

```bash
pnpm build
pnpm start
```

---

## 🛠️ Customization

- ✍️ Update content inside section components
- 🎨 Modify colors and fonts in tailwind.config.ts
- 🧱 Add projects in projects-section.tsx
- 📬 Customize form behavior in contact-section.tsx

---

## 📜 License

This project is MIT Licensed.

---

## 🌐 Live Demo

🔗 https://saibanjamesr.dev
