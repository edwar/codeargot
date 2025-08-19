'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { links } from '../Navbar.data'

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex md:hidden">
      <Button className='text-black' variant='outline' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
      {isOpen && (
        <div className='absolute top-full right-4 mt-2 bg-white text-black rounded-lg shadow-lg p-4 w-48 flex flex-col gap-3'>
          {links.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>{link.name}</Link>
          ))}
        </div>
      )}
    </div>
  )
}
