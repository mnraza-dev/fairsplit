"use client"
import { useStoreUser } from '@/hooks/useStoreUser'
import { useUser } from '@clerk/clerk-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const { isLoading, isAuthenticated } = useStoreUser();
    const { user } = useUser();
    return (

        <header className="bg-white/95 sticky top-0 left-0  w-full mx-auto px-3 sm:px-6 lg:px-9 border-b  z-50 backdrop-blur shadow-md supports-[backdrop-filter]:bg-white/65">
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-medium text-green-600">Fair </span>
                    <span className="text-2xl -ml-1 font-medium text-red-800">Split </span>
                </div>

                <div className='flex items-center gap-4'>
                    <Link href="/" className='text-gray-800'>Home</Link>
                    <Link href="/" className='text-gray-800'>How it Works</Link>
                    <Link href="/" className='text-gray-800'>Contact</Link>

                    <div>
                        <Link href="/login" className='bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-500 transition duration-200'>Login</Link>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header