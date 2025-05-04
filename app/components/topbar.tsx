'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Menu, X, Facebook, Twitter, Instagram, Search } from 'lucide-react' // 👉 added icon

const TopBar = () => {
  const [fixed, setFixed] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setFixed(!entry.isIntersecting),
      { threshold: 0 }
    )

    if (sentinelRef.current) observer.observe(sentinelRef.current)
    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current)
    }
  }, [])

  return (
    <div className="w-full relative ">
      {/* Top Section */}
      <div className="bg-red-600/50 backdrop-blur-md text-white py-2 absolute top-0 w-full z-40"> {/* 👉 transparency */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 text-center text-sm gap-y-1">
          <div>📞 0414672855</div>
          <div>⏰ Mon–Fri: 9am–6pm</div>
          <div>📍  Plot 25A Mukubira Road Makerere, Kampala, Uganda</div>
        </div>
      </div>

      {/* Sentinel */}
      <div ref={sentinelRef} className="h-[2.5rem]" />

      {/* Bottom Navigation */}
      <div
        className={`absolute bg-white/85 backdrop-blur-md text-black antialiased w-full z-50 shadow transition-transform duration-300 ${
          fixed ? 'fixed top-0 translate-y-0' : 'translate-y-[-10%]'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
            <div>
            <img src="images/logo.png" alt="MyLogo" className="h-11 w-15 ml-10" />
            </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="text-black"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 ">
         
        <NavDropdown
              label="Home"
              items={[]}
              hrefTo='/home'
            />
            <NavDropdown
              label="The Company"
              items={[]}
              hrefTo='/soon'
            />
            <NavDropdown
              label="Products"
              items={[
                { label: 'ODFs / Patch Panel', href: '/soon' },
                { label: 'Joint Enclosures', href: '/soon' },
                { label: 'Fibre Access Terminal', href: '/soon' },
                { label: 'Street Cabinet', href: '/soon' },
                { label: 'Manhole Covers', href: '/soon' },
              ]}
            />
            <NavDropdown
              label="Services"
              items={[
                { label: 'Fibre Infrastructure Service', href: '/soon' },
                { label: 'Wireless and Radio Services', href: '/soon' },
              ]}
            />
            <NavDropdown
              label="Our Tools"
              items={[
                { label: 'Yokagawa AT7280 OTDR', href: '/soon' },
                { label: 'Sumitomo FC-6+', href: '/soon' },
                { label: 'T 57 Splicing Machine', href: '/soon' },
              ]}
            />
          </nav>

          {/* 👉 Right Side Utilities */}
          <div className="hidden md:flex items-center gap-4">
            {/* 👉 Search bar 
            <div className="relative text-black">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 rounded-md text-sm focus:outline-none text-black"
              />
              <Search className="absolute right-2 top-1.5 h-4 w-4 text-gray-500" />
            </div>*/}

            {/* 👉 CTA */}
            <Button variant="secondary" className="text-white bg-black hover:bg-gray-100">
              Contact Us
            </Button>

            {/* 👉 Social Icons */}
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-gray-400" />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:text-gray-400" />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-gray-400" />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-3 animate-slide-down">
            <MobileLink href="/soon" label="Home" />
            <MobileLink href="/soon" label="The Company" />
            <MobileLink href="/soon" label="ODFs / Patch Panel" />
            <MobileLink href="/soon" label="Joint Enclosures" />
            <MobileLink href="/soon" label="Fibre Access Terminal" />
            <MobileLink href="/soon" label="Street Cabinet" />

            {/* 👉 Mobile Contact & Socials */}
            <Button className="w-full bg-white text-black">Contact Us</Button>
            <div className="flex gap-4 pt-2 border-t border-gray-700">
              <Link href="https://facebook.com"><Facebook className="w-5 h-5" /></Link>
              <Link href="https://twitter.com"><Twitter className="w-5 h-5" /></Link>
              <Link href="https://instagram.com"><Instagram className="w-5 h-5" /></Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const NavDropdown = ({
  label,
  items,
  hrefTo,
}: {
  label: string
  items: { label: string; href: string }[]
  hrefTo?: string
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      {hrefTo && items.length === 0 ? (
        <Link
          href={hrefTo}
          className="text-black hover:text-red-600"
        >
          <Button variant="ghost">{label}</Button>
        </Link>
      ) : (
        <Button
          variant="ghost"
          className="text-black hover:text-red-600"
        >
          {label}
        </Button>
      )}
    </DropdownMenuTrigger>
    {items.length > 0 && (
      <DropdownMenuContent className="bg-white text-black hover:text-red-600">
        {items.map((item, idx) => (
          <DropdownMenuItem key={idx}>
            <Link href={item.href} className="w-full">
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    )}
  </DropdownMenu>
)

const MobileLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="block text-white hover:text-gray-300">
    {label}
  </Link>
)

export default TopBar
