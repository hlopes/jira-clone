'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname()
  const isSignUp = pathname === '/sign-up'

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image src="/logo.svg" height={56} width={152} alt="Logo" />
          <Button asChild variant="secondary">
            <Link href={isSignUp ? '/sign-in' : '/sign-up'}>
              {isSignUp ? 'Login' : 'Sign Up'}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  )
}

export default AuthLayout
