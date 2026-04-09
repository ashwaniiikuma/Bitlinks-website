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

  useSecureCookies: true, // 🔥 ADD THIS

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn() {
      return true
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }