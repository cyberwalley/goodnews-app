import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import useContentful from '../api/useContentful';
import { useQuery } from '@tanstack/react-query';
import Logo from '../assets/images/getcrazyoffers-logo.svg';
import { SITE_NAME } from '../libs/constants';
interface HeaderProps {
  children?: React.ReactNode;
}

/* const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];
*/

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const { getMainMenuItems } = useContentful();

  const { data: navigation } = useQuery({
    queryKey: ['Main menu'],
    queryFn: getMainMenuItems,
  });
  console.log(navigation, 'navigation');
  return (
    <header>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to={'/'}>
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src={Logo}
                        alt={SITE_NAME}
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src={Logo}
                        alt={SITE_NAME}
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation &&
                        navigation.map(({ id, title, slug }) => (
                          <Link
                            key={id}
                            to={`categories/${slug}`}
                            className={classNames(
                              id.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium',
                            )}
                            aria-current={id.current ? 'page' : undefined}
                          >
                            {title}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation &&
                  navigation.map(({ id, title, slug }) => (
                    <Link
                      key={id}
                      to={`categories/${slug}`}
                      className={classNames(
                        id.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium',
                      )}
                      aria-current={id.current ? 'page' : undefined}
                    >
                      {title}
                    </Link>
                  ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;
