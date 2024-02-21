import { useTheme } from '@/app/providers/ThemeProvider';
import { navigation } from "./navigationMock";
import { NavLink, useLocation  } from 'react-router-dom';
import { joinClassNames } from '@/shared/libs';
import { Switch } from '@/shared/Switch';
import { Moon, Sun } from 'react-feather';


export const Header = () => {
  const { toggleTheme, theme } = useTheme();
  let location = useLocation();
    return (
      <>
      <div className="border-b-5 border-gray-900 min-h-full">
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
                      joinClassNames(
                      location.pathname === item.href
                        ? "text-indigo-400"
                        : "font-medium text-black-400",
                      "px-3 py-5 text-sm font-medium"
                    )
                  
                  }
                    aria-current={location.pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <Switch checkedChildren={<Sun width='16' height='16' />} unCheckedChildren={<Moon width='16' height='16' />} isChecked={theme === "normal"} onChange={toggleTheme} />
        </div>
      </div>
    </div>
    </>
    )
}
