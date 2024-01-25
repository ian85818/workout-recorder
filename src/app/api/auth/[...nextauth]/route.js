import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXT_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_OAUTH_ID,
            clientSecret: process.env.GOOGLE_OAUTH_SECRET
        })
    ]
})

export { handler as GET, handler as POST }