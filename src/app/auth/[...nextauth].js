import NextAuth from "next-auth"
import {db} from "../../../prisma/_db"

const handler = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    secret: "Ju8QJyaBoW5brNTi/lW0LF0dzTwAHGZRJAd1fRxp5RY="
})
// From the Nextauth configuration/options docs:
//If you rely on the default secret generation in development, you might notice JWT decryption errors, 
//since the secret changes whenever you change your configuration. 
//Defining an explicit secret will make this problem go away. 

// openssl rand -base64 32 for secret generation 

export { handler as GET, handler as POST }