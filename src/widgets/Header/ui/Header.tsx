import { useTheme } from '@/app/providers/ThemeProvider';
import { navigation } from "./navigationMock";
import { NavLink, useLocation  } from 'react-router-dom';
import { classNames } from '@/shared/libs';
import { Switch } from '@/shared/Switch';
import { Moon, Sun } from 'react-feather';


export const Header = () => {
  const { toggleTheme, theme } = useTheme();
  let location = useLocation();
    return (
      <>
      <div className="dark:bg-white-800 border-b-5 border-gray-900 min-h-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={
                      classNames("px-3 py-5 text-sm font-medium",{"text-indigo-400": location.pathname === item.href, "font-medium text-black-400": location.pathname !== item.href },[])}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <Switch checkedChildren={<Moon width='16' height='16' />} unCheckedChildren={<Sun width='16' height='16' />} isChecked={theme === "normal"} onChange={toggleTheme} />
        </div>
      </div>
    </div>
    </>
    )
}
