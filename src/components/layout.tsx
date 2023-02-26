import * as React from 'react';
import { HTMLAttributes, ReactElement, useState } from 'react';
import AppContext, { AppContextType } from '../context/app';
import { THEME } from '../helpers/constants';
import Header from './header';

const Layout = ({ children }: HTMLAttributes<{}>): ReactElement => {
  const isDarkColorScheme =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const cachedTheme =
    typeof localStorage !== 'undefined' &&
    'theme' in localStorage &&
    localStorage.theme;
  const currentTheme =
    cachedTheme || (isDarkColorScheme ? THEME.DARK : THEME.LIGHT);
  const [theme, setTheme] = useState(currentTheme);
  const themeContext = {
    theme,
    setTheme,
  };

  const thisYear = new Date().getFullYear();
  const copyrightYear =
    thisYear > 2023 ? [2023, '-', thisYear].join(' ') : thisYear;

  return (
    <AppContext.Provider value={themeContext as AppContextType}>
      <div
        style={{ width: '100%', height: '100vh' }}
        className={theme === THEME.DARK ? 'dark' : ''}
      >
        <div className="flex w-full h-full">
          <div
            style={{ height: 'min-content' }}
            className="my-auto w-full"
          >
            <div className="flex items-center justify-center h-screen bg-indigo-50 dark:bg-black">
              <div className="container text-base text-zinc-600 dark:text-zinc-400">
                <Header />
                <main className="bg-white rounded-lg shadow-lg p-5 md:p-20 mx-2 my-4 dark:bg-zinc-900">
                  {children}
                </main>
                <footer className="text-center">
                  © {copyrightYear}{' '}
                  <a
                    href="https://davidsemakula.com"
                    target="_blank"
                    className="text-indigo-600 hover:text-indigo-700 hover:underline dark:text-indigo-400 dark:hover:text-indigo-500"
                  >
                    David Semakula
                  </a>
                  . Some rights reserved.
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Layout;
