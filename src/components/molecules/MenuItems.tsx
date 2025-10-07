'use client';

import { JSX } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

interface Props {
  menuItems: {
    text: string;
    icon: JSX.Element;
    href: string;
  }[];
}

export const MenuItems = ({ menuItems }: Props ) => {
  const pathname = usePathname();

  return (
    <ul className='flex flex-col w-full gap-1'>
      {
        menuItems.map((item, index) => (
          <Link href={item.href} key={index} className={clsx({ 'bg-fuchsia-400 text-gray-900': pathname === item.href }, 'rounded')}>
            <li  className={clsx('flex flex-row gap-2 items-center rounded p-2 hover:bg-fuchsia-400/20 cursor-pointer font-semibold')} >
              {item.icon}

              <span>{item.text}</span>
            </li>
          </Link>
        ))
      }
    </ul>
  );
}
