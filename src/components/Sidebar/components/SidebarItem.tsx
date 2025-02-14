import { Icon } from '@iconify/react'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalStateContext } from '../../../providers/GlobalStateProvider'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

interface SidebarItemProps {
  icon: string
  name: string
  subsection?: string[][]
  isMainSidebarItem?: boolean
  active?: boolean
}

function titleToPath(title: string): string {
  return title.toLowerCase().replace(' ', '-')
}

function SidebarItem({
  icon,
  name,
  subsection,
  isMainSidebarItem,
  active
}: SidebarItemProps): React.JSX.Element {
  const { sidebarExpanded, toggleSidebar } =
    isMainSidebarItem === true
      ? useContext(GlobalStateContext)
      : { sidebarExpanded: true }
  const [subsectionExpanded, setSubsectionExpanded] = useState(false)

  function toggleSubsection(): void {
    setSubsectionExpanded(!subsectionExpanded)
  }

  const location = useLocation()

  useEffect(() => {
    setSubsectionExpanded(
      location.pathname.slice(1).startsWith(titleToPath(name))
    )
  }, [location.pathname])

  return (
    <>
      <li
        className={`relative flex items-center gap-6 px-4 font-medium transition-all ${
          location.pathname.slice(1).startsWith(titleToPath(name))
            ? "text-neutral-800 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-1 after:-translate-y-1/2 after:rounded-full after:bg-custom-500 after:content-[''] dark:text-neutral-100"
            : 'text-neutral-500 dark:text-neutral-400'
        }`}
      >
        <div
          className={`relative flex w-full items-center justify-between gap-6 whitespace-nowrap rounded-lg p-4 hover:bg-neutral-200/30 dark:hover:bg-neutral-800 ${
            location.pathname.slice(1).startsWith(titleToPath(name)) ||
            active === true
              ? 'bg-neutral-200/50 dark:bg-neutral-800'
              : ''
          }`}
        >
          <div className="flex min-w-0 items-center gap-6">
            <Icon
              icon={icon}
              className={`h-6 w-6 shrink-0 ${
                location.pathname.slice(1).startsWith(titleToPath(name)) ||
                active === true
                  ? 'text-custom-500'
                  : ''
              }`}
            />
            <span className="w-full truncate">{sidebarExpanded && name}</span>
          </div>

          <Link
            onClick={() => {
              if (window.innerWidth < 1024) {
                toggleSidebar()
              }
            }}
            to={`./${titleToPath(name)}`}
            className="absolute left-0 top-0 h-full w-full rounded-lg"
          />
          {sidebarExpanded && (
            <div className="relative flex items-center justify-between">
              {subsection !== undefined && (
                <button
                  onClick={toggleSubsection}
                  className="rounded-full p-1 hover:bg-neutral-200 dark:hover:bg-neutral-700/50"
                >
                  <Icon
                    icon="tabler:chevron-right"
                    className={`stroke-[2px] text-neutral-400 transition-all ${
                      subsectionExpanded ? 'rotate-90' : ''
                    }`}
                  />
                </button>
              )}
            </div>
          )}
        </div>
      </li>
      {sidebarExpanded && subsection !== undefined && (
        <li
          className={`flex h-auto shrink-0 flex-col gap-2 overflow-hidden ${
            subsectionExpanded ? 'max-h-[1000px] py-2' : 'max-h-0 py-0'
          }`}
        >
          {subsection.map(
            ([subsectionName, subsectionIcon, subsectionLink]) => (
              <Link
                to={`./${titleToPath(name)}/${subsectionLink}`}
                key={subsectionName}
                className={`mx-4 flex items-center gap-4 rounded-lg py-4 pl-[3.8rem] font-medium transition-all hover:bg-neutral-200/30 dark:hover:bg-neutral-800  ${
                  location.pathname.split('/').slice(1)[0] ===
                    titleToPath(name) &&
                  location.pathname.split('/').slice(1)[1] === subsectionLink
                    ? 'bg-neutral-200/50 dark:bg-neutral-800'
                    : 'text-neutral-400'
                }`}
              >
                <Icon icon={subsectionIcon} className="h-6 w-6" />
                {subsectionName}
              </Link>
            )
          )}
        </li>
      )}
    </>
  )
}

export default SidebarItem
