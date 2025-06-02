'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, Shield, Rocket, ArrowRight, Github, Twitter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with Next.js 15 and optimized for performance with Turbopack."
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security with NextAuth.js and encrypted data."
  },
  {
    icon: Rocket,
    title: "Ready to Scale",
    description: "Production-ready architecture that grows with your business."
  }
]

const freeFeatures = [
  "Complete Next.js 15 boilerplate",
  "Authentication with NextAuth.js",
  "Stripe payment integration",
  "Email functionality",
  "Modern UI components",
  "TypeScript support",
  "Tailwind CSS styling",
  "Production ready"
]



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Insanity Broiler
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">
                What&apos;s Included
              </Link>
              <Button variant="outline" asChild>
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/signin">Get Started Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-6">
              🎉 100% Free & Open Source
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Free Next.js
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SaaS Boilerplate
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              A complete, production-ready Next.js 15 boilerplate with authentication, payments, and modern UI. 
              Everything you need to start building - completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/auth/signin">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="https://github.com" target="_blank">
                  <Github className="mr-2 w-5 h-5" />
                  View Source Code
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Ship Fast
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Pre-built components, authentication, payments, and more. Focus on your business logic, not boilerplate.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything Included, Always Free
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              No hidden costs, no premium tiers. Get the complete boilerplate with all features included.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-green-500 shadow-lg">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-green-500">
                  100% Free Forever
                </Badge>
                <CardTitle className="text-3xl">Complete Boilerplate</CardTitle>
                <div className="text-5xl font-bold text-green-600">
                  $0
                  <span className="text-lg font-normal text-slate-600 dark:text-slate-400">/forever</span>
                </div>
                <CardDescription className="text-lg">
                  Everything you need to build and deploy your SaaS
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {freeFeatures.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="w-full text-lg py-6" asChild>
                  <Link href="/auth/signin">
                    Start Building Now - It&apos;s Free!
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Building Today
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Download the complete boilerplate and start building your SaaS - no payment required, no strings attached.
            </p>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="/auth/signin">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Insanity Broiler
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                A free, complete Next.js boilerplate for building SaaS applications. No cost, no limits.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://twitter.com" target="_blank">
                    <Twitter className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li><Link href="#features" className="hover:text-slate-900 dark:hover:text-slate-100">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-slate-900 dark:hover:text-slate-100">What&apos;s Included</Link></li>
                <li><Link href="/docs" className="hover:text-slate-900 dark:hover:text-slate-100">Documentation</Link></li>
                <li><Link href="/changelog" className="hover:text-slate-900 dark:hover:text-slate-100">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li><Link href="/help" className="hover:text-slate-900 dark:hover:text-slate-100">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-slate-900 dark:hover:text-slate-100">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-slate-900 dark:hover:text-slate-100">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-slate-900 dark:hover:text-slate-100">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-slate-600 dark:text-slate-400">
            <p>&copy; 2024 Insanity Broiler. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
