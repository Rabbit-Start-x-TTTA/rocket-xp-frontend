# Technical Documentation - Rocket XP Frontend

## Project Overview

**Rocket XP Frontend** is a modern web application built with Next.js 15, featuring a comprehensive tech stack designed for scalability, type safety, and developer experience.

## Architecture

### Framework & Runtime
- **Next.js 15.3.4**: React framework with App Router
- **React 19.0.0**: Latest React with concurrent features
- **TypeScript 5**: Static type checking and enhanced developer experience
- **Turbopack**: Fast development bundler (enabled via `--turbopack` flag)

### Styling & UI
- **Tailwind CSS v4**: Utility-first CSS framework with PostCSS integration
- **shadcn/ui**: Component library built on Radix UI primitives
- **Lucide React**: Icon library for consistent iconography
- **CSS Variables**: Theming system with CSS custom properties

### Authentication & Security
- **Auth.js (NextAuth.js) v4.24.11**: Authentication framework
- **OAuth Providers**: Google, GitHub, Discord (configurable)
- **JWT Tokens**: Stateless authentication with secure token handling
- **Session Management**: Server-side and client-side session handling

### Development Tools
- **ESLint 9**: Code linting and quality enforcement
- **TypeScript**: Strict type checking with path aliases
- **PostCSS**: CSS processing pipeline
- **Git**: Version control with comprehensive `.gitignore`

## Project Structure

```
rocket-xp-frontend/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── api/                      # API routes
│   │   │   └── auth/
│   │   │       └── [...nextauth]/    # Auth.js API handler
│   │   │           └── route.ts
│   │   ├── globals.css               # Global styles and Tailwind imports
│   │   ├── layout.tsx                # Root layout component
│   │   └── page.tsx                  # Home page component
│   ├── components/                   # Reusable UI components (shadcn/ui)
│   │   └── ui/                       # shadcn/ui component library
│   └── lib/                          # Utility functions and configurations
│       ├── auth.ts                   # Auth.js configuration
│       └── utils.ts                  # Utility functions (clsx, cva)
├── public/                           # Static assets
├── components.json                   # shadcn/ui configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
├── next.config.ts                   # Next.js configuration
├── postcss.config.mjs              # PostCSS configuration
├── eslint.config.mjs               # ESLint configuration
└── package.json                     # Dependencies and scripts
```

## Key Dependencies

### Core Dependencies
```json
{
  "next": "15.3.4",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "next-auth": "^4.24.11"
}
```

### UI & Styling Dependencies
```json
{
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.518.0",
  "tailwind-merge": "^3.3.1"
}
```

### Development Dependencies
```json
{
  "typescript": "^5",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "tailwindcss": "^4",
  "@tailwindcss/postcss": "^4",
  "eslint": "^9",
  "eslint-config-next": "15.3.4"
}
```

## Configuration Files

### TypeScript Configuration (`tsconfig.json`)
- **Target**: ES2017
- **Module**: ESNext
- **Module Resolution**: Bundler
- **Path Aliases**: `@/*` → `src/*`
- **Strict Mode**: Enabled
- **JSX**: React JSX

### Tailwind CSS Configuration (`tailwind.config.ts`)
- **Content Sources**: `src/**/*.{js,ts,jsx,tsx}`
- **Theme**: Extended with CSS variables
- **Plugins**: shadcn/ui integration
- **Dark Mode**: Class-based

### shadcn/ui Configuration (`components.json`)
- **Style**: Default (CSS variables)
- **Base Color**: Slate
- **CSS Variables**: Enabled
- **Tailwind CSS**: v4 integration
- **React Server Components**: Enabled
- **TypeScript**: Strict mode

### Next.js Configuration (`next.config.ts`)
- **TypeScript**: Strict mode
- **ESLint**: Enabled
- **App Router**: Enabled
- **Turbopack**: Development mode

## Authentication Architecture

### Auth.js Configuration (`src/lib/auth.ts`)
```typescript
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  callbacks: {
    async session({ session, token }) {
      return session
    },
    async jwt({ token, user }) {
      return token
    },
  },
})
```

### API Route Handler (`src/app/api/auth/[...nextauth]/route.ts`)
```typescript
import { handlers } from "@/lib/auth"
export const { GET, POST } = handlers
```

## Styling Architecture

### Tailwind CSS v4 Integration
- **PostCSS Plugin**: `@tailwindcss/postcss`
- **CSS Variables**: Theming system
- **Utility Classes**: Comprehensive utility library
- **Responsive Design**: Mobile-first approach

### shadcn/ui Component System
- **Radix UI Primitives**: Accessible component foundations
- **CSS Variables**: Dynamic theming
- **Class Variance Authority**: Component variants
- **Tailwind Merge**: Class conflict resolution

## Development Workflow

### Available Scripts
```json
{
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

### Development Server
- **Port**: 3000 (default)
- **Turbopack**: Fast refresh and bundling
- **TypeScript**: Real-time type checking
- **ESLint**: Code quality enforcement

## Environment Variables

### Required Variables
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

### OAuth Provider Variables
```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
DISCORD_CLIENT_ID=your-discord-client-id
DISCORD_CLIENT_SECRET=your-discord-client-secret
```

## Component Patterns

### shadcn/ui Component Usage
```typescript
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Component Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Action</Button>
      </CardContent>
    </Card>
  )
}
```

### Authentication Hooks
```typescript
import { useSession, signIn, signOut } from "next-auth/react"

export function AuthComponent() {
  const { data: session, status } = useSession()
  
  if (status === "loading") return <div>Loading...</div>
  if (status === "authenticated") {
    return (
      <div>
        Signed in as {session.user?.email}
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return <button onClick={() => signIn()}>Sign in</button>
}
```

## Performance Optimizations

### Next.js Optimizations
- **App Router**: Server components by default
- **Turbopack**: Fast development builds
- **Image Optimization**: Automatic image optimization
- **Font Optimization**: System font stack

### Tailwind CSS Optimizations
- **PurgeCSS**: Unused CSS removal
- **JIT Mode**: Just-in-time compilation
- **CSS Variables**: Runtime theme switching

## Security Considerations

### Authentication Security
- **JWT Tokens**: Secure token handling
- **OAuth 2.0**: Industry-standard authentication
- **CSRF Protection**: Built-in CSRF protection
- **Session Management**: Secure session handling

### Environment Security
- **Secret Management**: Environment variable secrets
- **HTTPS**: Production HTTPS enforcement
- **CORS**: Configurable CORS policies

## Deployment Architecture

### Vercel (Recommended)
- **Zero Configuration**: Automatic deployment
- **Edge Functions**: Global edge deployment
- **Environment Variables**: Secure variable management
- **Preview Deployments**: Automatic preview URLs

### Other Platforms
- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment
- **DigitalOcean**: App Platform deployment
- **AWS Amplify**: AWS integration

## Testing Strategy

### Type Safety
- **TypeScript**: Compile-time type checking
- **Strict Mode**: Enhanced type safety
- **Path Aliases**: Type-safe imports

### Code Quality
- **ESLint**: Code style enforcement
- **Prettier**: Code formatting (recommended)
- **Husky**: Git hooks (recommended)

## Monitoring & Analytics

### Performance Monitoring
- **Next.js Analytics**: Built-in performance monitoring
- **Core Web Vitals**: Automatic measurement
- **Error Tracking**: Error boundary implementation

### User Analytics
- **Google Analytics**: User behavior tracking
- **Auth.js Analytics**: Authentication metrics
- **Custom Events**: Application-specific tracking

## Scalability Considerations

### Architecture Scalability
- **Micro-frontends**: Component-based architecture
- **API Routes**: Serverless function scaling
- **CDN Integration**: Global content delivery
- **Database Scaling**: Stateless authentication

### Performance Scalability
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Component lazy loading
- **Caching**: Static and dynamic caching
- **Optimization**: Bundle size optimization

## Future Enhancements

### Planned Features
- **Database Integration**: Prisma ORM integration
- **Real-time Features**: WebSocket integration
- **PWA Support**: Progressive web app features
- **Internationalization**: Multi-language support

### Technology Upgrades
- **React 19**: Concurrent features
- **Next.js 16**: Latest framework features
- **Tailwind CSS v4**: Latest styling features
- **Auth.js v5**: Latest authentication features

## Troubleshooting Guide

### Common Issues
1. **TypeScript Errors**: Check strict mode configuration
2. **Authentication Issues**: Verify environment variables
3. **Styling Issues**: Check Tailwind CSS configuration
4. **Build Errors**: Verify dependency versions

### Debug Tools
- **Next.js Debug**: `DEBUG=* npm run dev`
- **TypeScript Debug**: `tsc --noEmit`
- **ESLint Debug**: `eslint --debug`
- **Tailwind Debug**: `tailwindcss --help`

## Contributing Guidelines

### Code Standards
- **TypeScript**: Strict mode compliance
- **ESLint**: Code style enforcement
- **Prettier**: Code formatting
- **Git Hooks**: Pre-commit validation

### Development Process
1. **Feature Branch**: Create feature branch
2. **Type Safety**: Ensure TypeScript compliance
3. **Testing**: Add appropriate tests
4. **Documentation**: Update relevant docs
5. **Pull Request**: Submit for review

This technical documentation provides comprehensive information about the project architecture, technologies, and implementation patterns for AI system prompts and development reference. 