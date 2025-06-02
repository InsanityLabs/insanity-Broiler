# 🚀 Insanity Broiler - Next.js SaaS Boilerplate

The ultimate Next.js boilerplate for building SaaS applications faster than ever. Built with Next.js 15, React 19, TypeScript, and all the modern tools you need to ship your product quickly.

## ✨ Features

### 🎨 UI/UX
- **shadcn/ui** - Beautiful, accessible components built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icons
- **Dark/Light Mode** - Built-in theme switching
- **Responsive Design** - Mobile-first approach

### 🔐 Authentication
- **NextAuth.js v5** - Complete authentication solution
- **Magic Link Login** - Passwordless authentication via email
- **Session Management** - Secure JWT sessions
- **Protected Routes** - Middleware-based route protection
- **User Dashboard** - Complete user management interface

### 💳 Payments
- **Stripe Integration** - Complete payment processing
- **Subscription Management** - Recurring billing support
- **Webhook Handling** - Real-time payment event processing
- **Multiple Plans** - Free, Pro, and Enterprise tiers
- **Usage Tracking** - Monitor plan limits and usage

### 📧 Email System
- **Resend Integration** - Modern email delivery
- **Magic Link Emails** - Beautiful HTML email templates
- **SMTP Support** - Alternative email providers
- **Email Verification** - Secure account activation

### 🏗️ Architecture
- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Server Components** - Optimized performance
- **API Routes** - Built-in backend functionality
- **Middleware** - Request/response processing

### 🛠️ Developer Experience
- **ESLint & Prettier** - Code formatting and linting
- **Husky** - Git hooks for quality control
- **TypeScript** - Full type safety
- **Hot Reload** - Instant development feedback
- **Component Library** - Reusable UI components

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- A Resend account (for emails)
- A Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd insanity-broiler
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Copy the `.env.local` file and fill in your values:
   ```bash
   cp .env.local .env.local
   ```

   Required environment variables:
   ```env
   # Database (choose one)
   DATABASE_URL="your-database-url"
   
   # NextAuth.js
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   
   # Email Service (Resend recommended)
   RESEND_API_KEY="your-resend-api-key"
   EMAIL_FROM="noreply@yourdomain.com"
   
   # Stripe
   STRIPE_SECRET_KEY="sk_test_..."
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
   STRIPE_WEBHOOK_SECRET="whsec_..."
   
   # App Configuration
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # NextAuth.js endpoints
│   │   └── stripe/        # Stripe webhooks & checkout
│   ├── auth/              # Authentication pages
│   │   ├── signin/        # Sign in page
│   │   └── signup/        # Sign up page
│   ├── dashboard/         # Protected dashboard
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── auth.ts            # NextAuth configuration
│   ├── stripe.ts          # Stripe configuration
│   └── utils.ts           # Utility functions
└── middleware.ts          # Route protection
```

## 🔧 Configuration

### Email Setup (Resend)

1. Sign up at [Resend](https://resend.com)
2. Create an API key
3. Add your domain and verify it
4. Update your `.env.local` with the API key

### Stripe Setup

1. Create a [Stripe](https://stripe.com) account
2. Get your API keys from the dashboard
3. Set up your products and pricing
4. Configure webhooks for your domain
5. Update the pricing plans in `src/lib/stripe.ts`

### Database Setup

**Important**: Email authentication requires a database to store verification tokens.

1. **Choose your database provider** and update `prisma/schema.prisma`:
   - **PostgreSQL** (recommended for production)
   - **MySQL** 
   - **SQLite** (for development)

2. **Configure your database URL** in `.env.local`:
   ```bash
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   ```

3. **Install Prisma CLI** (if not already installed):
   ```bash
   npm install -g prisma
   ```

4. **Generate Prisma client and run migrations**:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Uncomment the database adapter** in `src/lib/auth.ts`:
   ```typescript
   import { PrismaAdapter } from "@auth/prisma-adapter"
   import { prisma } from "./prisma"
   
   const authConfig: NextAuthConfig = {
     adapter: PrismaAdapter(prisma), // Uncomment this line
     // ... rest of config
   }
   ```

## 🎨 Customization

### Styling

- **Colors**: Update `tailwind.config.js` for your brand colors
- **Components**: Modify components in `src/components/ui/`
- **Layout**: Customize `src/app/layout.tsx`

### Branding

1. Replace "Insanity Broiler" with your app name
2. Update the logo and favicon
3. Modify the landing page content
4. Update email templates in `src/lib/auth.ts`

### Pricing Plans

Update the pricing plans in `src/lib/stripe.ts`:

```typescript
export const PRICING_PLANS = {
  free: {
    name: 'Free',
    price: 0,
    priceId: '', // Leave empty for free plan
    features: ['Feature 1', 'Feature 2'],
    // ...
  },
  // Add your plans
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This boilerplate works on any platform that supports Next.js:

- **Netlify**
- **Railway**
- **DigitalOcean App Platform**
- **AWS Amplify**
- **Self-hosted**

## 📚 Documentation

### Key Files

- `src/lib/auth.ts` - NextAuth configuration
- `src/lib/stripe.ts` - Stripe setup and pricing
- `src/middleware.ts` - Route protection
- `src/app/api/` - API endpoints

### Adding New Features

1. **New Pages**: Add to `src/app/`
2. **New Components**: Add to `src/components/`
3. **New API Routes**: Add to `src/app/api/`
4. **Database Models**: Update your ORM schema

## 🔒 Security

- **Environment Variables**: Never commit secrets to git
- **HTTPS**: Always use HTTPS in production
- **Webhook Signatures**: Verify Stripe webhook signatures
- **Rate Limiting**: Implement rate limiting for API routes
- **Input Validation**: Validate all user inputs

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e
```

## 📈 Analytics & Monitoring

Consider adding:

- **Vercel Analytics** - Web vitals and performance
- **PostHog** - Product analytics
- **Sentry** - Error monitoring
- **LogRocket** - Session replay

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

- **Documentation**: Check this README and inline comments
- **Issues**: Open a GitHub issue
- **Discussions**: Use GitHub Discussions for questions

## 🎯 Roadmap

- [x] Database integration (Prisma with NextAuth)
- [ ] Admin dashboard
- [ ] Multi-tenancy support
- [ ] Advanced analytics
- [ ] Mobile app (React Native)
- [ ] API documentation
- [ ] Internationalization (i18n)
- [ ] Advanced SEO features

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful components
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Stripe](https://stripe.com/) - Payment processing
- [Resend](https://resend.com/) - Email delivery
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations

---

**Built with ❤️ for developers who want to ship fast**

Happy coding! 🚀
