# Rocket XP Frontend

A modern Next.js application built with TypeScript, Tailwind CSS, Auth.js, and shadcn/ui components.

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Authentication**: Auth.js (NextAuth.js)
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Development**: ESLint, Turbopack

## 📦 Project Structure

```
rocket-xp-frontend/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
├── components.json          # shadcn/ui configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd rocket-xp-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Auth.js Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   
   # Add your OAuth provider credentials here
   # Example for Google:
   # GOOGLE_CLIENT_ID=your-google-client-id
   # GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Authentication Setup

This project uses Auth.js for authentication. Here's how to set it up:

### 1. Create Auth Configuration

Create `src/lib/auth.ts`:
```typescript
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
})
```

### 2. Set up API Route

Create `src/app/api/auth/[...nextauth]/route.ts`:
```typescript
import { handlers } from "@/lib/auth"

export const { GET, POST } = handlers
```

### 3. Add Session Provider

Update your root layout to include the session provider:
```typescript
import { SessionProvider } from "next-auth/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}
```

## 🎨 Using shadcn/ui Components

### Adding Components

To add a new shadcn/ui component:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

### Using Components

```typescript
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Features

- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS v4**: Latest version with improved performance
- **Auth.js**: Secure authentication with multiple providers
- **shadcn/ui**: Beautiful, accessible UI components
- **App Router**: Next.js 13+ App Router for better performance
- **Turbopack**: Fast development builds
- **ESLint**: Code quality and consistency

## 🔧 Configuration Files

### Tailwind CSS
The project uses Tailwind CSS v4 with the new PostCSS plugin. Configuration is handled automatically.

### TypeScript
TypeScript is configured with strict mode and path aliases (`@/*` points to `src/`).

### shadcn/ui
Components are configured in `components.json` with:
- TypeScript support
- Tailwind CSS integration
- CSS variables for theming
- Lucide React icons

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Auth.js Documentation](https://authjs.dev)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
