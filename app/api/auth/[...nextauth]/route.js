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

  session: {
    strategy: "jwt",
  },

 callbacks:{
  async session({session, token}) {
    return session
  },
  async jwt({token, account, profile}){
    return token
  }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }