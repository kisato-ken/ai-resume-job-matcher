import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      return session
    },
    async jwt({ token, user, account }: { token: any; user?: any; account?: any }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // Redirect to analyzer after successful authentication
      if (url.startsWith("/")) return `${baseUrl}${url}`
      if (new URL(url).origin === baseUrl) return url
      return `${baseUrl}/analyzer`
    },
  },
  pages: {
    signIn: '/signin',
    error: '/signin',
  },
})

export { handler as GET, handler as POST }
