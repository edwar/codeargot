'use client'
import { TypeAnimation } from 'react-type-animation'
import { Sparkle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
export function HeroBlock() {
  return (
    <section className='min-h-screen flex flex-col items-center justify-center'>
      <div className='container mx-auto px-4 py-20'>
        <h1 className='text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-center flex gap-2 flex-col items-center'>Practice real interviews in
          <span className='inline-block bg-indigo-500 text-white shadow-[0_0_20px_#6366f1] px-6 py-2 rounded-lg'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Frontend 💅🏼',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Backend 💻',
                1000,
                'Fullstack ⚙️',
                1000,
                'AI 🤖',
                1000,
                'Mobile 📱',
                1000,
                'Data 📊',
                1000,
                'DevOps 🚀',
                1000,
                'Cybersecurity 🛡️',
                1000,

              ]}
              wrapper="span"
              speed={70}
              className='text-5xl md:text-6xl font-extrabold tracking-tight text-center'
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className='text-indigo-100 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed text-center'>Prepare for your next job with realistic interview questions and feedback from real interviewers and actionable feedback to improve your skills with {''}
          <span className='bg-gradient-to-r from-indigo-600 via-purple  -500 to-cyan-500 text-transparent bg-clip-text font-extrabold'>CodeArgot</span>
        </p>
        <div className='flex items-center justify-center pb-5'>
          <Button className='group bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-20 py-6 text-lg font-semibold shadow-lg transition duration-300 ease-in-out cursor-pointer' asChild>
            <Link href='/dashboard'>
              <Sparkle className='group-hover:rotate-12 transition-transform' />
              Start Practicing Now
            </Link>
          </Button>
        </div>
        <div className='flex items-center gap-8 text-sm text-slate-200 justify-center'>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-green-500' />
            5+ interview types
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-primary' />
            No credit card required
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-blue-500' />
            Instant feedback
          </div>
        </div>
      </div>
    </section>
  )
}
