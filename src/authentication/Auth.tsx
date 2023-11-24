import { Icon } from '@iconify/react'
import React, { useState } from 'react'

function Auth(): React.ReactElement {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function updateEmail(event: React.ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value)
  }

  function updatePassword(event: React.ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value)
  }

  return (
    <>
      <section className="flex h-full w-1/2 flex-col items-center justify-center">
        <h1 className="mb-8 flex items-center gap-2 whitespace-nowrap text-3xl font-semibold ">
          <Icon icon="tabler:hammer" className="text-5xl text-teal-500" />
          <div>
            LifeForge<span className="text-4xl text-teal-500"> .</span>
          </div>
        </h1>
        <h2 className="text-5xl font-semibold tracking-wide ">Welcome Back!</h2>
        <p className="mt-4 text-xl text-neutral-300">
          Sign in to continue tracking your life.
        </p>
        <form className="mt-12 flex w-full max-w-md flex-col gap-8">
          <div className="group relative flex items-center gap-1 rounded-t-lg border-b-2 border-neutral-500 bg-neutral-800 focus-within:border-teal-500">
            <Icon
              icon="tabler:mail"
              className="ml-6 h-6 w-6 shrink-0 text-neutral-500 group-focus-within:text-teal-500"
            />

            <div className="flex w-full items-center gap-2">
              <span
                className={`pointer-events-none absolute left-[4.2rem] font-medium tracking-wide text-neutral-500 group-focus-within:text-teal-500 ${
                  email.length === 0
                    ? 'top-1/2 -translate-y-1/2 group-focus-within:top-6 group-focus-within:text-[14px]'
                    : 'top-6 -translate-y-1/2 text-[14px]'
                }`}
              >
                Email
              </span>
              <input
                type="email"
                value={email}
                onChange={updateEmail}
                placeholder="someone@example.com"
                className="mt-6 h-8 w-full rounded-lg bg-transparent p-6 pl-4 tracking-widest placeholder:text-transparent focus:outline-none focus:placeholder:text-neutral-500"
              />
            </div>
          </div>
          <div className="group relative flex items-center gap-1 rounded-t-lg border-b-2 border-neutral-500 bg-neutral-800 focus-within:border-teal-500">
            <Icon
              icon="tabler:key"
              className="ml-6 h-6 w-6 shrink-0 text-neutral-500 group-focus-within:text-teal-500"
            />

            <div className="flex w-full items-center gap-2">
              <span
                className={`pointer-events-none absolute left-[4.2rem] font-medium tracking-wide text-neutral-500 group-focus-within:text-teal-500 ${
                  password.length === 0
                    ? 'top-1/2 -translate-y-1/2 group-focus-within:top-6 group-focus-within:text-[14px]'
                    : 'top-6 -translate-y-1/2 text-[14px]'
                }`}
              >
                Password
              </span>
              <input
                type="password"
                value={password}
                onChange={updatePassword}
                placeholder="••••••••••••••••••••"
                className="mt-6 h-8 w-full rounded-lg bg-transparent p-6 pl-4 text-xl tracking-widest placeholder:text-transparent focus:outline-none focus:placeholder:text-neutral-500"
              />
            </div>
          </div>
          <button
            disabled={email.length === 0 || password.length === 0}
            className="mt-8 rounded-lg bg-teal-500 p-6 font-semibold uppercase tracking-widest transition-all hover:bg-teal-600 disabled:cursor-not-allowed disabled:bg-teal-900 disabled:text-neutral-400"
          >
            Sign In
          </button>
        </form>
      </section>
      <section className="relative flex h-full w-1/2">
        <img src="/login.jpg" alt="Login" className="h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-teal-600/30" />
        <div className="absolute inset-0 bg-neutral-900/50" />
        <p className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col text-center text-5xl font-semibold tracking-wide text-neutral-50">
          <span className="mb-2 text-2xl text-teal-400">
            One day, You&apos;ll leave this world behind
          </span>
          So live a life you remember
        </p>
      </section>
    </>
  )
}

export default Auth
