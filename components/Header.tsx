import React from 'react'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import Container from './Container'
import MobileMenu from './MobileMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from '@clerk/nextjs'

export default async function Header() {
  const user=await currentUser();
 
  return (
    <header className='bg-white border-b border-b-gray-400 py-5 '>
    <Container className='flex items-center justify-between gap-7 text-lightColor'>
   <div className="flex items-center justify-start gap-3 w-auto md:w-1/3">
      <MobileMenu />
      <Logo className="italic text-lg md:text-xl lg:text-2xl font-bold tracking-wide">
        BGC
      </Logo>
    </div>

      <HeaderMenu />
      <div className="w-auto md:w-1/3 justify-end gap-5 flex items-center">
       <SearchBar/>
       <CartIcon/>
      <ClerkLoaded>
        <SignedIn>
          <UserButton/>
        </SignedIn>
            {!user && (
          <SignInButton mode="modal">
              <button className="text-sm font-semibold hover:text-darkColor hoverEffect">Login</button>
          </SignInButton>
            )
            }
      </ClerkLoaded>
      </div>
    </Container>
    </header>
  )
}
