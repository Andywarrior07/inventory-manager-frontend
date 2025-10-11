import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { PlusIcon } from '@/components/icons/PlusIcon';
import { SearchIcon } from '@/components/icons/SearchIcon';
import { FilterIcon } from '@/components/icons/FilterIcon';
import { StarIcon } from '@/components/icons/StarIcon';
import { TradeUpIcon } from '@/components/icons/TradeUpIcon';
import { LocationIcon } from '@/components/icons/LocationIcon';
import { TaskEditIcon } from '@/components/icons/TaskEditIcon';
import { FileViewIcon } from '@/components/icons/FileViewIcon';
import { Select } from '@/components/molecules/Select';
import { CustomCheckbox } from '@/components/molecules/Checkbox';

export default function Figures() {
  const t = useTranslations('figures');
  const tc = useTranslations('common');

  const options = [
    { value: "name", label: tc('sortBy.name') },
    { value: "releaseYear", label: tc('sortBy.releaseYear') },
    { value: "franchise", label: tc('sortBy.franchise') },
    { value: "manufacturer", label: tc('sortBy.manufacturer') },
    { value: "currentValue", label: tc('sortBy.currentValue') },
  ];
  const figures = [
    {
      id: 1,
      name: 'Goku Super Saiyan',
      franchise: 'Dragon Ball Z',
      manufacturer: 'Banpresto',
      series: 'Resolution of Soldiers',
      releaseYear: 2023,
      purchaseDate: new Date('2023-06-15'),
      purchasePrice: 45.99,
      currentValue: 65.0,
      condition: 'Usado',
      location: {
        id: 1,
        name: 'Closet'
      },
      photoUrl: '/assets/figures/goku-ultra-instinct.webp',
      description: 'Figura de Goku en transformación Super Saiyan',
      height: 18, // cm
      weight: 250, // gr
      material: 'PVC',
      limitedEdition: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Naruto Uzumaki',
      franchise: 'Naruto',
      manufacturer: 'Good Smile Company',
      series: 'Nendoroid',
      releaseYear: 2022,
      purchaseDate: new Date('2022-11-20'),
      purchasePrice: 55.0,
      currentValue: 70.0,
      condition: 'Nunca abierto',
      location: {
        id: 1,
        name: 'Closet'
      },
      photoUrl: '/assets/figures/goku-ultra-instinct.webp',
      description: 'Nendoroid de Naruto con accesorios',
      height: 10,
      weight: 150,
      material: 'ABS/PVC',
      limitedEdition: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ];

  const franchises = [...new Set(figures.map((f: any) => f.franchise).filter(Boolean))].sort();
  const manufacturers = [...new Set(figures.map((f: any) => f.manufacturer).filter(Boolean))].sort();
  const conditions = [...new Set(figures.map((f: any) => f.condition).filter(Boolean))].sort();

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
          <Link href="/figures/new"
                className="flex justify-between items-center gap-2 bg-cyan-500 px-4 py-2 rounded-md text-black font-semibold hover:bg-cyan-600 transition-colors">
            <PlusIcon />
            {t('addButton')}
          </Link>
        </div>
      </header>

      {/* Search */}
      <div className="flex items-center justify-between max-w-screen">
        <div className="relative flex-1">
          <SearchIcon
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
            color="#00b8db"
            strokeWidth={2}
            width={20}
            height={20}
          />

          <input
            className="w-full max-w-md h-10 pl-8 border bg-neutral-900 border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            type="text"
            placeholder={t('search')}
          />
        </div>

        <div>
          <span className="pr-1">{t('orderBy')}: </span>

          <Select options={options} />
          {/*<select*/}
          {/*  className="bg-neutral-900 border border-white/30 text-white text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 hover:border-cyan-400 transition-colors"*/}
          {/*  defaultValue="name"*/}
          {/*>*/}
          {/*  <option value="name">Nombre</option>*/}
          {/*  <option value="releaseYear">Año de lanzamiento</option>*/}
          {/*  <option value="franchise">Franquicia</option>*/}
          {/*  <option value="manufacturer">Fabricante</option>*/}
          {/*  <option value="currentValue">Valor actual</option>*/}
          {/*</select>*/}
        </div>
      </div>

      {/* Figures filters and figures grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-6">
        <div className="lg:col-span-1">
          {/*  Filters card */}
          <div
            className="bg-neutral-900 text-zinc-50 flex flex-col gap-6 rounded-xl border border-neutral-800 py-6 shadow-sm relative overflow-hidden">
            {/* Header */}
            <div className="flex gap-2 px-6 items-center">
              <FilterIcon color="#00b8db" width={20} height={20} />
              <h3 className="font-semibold">{t('filter')}</h3>
            </div>

            <div className="px-6 space-y-6">
              {/*  Franchises */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">{t('franchise')}</h4>

                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {franchises.map((franchise) => (
                    <div key={franchise} className="flex items-center space-x-2">
                      <CustomCheckbox id={`franchise-${franchise}`} label={franchise}/>
                    </div>
                  ))}
                </div>
              </div>

              {/*  Manufacturers */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">{t('manufacturer')}</h4>

                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {manufacturers.map((manufacturer) => (
                    <div key={manufacturer} className="flex items-center space-x-2">
                      <CustomCheckbox id={`manufacturer-${manufacturer}`} label={manufacturer}/>
                    </div>
                  ))}
                </div>
              </div>

              {/*  Condition */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold">{t('condition')}</h4>

                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {conditions.map((condition) => (
                    <div key={condition} className="flex items-center space-x-2">
                      <CustomCheckbox id={`condition-${condition}`} label={condition}/>
                    </div>
                  ))}
                </div>
              </div>

              {/* Edition type */}
              {/*<div className="space-y-3">*/}
              {/*  <h4 className="text-sm font-semibold">{t('editionType')}</h4>*/}
              {/*  */}
              {/*  <div className="space-y-2 max-h-48 overflow-y-auto">*/}
              {/*  </div>*/}
              {/*</div>*/}

              {/*  TODO: Agregar una sección que tenga "Active filters" */}
            </div>
          </div>
        </div>

        {/* Figures Grid */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Figure card  */}
            {figures.map((figure) => (
              <div key={figure.id}
                   className="bg-neutral-900 text-zinc-50 flex flex-col gap-6 rounded-xl border border-neutral-800 py-6 shadow-sm relative overflow-hidden hover:shadow-md transition-all group">
                {/* Figure image */}
                <div className="relative h-48 bg-neutral-800">
                  <Image src="/assets/figures/goku-ultra-instinct.webp" alt="goku-ultra-instintc"
                         className="object-cover group-hover:scale-105 transition-transform duration-300" fill />

                  {/* Limited tag */}
                  {figure.limitedEdition && (
                    <div className="absolute top-2 left-2">
                      {/* Badge */}
                      <div
                        className="inline-flex items-center gap-2 rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border-transparent hover:bg-cyan-500 bg-fuchsia-400 text-neutral-950">
                        <StarIcon color="#000" width={18} height={18} strokeWidth={2} />

                        <span className="text-sm">Limitada</span>
                      </div>
                    </div>
                  )}
                </div>

                {/*  Card Content */}
                <div className="p-4 space-y-3">
                  <div className="space-y-1">
                    <Link href={`figures/${figure.id}`}>
                      <h3 className="font-semibold text-zinc-50 hover:text-cyan-500 transition-colors line-clamp-1">
                        {figure.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-neutral-400">{figure.franchise}</p>

                    <p className="text-xs text-neutral-400">{figure.manufacturer}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-md font-semibold text-zinc-50">
                        ${Number(figure.currentValue || 0).toLocaleString()}
                      </p>

                      {figure.purchasePrice && (
                        <div className="flex items-center gap-1">
                          <TradeUpIcon color="#00c951" />

                          <span className="text-xs text-green-500">
                            +{(
                            (
                              (
                                figure.currentValue - figure.purchasePrice
                              ) / figure.purchasePrice
                            ) * 100
                          ).toFixed(0)}%
                          </span>
                        </div>
                      )}
                    </div>

                    {figure?.location?.id && (
                      <div className="flex items-center gap-1 text-xs text-neutral-400">
                        <LocationIcon color="#a1a1a1" />

                        <span className="truncate">{figure.location.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2 text-sm flex-col md:justify-between md:items-center justify-start md:flex-row items-start">
                    <button
                      className="inline-flex items-center justify-between whitespace-nowrap font-medium transition-all cursor-pointer outline-none hover:bg-fuchsia-400 bg-transparent border rounded-md border-white/30 px-4 py-1"
                    >
                      <TaskEditIcon color="#fff" width={17} height={17} />

                      <span className="pl-1">{t('edit')}</span>
                    </button>

                    <button
                      className="inline-flex items-center justify-between whitespace-nowrap font-medium transition-all cursor-pointer outline-none hover:bg-fuchsia-400 bg-transparent border rounded-md border-white/30 px-4 py-1"
                    >
                      <FileViewIcon color="#fff" width={17} height={17} />

                      <span className="pl-1">{t('viewDetails')}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
