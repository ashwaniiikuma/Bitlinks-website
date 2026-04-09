import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  trustHost: true,

  session: {
    strategy: "jwt",
  },

  debug: true, // 🔥 IMPORTANT

  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("SIGNIN:", user, account, profile)
      return true
    },

    async redirect({ url, baseUrl }) {
      return baseUrl // 🔥 force safe redirect
    },

    async session({ session, token }) {
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }