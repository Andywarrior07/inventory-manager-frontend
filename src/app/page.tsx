import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { QRIcon } from '@/components/icons/QRIcon';
import { BoxIcon } from '@/components/icons/BoxIcon';
import { MoneyBagIcon } from '@/components/icons/MoneyBagIcon';
import { AlertIcon } from '@/components/icons/AlertIcon';
import { TradeUpIcon } from '@/components/icons/TradeUpIcon';

export default function Dashboard() {
  const t = useTranslations('dashboard');
  const figuresOutOfPlace = 0;

  return (
    <div>
      <header className="flex items-center justify-between mb-6">
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {t('title')}
          </h1>
          <p className="text-neutral-400 font-bold">{t('subtitle')}</p>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/scan"
                className="flex justify-between items-center gap-2 bg-cyan-500 px-4 py-2 rounded-md text-black font-semibold hover:bg-cyan-600 transition-colors">
            <QRIcon />
            {t('scanButton')}
          </Link>
        </div>
      </header>
      {/* Card - Si se ve mal, probar: grid grid-cols-1 md:grid-cols-3 gap-6*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* First card */}
        <div
          className="bg-neutral-900 text-card-foreground flex flex-col gap-6 rounded-xl border border-neutral-800 py-6 shadow-sm relative overflow-hidden"
        >
          {/*  Card header */}
          <div className="flex items-center justify-between px-6">
            <div className="font-semibold text-neutral-400">{t('card1.title')}</div>

            <BoxIcon color="#00b8db" />
          </div>

          {/*  Card content */}
          <div className="px-6">
            <div className="text-2xl font-bold">3</div>

            <div className="text-sm text-neutral-400">{t('card1.description', { franchises: 3 })}</div>

            <div className="text-sm font-semibold mt-2">{t('card1.variant', {percentage: '+12'})}</div>
          </div>
        </div>

        {/*  Second card */}
        <div
          className="bg-neutral-900 text-card-foreground flex flex-col gap-6 rounded-xl border border-neutral-800 py-6 shadow-sm relative overflow-hidden"
        >
          {/*  Card header */}
          <div className="flex items-center justify-between px-6">
            <div className="font-semibold text-neutral-400">{t('card2.title')}</div>

            <MoneyBagIcon color="#00b8db" />
          </div>

          {/*  Card content */}
          <div className="px-6">
            <div className="text-2xl font-bold">$275</div>

            <div className="text-sm text-neutral-400">{t('card2.description', { amountAverage: 95 })}</div>

            <div className="text-sm font-semibold mt-2">{t('card2.variant', {percentage: '+8.2'})}</div>
          </div>
        </div>

        {/*  Third card */}
        <div
          className="bg-neutral-900 text-card-foreground flex flex-col gap-6 rounded-xl border border-neutral-800 py-6 shadow-sm relative overflow-hidden"
        >
          {/*  Card header */}
          <div className="flex items-center justify-between px-6">
            <div className="font-semibold text-neutral-400">{t('card3.title')}</div>

            <AlertIcon color="#00b8db" />
          </div>

          {/*  Card content */}
          <div className="px-6">
            <div className="text-2xl font-bold">3</div>

            <div className="text-sm text-neutral-400">{t('card3.description')}</div>

            <div className="text-sm font-semibold mt-2">{t(figuresOutOfPlace > 0 ? 'card3.variantB': 'card3.variantA')}</div>
          </div>
        </div>

        {/*  Fourth card */}
        <div
          className="bg-neutral-900 text-card-foreground flex flex-col gap-6 rounded-xl border border-neutral-800 py-6 shadow-sm relative overflow-hidden"
        >
          {/*  Card header */}
          <div className="flex items-center justify-between px-6">
            <div className="font-semibold text-neutral-400">{t('card4.title')}</div>

            <TradeUpIcon color="#00b8db" />
          </div>

          {/*  Card content */}
          <div className="px-6">
            <div className="text-2xl font-bold">3</div>

            <div className="text-sm text-neutral-400">{t('card4.description', { franchises: 3 })}</div>

            {/*<div className="text-sm font-semibold mt-2">{t('card4.variant', {percentage: '+12'})}</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
