import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="border-b border-zinc-800 bg-black/50 backdrop-blur-xl fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                YourBrand
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link href="#products" className="text-sm text-zinc-400 hover:text-white transition-colors">Products</Link>
                <Link href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</Link>
                <Link href="#docs" className="text-sm text-zinc-400 hover:text-white transition-colors">Docs</Link>
                <Link href="#company" className="text-sm text-zinc-400 hover:text-white transition-colors">Company</Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#login" className="text-sm text-zinc-400 hover:text-white transition-colors">Log in</Link>
              <Link href="#signup" className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-zinc-300">New: Deploy in seconds with our CLI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build, deploy, and scale
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                your apps instantly
              </span>
            </h1>
            
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              The modern cloud platform for developers. Deploy from Git, scale automatically, and focus on building great products.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#signup" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-base font-semibold transition-colors w-full sm:w-auto">
                Start Building for Free
              </Link>
              <Link href="#demo" className="px-8 py-4 border border-zinc-700 hover:border-zinc-600 rounded-lg text-base font-semibold transition-colors w-full sm:w-auto">
                View Demo
              </Link>
            </div>

            <p className="text-sm text-zinc-500 mt-6">No credit card required • Free tier available</p>
          </div>

          {/* Hero Image/Dashboard Preview */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
            <div className="relative rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-green-400">$ git push render main</div>
                <div className="text-zinc-500 mt-2">Building...</div>
                <div className="text-zinc-500">Deploying...</div>
                <div className="text-blue-400 mt-2">✓ Deploy successful!</div>
                <div className="text-zinc-400 mt-1">https://your-app.onrender.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything you need to ship fast</h2>
            <p className="text-xl text-zinc-400">Built for modern development workflows</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-zinc-400">Deploy in seconds with our global CDN and edge network. Your apps load instantly anywhere.</p>
            </div>

            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-purple-600/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Managed Databases</h3>
              <p className="text-zinc-400">PostgreSQL, Redis, and more. Fully managed with automatic backups and scaling.</p>
            </div>

            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-green-600/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Auto SSL & Security</h3>
              <p className="text-zinc-400">Free SSL certificates, DDoS protection, and automatic security updates included.</p>
            </div>

            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-pink-600/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Git Integration</h3>
              <p className="text-zinc-400">Connect your GitHub or GitLab repo. Every push triggers an automatic deployment.</p>
            </div>

            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-orange-600/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Auto Scaling</h3>
              <p className="text-zinc-400">Scale automatically based on traffic. From zero to millions of requests seamlessly.</p>
            </div>

            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-cyan-600/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-zinc-400">Monitor your apps with detailed metrics, logs, and performance insights in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                99.99%
              </div>
              <div className="text-zinc-400">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                2M+
              </div>
              <div className="text-zinc-400">Apps Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent mb-2">
                50ms
              </div>
              <div className="text-zinc-400">Average Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-2">
                150+
              </div>
              <div className="text-zinc-400">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-xl text-zinc-400">Start free, scale as you grow</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/30">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="text-4xl font-bold mb-6">
                $0<span className="text-xl text-zinc-400 font-normal">/month</span>
              </div>
              <p className="text-zinc-400 mb-6">Perfect for side projects and learning</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-zinc-300">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  100 GB bandwidth
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  512 MB RAM
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free SSL
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Community support
                </li>
              </ul>
              <Link href="#signup" className="block w-full text-center px-6 py-3 border border-zinc-700 hover:border-zinc-600 rounded-lg font-semibold transition-colors">
                Get Started
              </Link>
            </div>

            <div className="p-8 rounded-xl border-2 border-blue-600 bg-zinc-900/50 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-6">
                $29<span className="text-xl text-zinc-400 font-normal">/month</span>
              </div>
              <p className="text-zinc-400 mb-6">For professional developers and teams</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-zinc-300">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  1 TB bandwidth
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  4 GB RAM
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Auto scaling
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
              </ul>
              <Link href="#signup" className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Get Started
              </Link>
            </div>

            <div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/30">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-4xl font-bold mb-6">Custom</div>
              <p className="text-zinc-400 mb-6">For large-scale applications</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-zinc-300">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited bandwidth
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom resources
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated support
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  SLA guarantee
                </li>
              </ul>
              <Link href="#contact" className="block w-full text-center px-6 py-3 border border-zinc-700 hover:border-zinc-600 rounded-lg font-semibold transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build something amazing?
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Join thousands of developers shipping faster with our platform
          </p>
          <Link href="#signup" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors">
            Start Building for Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Features</Link></li>
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Pricing</Link></li>
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Security</Link></li>
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">About</Link></li>
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Blog</Link></li>
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Careers</Link></li>
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Documentation</Link></li>
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">API Reference</Link></li>
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Guides</Link></li>
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Privacy</Link></li>
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Terms</Link></li>
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">License</Link></li>
                <li><Link href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Compliance</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">© 2024 YourBrand. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
