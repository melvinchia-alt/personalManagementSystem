/* eslint-disable @typescript-eslint/indent */
import { Menu, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function FAB({
  setTypeOfModifyIdea,
  setModifyIdeaModalOpenType
}: {
  setTypeOfModifyIdea: React.Dispatch<
    React.SetStateAction<'link' | 'image' | 'text'>
  >
  setModifyIdeaModalOpenType: React.Dispatch<
    React.SetStateAction<'create' | 'update' | null>
  >
}): React.ReactElement {
  return (
    <>
      <Menu
        as="div"
        className="group fixed bottom-6 right-6 z-[9998] overscroll-contain sm:bottom-12 sm:right-12 "
      >
        {({ open }) => (
          <>
            <Menu.Button className="relative z-10 flex items-center gap-2 rounded-lg bg-custom-500 p-4 font-semibold uppercase tracking-wider text-neutral-100 shadow-lg hover:bg-custom-600 dark:text-neutral-800">
              <Icon
                icon="tabler:plus"
                className={`h-6 w-6 shrink-0 transition-all ${
                  open && 'rotate-45'
                }`}
              />
            </Menu.Button>
            <Transition
              enter="transition-all ease-out duration-300 overflow-hidden"
              enterFrom="max-h-0"
              enterTo="max-h-96"
              leave="transition-all ease-in duration-200 overflow-hidden"
              leaveFrom="max-h-96"
              leaveTo="max-h-0"
              className="absolute bottom-0 right-0 z-10 -translate-y-16 overflow-hidden"
            >
              <Menu.Items className="mt-2 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="py-1">
                  {[
                    ['Text', 'tabler:text-size'],
                    ['Link', 'tabler:link'],
                    ['Image', 'tabler:photo']
                  ].map(([name, icon]) => (
                    <Menu.Item key={name}>
                      {({ active }) => (
                        <button
                          onClick={() => {
                            setTypeOfModifyIdea(
                              name.toLowerCase() as 'text' | 'image' | 'link'
                            )
                            setModifyIdeaModalOpenType('create')
                          }}
                          className={`group flex w-full items-center justify-end gap-4 rounded-md py-3 pr-2 ${
                            active ? 'text-neutral-200' : 'text-neutral-100'
                          }`}
                        >
                          {name}
                          <button
                            className={`rounded-full ${
                              active ? 'bg-neutral-300' : 'bg-neutral-200'
                            } p-3`}
                          >
                            <Icon
                              icon={icon}
                              className={`h-5 w-5 text-neutral-800 ${
                                active && 'text-neutral-300'
                              }`}
                            />
                          </button>
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
            <div
              className={`fixed left-0 top-0 h-full w-full transition-transform ${
                open ? 'translate-x-0 duration-0' : 'translate-x-full delay-100'
              }`}
            >
              <div
                className={`h-full w-full bg-neutral-900/50 backdrop-blur-sm transition-opacity ${
                  open ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </>
        )}
      </Menu>
    </>
  )
}

export default FAB
