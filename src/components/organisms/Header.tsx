import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { SearchIcon } from '@/components/icons/SearchIcon';
import { BellIcon } from '@/components/icons/BellIcon';

export const Header = () => {
  const t = useTranslations('header');

  return (
    <header
      className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-white/20 bg-white/10 backdrop-blur-md px-6 flex-shrink-0">

      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-pink-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-package h-4 w-4 text-white">
          <path d="m7.5 4.27 9 5.15"></path>
          <path
            d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
          <path d="m3.3 7 8.7 5 8.7-5"></path>
          <path d="M12 22V12"></path>
        </svg>
      </div>

      <div className="flex-1">
        <h1 className="text-xl font-semibold text-white">{t('greeting', {username: 'Andy'})}</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <SearchIcon
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
            color="#8aadf4"
            strokeWidth={2}
            width={20}
            height={20}
          />

          <input
            className="w-64 h-10 pl-8 border bg-white/20 border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            type="text"
            placeholder={t('search')}
          />
        </div>

        <button className="relative">
          <BellIcon color="#8aadf4" width={20} height={20} />


          <span
            className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
            3
          </span>
        </button>

        <div className="shrink-0 overflow-hidden rounded-full">
          <Image src="/assets/users/default-image.png" alt="user-image" width={45} height={45} />
        </div>
      </div>
    </header>
  );
};
