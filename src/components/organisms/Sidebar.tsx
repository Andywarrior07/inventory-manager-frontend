import { useTranslations } from 'next-intl';

import { HouseIcon } from '@/components/icons/HouseIcon';
import { InventoryIcon } from '@/components/icons/InventoryIcon';
import { LocationIcon } from '@/components/icons/LocationIcon';
import { QRIcon } from '@/components/icons/QRIcon';
import { AnalyticsIcon } from '@/components/icons/AnalyticsIcon';
import { DataTransferHIcon } from '@/components/icons/DataTransferHIcon';
import { MenuItems } from '@/components/molecules/MenuItems';

export const Sidebar = () => {
  const t = useTranslations('sidebar');

  const menuItems = [
    {
      text: t('dashboard'),
      icon: <HouseIcon color='#fff' />,
      href: '/',
    },
    {
      text: t('figures'),
      icon: <InventoryIcon color='#fff' />,
      href: '/figures',
    },
    {
      text: t('locations'),
      icon: <LocationIcon color='#fff' />,
      href: '/locations',
    },
    {
      text: t('scan'),
      icon: <QRIcon color='#fff' />,
      href: '/scan',
    },
    {
      text: t('movements'),
      icon: <DataTransferHIcon color='#fff' />,
      href: '/movements',
    },
    {
      text: t('analytics'),
      icon: <AnalyticsIcon color='#fff'/>,
      href: '/analytics',
    }
  ];

  return (
    <div className='hidden md:block text-white bg-transparent h-full flex-shrink-0'>
      <div className='relative h-svh bg-neutral-900 border-r border-white/10 backdrop-blur-md w-64 z-10 pt-5 pl-3'>
        <nav className='min-h-0 flex flex-col flex-1 gap-2 overflow-auto px-2'>
          <MenuItems menuItems={menuItems} />
        </nav>
      </div>
    </div>
  );
}
