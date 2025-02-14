/* eslint-disable @typescript-eslint/indent */
import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { type IIdeaBoxContainer } from '../..'
import { toast } from 'react-toastify'
import GoBackButton from '../../../../components/GoBackButton'

function ContainerHeader({ id }: { id: string }): React.ReactElement {
  const [containerDetails, setContainerDetails] = useState<
    IIdeaBoxContainer | 'loading' | 'error'
  >('loading')
  const navigate = useNavigate()

  function fetchContainerDetails(): void {
    setContainerDetails('loading')
    fetch(`${import.meta.env.VITE_API_HOST}/idea-box/container/get/${id}`)
      .then(async response => {
        const data = await response.json()
        setContainerDetails(data.data)

        if (response.status !== 200) {
          throw data.message
        }
      })
      .catch(() => {
        setContainerDetails('error')
        toast.error('Failed to fetch data from server.')
      })
  }

  useEffect(() => {
    fetchContainerDetails()
  }, [])

  return (
    <header className="flex flex-col gap-1">
      <GoBackButton
        onClick={() => {
          navigate('/idea-box')
        }}
      />
      <div className="flex items-center justify-between">
        <h1
          className={`flex items-center gap-4 ${
            typeof containerDetails !== 'string'
              ? 'text-2xl sm:text-3xl'
              : 'text-2xl'
          } font-semibold `}
        >
          {(() => {
            switch (containerDetails) {
              case 'loading':
                return (
                  <>
                    <span className="small-loader-light"></span>
                    Loading...
                  </>
                )
              case 'error':
                return (
                  <>
                    <Icon
                      icon="tabler:alert-triangle"
                      className="mt-0.5 h-7 w-7 text-red-500"
                    />
                    Failed to fetch data from server.
                  </>
                )
              default:
                return (
                  <>
                    <div
                      className="rounded-lg p-3"
                      style={{
                        backgroundColor: containerDetails.color + '20'
                      }}
                    >
                      <Icon
                        icon={containerDetails.icon}
                        className="text-2xl sm:text-3xl"
                        style={{
                          color: containerDetails.color
                        }}
                      />
                    </div>
                    {containerDetails.name}
                  </>
                )
            }
          })()}
        </h1>
        <button className="rounded-lg p-4 text-neutral-500 transition-all hover:bg-neutral-200/50 hover:text-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-100">
          <Icon icon="tabler:dots-vertical" className="text-2xl" />
        </button>
      </div>
    </header>
  )
}

export default ContainerHeader
