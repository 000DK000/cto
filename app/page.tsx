import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-medium hover:text-zinc-400 transition-colors">
              dvmnthonyy
            </Link>
            <div className="flex items-center gap-8">
              <Link href="#about" className="text-sm text-zinc-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#work" className="text-sm text-zinc-400 hover:text-white transition-colors">
                Work
              </Link>
              <Link href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl w-full">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-zinc-400 text-sm font-mono">Hey, I&apos;m</p>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                Anthony
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
              A creative developer crafting digital experiences that blend design and technology.
            </p>

            <div className="flex items-center gap-6 pt-8">
              <Link 
                href="#work" 
                className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
              >
                View my work
              </Link>
              <Link 
                href="#contact" 
                className="px-6 py-3 border border-zinc-700 rounded-full hover:border-zinc-500 transition-colors"
              >
                Get in touch
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-8">
              <Link href="https://github.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link href="mailto:hello@example.com" className="text-zinc-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-32 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">About me</h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  I&apos;m a full-stack developer with a passion for creating beautiful, functional, and user-friendly digital experiences. I specialize in modern web technologies and love bringing ideas to life through code.
                </p>
                <p>
                  With expertise in React, Next.js, TypeScript, and modern design tools, I build products that not only look great but also perform exceptionally well.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Git', 'Figma'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm hover:border-zinc-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Experience</h3>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="font-medium">Senior Developer</p>
                    <p className="text-sm text-zinc-400">Tech Company · 2022 - Present</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Full Stack Developer</p>
                    <p className="text-sm text-zinc-400">Startup Inc · 2020 - 2022</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">Frontend Developer</p>
                    <p className="text-sm text-zinc-400">Agency · 2019 - 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen px-6 py-32 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
            <p className="text-xl text-zinc-400">A collection of projects I&apos;m proud of</p>
          </div>

          <div className="space-y-32">
            {/* Project 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-video bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto"></div>
                      <p className="text-zinc-500 text-sm">Project Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="space-y-2">
                  <p className="text-sm text-zinc-400 font-mono">01</p>
                  <h3 className="text-3xl font-bold">E-Commerce Platform</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  A modern e-commerce solution built with Next.js and Stripe. Features include real-time inventory management, secure checkout, and an intuitive admin dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs">Next.js</span>
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs">TypeScript</span>
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs">Stripe</span>
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <Link href="#" className="text-sm hover:text-zinc-400 transition-colors flex items-center gap-2">
                    View Project
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm text-zinc-400 font-mono">02</p>
                  <h3 className="text-3xl font-bold">SaaS Analytics Dashboard</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Real-time analytics platform for SaaS businesses. Includes custom visualizations, data export capabilities, and API integrations with popular tools.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs">React</span>
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs">D3.js</span>
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs">Node.js</span>
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs">MongoDB</span>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <Link href="#" className="text-sm hover:text-zinc-400 transition-colors flex items-center gap-2">
                    View Project
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div>
                <div className="aspect-video bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mx-auto"></div>
                      <p className="text-zinc-500 text-sm">Project Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-video bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl mx-auto"></div>
                      <p className="text-zinc-500 text-sm">Project Screenshot</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="space-y-2">
                  <p className="text-sm text-zinc-400 font-mono">03</p>
                  <h3 className="text-3xl font-bold">Mobile Fitness App</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Cross-platform fitness tracking app with workout planning, progress tracking, and social features. Built with React Native for iOS and Android.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs">React Native</span>
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs">Expo</span>
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs">Firebase</span>
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs">Redux</span>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <Link href="#" className="text-sm hover:text-zinc-400 transition-colors flex items-center gap-2">
                    View Project
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-6 py-32 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto w-full text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold">Let&apos;s work together</h2>
              <p className="text-xl text-zinc-400">
                Have a project in mind? Let&apos;s create something amazing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link 
                href="mailto:hello@example.com" 
                className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
              >
                Send me an email
              </Link>
              <Link 
                href="https://calendly.com" 
                target="_blank"
                className="px-8 py-4 border border-zinc-700 rounded-full hover:border-zinc-500 transition-colors"
              >
                Schedule a call
              </Link>
            </div>

            <div className="pt-16">
              <p className="text-sm text-zinc-500">Or find me on</p>
              <div className="flex items-center justify-center gap-6 mt-4">
                <Link href="https://github.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                  GitHub
                </Link>
                <span className="text-zinc-800">·</span>
                <Link href="https://twitter.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                  Twitter
                </Link>
                <span className="text-zinc-800">·</span>
                <Link href="https://linkedin.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">© 2024 Anthony. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#about" className="text-sm text-zinc-500 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#work" className="text-sm text-zinc-500 hover:text-white transition-colors">
                Work
              </Link>
              <Link href="#contact" className="text-sm text-zinc-500 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
