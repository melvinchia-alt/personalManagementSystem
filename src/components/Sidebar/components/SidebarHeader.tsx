import React, { useContext } from 'react'
import { GlobalStateContext } from '../../../providers/GlobalStateProvider'
import { Icon } from '@iconify/react'

function SidebarHeader(): React.JSX.Element {
  const { sidebarExpanded, toggleSidebar } = useContext(GlobalStateContext)

  return (
    <div className="flex h-36 w-full items-center justify-between pl-6">
      <h1 className="flex items-center gap-2 whitespace-nowrap text-xl font-semibold text-neutral-50">
        <Icon icon="tabler:hammer" className="text-3xl text-teal-500" />
        {sidebarExpanded && (
          <div>
            LifeForge<span className="text-3xl text-teal-500"> .</span>
          </div>
        )}
      </h1>
      {sidebarExpanded && (
        <button
          onClick={toggleSidebar}
          className="p-6 text-neutral-500 transition-all hover:text-neutral-100"
        >
          <Icon icon="tabler:menu" className="text-2xl" />
        </button>
      )}
    </div>
  )
}

export default SidebarHeader
