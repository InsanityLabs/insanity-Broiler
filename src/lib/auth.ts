import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { Resend } from "resend"
import type { NextAuthConfig } from 'next-auth'
// Uncomment the following line and configure your database for email authentication
// import { PrismaAdapter } from "@auth/prisma-adapter"
// import { prisma } from "./prisma"

const resend = new Resend(process.env.RESEND_API_KEY)

const authConfig: NextAuthConfig = {
  // NOTE: Email authentication requires a database adapter to store verification tokens
  // Uncomment the following line and configure your database:
  // adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT ? parseInt(process.env.EMAIL_SERVER_PORT) : undefined,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      async sendVerificationRequest({ identifier: email, url }) {
        try {
          await resend.emails.send({
            from: process.env.EMAIL_FROM || 'noreply@yourdomain.com',
            to: email,
            subject: `Sign in to ${process.env.APP_NAME || 'Insanity Broiler'}`,
            html: `
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="utf-8">
                  <title>Sign in to ${process.env.APP_NAME || 'Insanity Broiler'}</title>
                </head>
                <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f9fafb;">
                  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
                    <div style="background: white; border-radius: 8px; padding: 40px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                      <h1 style="color: #1f2937; font-size: 24px; font-weight: 600; margin: 0 0 24px 0; text-align: center;">
                        Sign in to ${process.env.APP_NAME || 'Insanity Broiler'}
                      </h1>
                      <p style="color: #4b5563; font-size: 16px; line-height: 24px; margin: 0 0 32px 0;">
                        Click the button below to sign in to your account. This link will expire in 24 hours.
                      </p>
                      <div style="text-align: center; margin: 32px 0;">
                        <a href="${url}" style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; display: inline-block;">
                          Sign in
                        </a>
                      </div>
                      <p style="color: #9ca3af; font-size: 14px; line-height: 20px; margin: 24px 0 0 0;">
                        If you didn&apos;t request this email, you can safely ignore it.
                      </p>
                    </div>
                  </div>
                </body>
              </html>
            `,
          })
        } catch (error) {
          console.error('Failed to send verification email:', error)
          throw new Error('Failed to send verification email')
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    verifyRequest: '/auth/verify-request',
    error: '/auth/error',
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id
      }
      return token
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
export const authOptions = authConfig