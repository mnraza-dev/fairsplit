"use client"
import { useStoreUser } from '@/hooks/useStoreUser'
import { SignInButton, SignOutButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react'
import BarLoader from 'react-spinners/BarLoader'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Authenticated, Unauthenticated } from 'convex/react'
import { Button } from './ui/button'
import { LayoutDashboard } from 'lucide-react'
const Header = () => {
    const { isLoading, isAuthenticated } = useStoreUser();
    const { user } = useUser();
    const path = usePathname()
    return (
        <header className="bg-white/95 sticky top-0 left-0  w-full mx-auto px-3 sm:px-6 lg:px-9 border-b  z-50 backdrop-blur shadow-md supports-[backdrop-filter]:bg-white/65">
            <nav className="flex items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-light text-green-800">Fair </span>
                    <span className="text-2xl -ml-2 font-medium text-red-800">Split </span>
                </div>


                {
                    path === "/" &&
                    <div className='hidden md:flex items-center gap-4'>
                        <Link href="#features" className='text-sm font-semibold hover:text-green-600 transition'>Features</Link>
                        <Link href="#how-it-works" className="text-sm font-semibold hover:text-green-600 transition">How it Works</Link>
                    </div>
                }

                <div className='flex items-center gap-4'>
                    <Authenticated>
                        <Link href="/dashboard"
                        >
                            <Button variant="outline" className='hidden md:inline-flex hover:text-green-600 transition items-center gap-2 cursor-pointer'>
                                <LayoutDashboard size={20} className='text-green-600' />
                                Dashboard
                            </Button>
                            <Button variant="ghost" className='md:hidden w-10 h-10 p-0'>
                                <LayoutDashboard size={20} />
                            </Button>
                        </Link>
                        <UserButton />

                        {/* <SignOutButton>
                            <Button variant="ghost" className='text-red-600 hover:bg-red-100 transition duration-200'>
                                Sign Out
                            </Button>
                        </SignOutButton> */}
                    </Authenticated>
                    <Unauthenticated>
                        <SignInButton >
                            <Button variant="ghost">
                                Sign In
                            </Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button variant="outline" className='bg-green-600 text-white hover:bg-green-700 transition duration-200'>
                                Get Started
                            </Button>
                        </SignUpButton>
                    </Unauthenticated>

                </div>

            </nav>
            {
                isLoading && <BarLoader width={"100%"} color={"#22c55e"} /> // Show a loading spinner while the user is being stored

            }
        </header>

    )
}

export default Header