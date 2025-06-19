# Setup Guide

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Auth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Google OAuth Provider
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Database (if using database adapter)
# DATABASE_URL=your-database-url

# Other OAuth Providers (uncomment and configure as needed)
# GITHUB_ID=your-github-client-id
# GITHUB_SECRET=your-github-client-secret

# DISCORD_CLIENT_ID=your-discord-client-id
# DISCORD_CLIENT_SECRET=your-discord-client-secret
```

## Getting OAuth Credentials

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set application type to "Web application"
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - `https://yourdomain.com/api/auth/callback/google` (for production)
7. Copy the Client ID and Client Secret to your `.env.local` file

### GitHub OAuth Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the application details:
   - Application name: Your app name
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
4. Copy the Client ID and Client Secret to your `.env.local` file

## Adding More Auth Providers

To add additional authentication providers, update `src/lib/auth.ts`:

```typescript
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import DiscordProvider from "next-auth/providers/discord"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  // ... rest of configuration
})
```

## Adding shadcn/ui Components

To add new components, use the shadcn/ui CLI:

```bash
# Add common components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add form
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add avatar
npx shadcn@latest add badge
npx shadcn@latest add toast
npx shadcn@latest add table
npx shadcn@latest add tabs
npx shadcn@latest add select
npx shadcn@latest add textarea
npx shadcn@latest add checkbox
npx shadcn@latest add radio-group
npx shadcn@latest add switch
npx shadcn@latest add slider
npx shadcn@latest add progress
npx shadcn@latest add alert
npx shadcn@latest add sheet
npx shadcn@latest add popover
npx shadcn@latest add tooltip
npx shadcn@latest add separator
npx shadcn@latest add skeleton
npx shadcn@latest add calendar
npx shadcn@latest add date-picker
npx shadcn@latest add command
npx shadcn@latest add context-menu
npx shadcn@latest add hover-card
npx shadcn@latest add menubar
npx shadcn@latest add navigation-menu
npx shadcn@latest add pagination
npx shadcn@latest add resizable
npx shadcn@latest add scroll-area
npx shadcn@latest add sonner
npx shadcn@latest add toggle
npx shadcn@latest add toggle-group
```

## Database Setup (Optional)

If you want to persist user sessions and data, you can add a database adapter:

### Prisma (Recommended)

1. Install Prisma:
```bash
npm install prisma @prisma/client
npm install @auth/prisma-adapter
```

2. Initialize Prisma:
```bash
npx prisma init
```

3. Add the adapter to `src/lib/auth.ts`:
```typescript
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  // ... rest of configuration
})
```

4. Create `src/lib/prisma.ts`:
```typescript
import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
```

## Next Steps

1. Start the development server: `npm run dev`
2. Visit `http://localhost:3000`
3. Test authentication by clicking sign in
4. Start building your application!

## Troubleshooting

### Common Issues

1. **"Invalid redirect URI" error**: Make sure your OAuth provider redirect URI matches exactly
2. **"NEXTAUTH_SECRET not set"**: Generate a secure secret: `openssl rand -base64 32`
3. **TypeScript errors**: Make sure all dependencies are installed and types are available
4. **Tailwind styles not working**: Check that `globals.css` is imported in your root layout

### Getting Help

- Check the [Auth.js documentation](https://authjs.dev)
- Visit the [shadcn/ui documentation](https://ui.shadcn.com)
- Review the [Next.js documentation](https://nextjs.org/docs) 