import User from "@/models/User";
import { connectToDB } from "@/utils/dbConnect";
import GoogleProvider from "next-auth/providers/google";

export const authOption = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, //1 day
  },
  jwt: {},
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await connectToDB();

        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
          });
        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
    async session({ session, token, user }) {
      try {
        await connectToDB();

        const dbUser = await User.findOne({ email: session.user.email });
        session.user.id = dbUser._id;

        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session;
      }
    },
  },

  debug: true, // تمكين وضع التصحيح للحصول على مزيد من المعلومات في السجلات
  secret: process.env.NEXTAUTH_SECRET,
};
