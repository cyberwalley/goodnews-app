/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import Logo from '../assets/images/getcrazyoffers-logo.svg';
import { SITE_NAME } from '../libs/constants';
import { Link } from 'react-router-dom';
import useContentful from '../api/useContentful';

const navigation = {
  categories: [
    {
      id: 'offers',
      name: 'Offers',
      featured: [
        {
          name: 'ads-container-1',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          ads: (
            <iframe
              src="//ws-na.amazon-adsystem.com/widgets/cm?o=15&p=12&l=ur1&category=sportsoutdoors&banner=0B0Q3MFP6BNN3KJM6ZR2&f=ifr&linkID=45d053cc7cfe9eed9bad7f4a6b7049b4&t=gcoffersca-20&tracking_id=gcoffersca-20"
              width="300"
              height="250"
              scrolling="no"
              marginWidth={0}
              style={{ border: 'none' }}
              frameBorder={0}
              sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
            ></iframe>
          ),
        },
        {
          name: 'ads-container-2',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          ads: (
            <iframe
              src="//ws-na.amazon-adsystem.com/widgets/cm?o=15&p=12&l=ur1&category=books&banner=1CF5A619J93FZ5Z2EQ82&f=ifr&linkID=ca2d1e0d3878d898ee2139932a414d73&t=gcoffersca-20&tracking_id=gcoffersca-20"
              width="300"
              height="250"
              scrolling="no"
              marginWidth={0}
              style={{ border: 'none' }}
              frameBorder={0}
              sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
            ></iframe>
          ),
        },
      ],
      sections: [
        {
          id: 'shop-by-category',
          name: 'Shop by category',
          items: [
            { name: 'Beauty', href: '/categories/beauty' },
            { name: 'Baby', href: '/categories/baby' },
            { name: 'Home & Kitchen', href: '/categories/home-and-kitchen' },
            { name: 'Electronic', href: '/categories/electronics' },
            { name: 'Tools', href: '/categories/tools' },
            { name: 'Office', href: '/categories/office' },
            { name: 'Computers', href: '/categories/computers' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '/categories' },
          ],
        },
        {
          id: 'shop-by-campaigns',
          name: 'Shop by campaigns',
          items: [
            { name: 'Going viral', href: '/campaigns/going-viral' },
            {
              name: "Women's history month",
              href: '/campaigns/women-history-month',
            },
            { name: 'Back to school', href: '/campaigns/back-to-school' },
            { name: 'Black Friday', href: '/campaigns/black-friday' },
            { name: 'Cyber Monday', href: '/campaigns/cyber-monday' },
          ],
        },
      ],
    },
    {
      id: 'coupons',
      name: 'Coupons',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          ads: '',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          ads: '',
        },
      ],
      sections: [
        {
          id: 'all-coupons',
          name: 'Top Coupons',
          items: [{ name: 'Amazon', href: '/coupons/amazon' }],
        },
      ],
    },
    {
      id: 'stores',
      name: 'Stores',
      featured: [
        {
          name: 'ads1',
          href: '#',
          ads: '',
        },
        {
          name: 'ads2',
          href: '#',
          ads: '',
        },
      ],
      sections: [
        {
          id: 'stores',
          name: 'Stores',
          items: [
            { name: 'Amazon', href: '/stores/amazon' },
            { name: 'Jumia', href: '/stores/amazon' },
          ],
        },
      ],
    },
    {
      id: 'buying-guides',
      name: 'Buying Guides',
      featured: [
        {
          name: 'ads1',
          href: '#',
          ads: '',
        },
        {
          name: 'ads2',
          href: '#',
          ads: '',
        },
      ],
      sections: [
        {
          id: 'computing',
          name: 'Computing',
          items: [
            { name: 'Laptops', href: '/buying-guides/laptops' },
            { name: 'Desktops', href: '/buying-guides/desktops' },
          ],
        },
        {
          id: 'mobile',
          name: 'Mobile',
          items: [
            { name: 'Phones', href: '/buying-guides/phones' },
            { name: 'Tablets', href: '/buying-guides/tablets' },
            { name: 'Smart watches', href: '/buying-guides/smart-watches' },
          ],
        },
        {
          id: 'gaming-consoles',
          name: 'Gaming consoles',
          items: [
            { name: 'XBox', href: '/buying-guides/xbox' },
            { name: 'PS4', href: '/buying-guides/PS' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'About us', href: '/pages/about' },
    { name: 'Policies', href: '/pages/policies' },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { getMainMenuItems } = useContentful();

  const { data: menuByCategory } = useQuery({
    queryKey: ['Main menu'],
    queryFn: getMainMenuItems,
  });
  console.log(menuByCategory, ' menuByCategory');
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map(category => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? 'border-rose-500 text-rose-500'
                                : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium',
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map(category => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pt-10 pb-8"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map(item => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              {item.ads && (
                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                  {item.ads}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        {category.sections.map(section => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map(item => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  {navigation.pages.map(page => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                {/* <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create account
                    </a>
                  </div>
                </div> */}

                {/* <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* desktop */}
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-black px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-black">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'}>
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src={Logo}
                    alt={SITE_NAME}
                    title={`${SITE_NAME}'s logo`}
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:block lg:self-stretch ml-auto">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map(category => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-black text-black font-extrabold'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-xl font-medium transition-colors duration-200 ease-out',
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute z-[9999] inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map(item => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                           {item.ads && (
                                          <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            {/*  <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            /> */}
                                            {item.ads}
                                          </div>
                                           )}
                                          {/*  <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p> */}
                                        </div>
                                          
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map(section => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map(item => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <Link
                                                  to={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {/*  {navigation.pages.map(page => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))} */}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                {/* Search */}
                <div className="flex lg:ml-6">
                  <button
                    onClick={() => setIsSearchOpen(() => !isSearchOpen)}
                    className="p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {isSearchOpen && (
          <Transition
            show={isSearchOpen}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <div className="px-10 py-10">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <MagnifyingGlassIcon
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                </span>
                <input
                  className=" transition-all placeholder:italic text-black placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search for anything..."
                  type="text"
                  name="search"
                />
              </label>
            </div>
          </Transition>
        )}
      </header>
    </div>
  );
};

Header.displayName = 'Header';

export default Header;
