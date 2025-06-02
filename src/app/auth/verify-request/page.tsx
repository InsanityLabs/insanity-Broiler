import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react'

export default function VerifyRequest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Check Your Email
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400">
              We&apos;ve sent you a sign-in link. Please check your email and click the link to continue.
            </p>
          </div>
          
          <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-green-900 dark:text-green-100 mb-1">
                  Email Sent Successfully
                </h3>
                <p className="text-sm text-green-700 dark:text-green-300">
                  The sign-in link will expire in 24 hours for security reasons.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <p><strong>Next steps:</strong></p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Check your email inbox</li>
                <li>Look for an email from {process.env.APP_NAME || 'Insanity Broiler'}</li>
                <li>Click the &quot;Sign in&quot; button in the email</li>
                <li>You&apos;ll be automatically signed in</li>
              </ol>
            </div>
            
            <div className="border-t pt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Didn&apos;t receive the email?
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Check your spam/junk folder</li>
                <li>• Make sure you entered the correct email</li>
                <li>• Wait a few minutes and try again</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 space-y-3">
            <Button variant="outline" asChild className="w-full">
              <Link href="/auth/signin">
                Try Different Email
              </Link>
            </Button>
            
            <Button variant="ghost" asChild className="w-full">
              <Link href="/" className="flex items-center justify-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}