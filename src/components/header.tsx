'use client';

import { useEffect, useState, Fragment } from "react"
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface NavProp {
  name: string;
  href: string;
  mobileMenu: boolean;
}

const navigation: Array<NavProp> = [
  { name: 'About', href: '/about', mobileMenu: false },
  { name: 'Program', href: '/program', mobileMenu: false },
  { name: 'Facilities', href: '/facilities', mobileMenu: false},
]

const whiteHeaderPage = ['/about', '/program', '/facilities'];

export const Header = () => {
  const pathname = usePathname();

  const isBlack = whiteHeaderPage.includes(pathname);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const Logo = ({color}: {color: 'white'|'black'}) => (
    <Link className="-m-1.5 p-1.5 flex cursor-pointer lg:mr-20" href={"/"}>
      <Image src={`/logo/pwa_logo${color==='black'?'_black':''}.svg`} alt="Prep Wrestling Academy Logo" width={80} height={40} />
    </Link>
  )

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40
      ${!isBlack && 'text-white'}
      ${scrolled && !isBlack && 'backdrop-blur-md bg-black bg-opacity-20'} 
      ${isBlack && 'text-black bg-white'}
      ${isBlack && scrolled && 'border-b-1.5 border-black'}
    `}>
      {/* Desktop Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-x-12">
          <Logo color={isBlack ? 'black' : 'white'} />
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog className="relative z-50" onClose={setMobileMenuOpen}>
          <TransitionChild
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          </TransitionChild>
          <TransitionChild
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <Logo color="white" />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        onClick={() => setMobileMenuOpen(false)}
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 ${!item.mobileMenu && 'lg:hidden'}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </header>
  )
}
