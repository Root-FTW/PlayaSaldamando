'use client';

import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import { useLanguage } from '@/components/providers/LanguageProvider';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇲🇽' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
];

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <Listbox value={language} onChange={setLanguage}>
      <div className="relative">
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white dark:bg-gray-800 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-ocean-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm border border-gray-300 dark:border-gray-600">
          <span className="flex items-center space-x-2">
            <span className="text-lg">{currentLanguage.flag}</span>
            <span className="block truncate text-gray-900 dark:text-white">
              {currentLanguage.code.toUpperCase()}
            </span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {languages.map((lang) => (
              <Listbox.Option
                key={lang.code}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active 
                      ? 'bg-ocean-100 dark:bg-ocean-900 text-ocean-900 dark:text-ocean-100' 
                      : 'text-gray-900 dark:text-white'
                  }`
                }
                value={lang.code}
              >
                {({ selected }) => (
                  <>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{lang.flag}</span>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {lang.name}
                      </span>
                    </div>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-ocean-600 dark:text-ocean-400">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
