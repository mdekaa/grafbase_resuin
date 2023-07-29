import { NavLinks } from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'

const Navbar = () => {

  const session= {};   
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexstart gap-10'>
            <Link href="/">
                <Image
                    src="/logo.png"
                    width={115}
                    height={43}
                    alt='ResuIN'
                />
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
                {/* we will map over links from constant folder */}
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>

        <div className='flexCenter gap-4'>
            {session ? (
                <>
                UserPhoto
                <Link href="/create-project">
                    Share Work
                </Link>
                </>
            ) : (
                <AuthProviders/>
            )}

        </div>
    </nav>
  )
}

export default Navbar