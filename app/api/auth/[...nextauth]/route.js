import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"

// 1. authOptions ko alag se export karein
export const authOptions = {
  adapter: MongoDBAdapter(clientPromise), // Ye line user save karegi
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // Agar aap database use kar rahe hain toh yahan adapter add karein
}

// 2. Handler banayein
const handler = NextAuth(authOptions)

// 3. GET aur POST ko export karein
export { handler as GET, handler as POST }