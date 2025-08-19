import React from 'react'
import { links } from '../Navbar.data'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function NavbarDesktop() {
  return (
    <div className='hidden md:flex item-center gap-4 text-lg'>
      {links.map((link) => (
        <Button key={link.name} variant="ghost" asChild>
          <Link href={link.href}>{link.name}</Link>
        </Button>
      ))}
    </div>
  )
}
