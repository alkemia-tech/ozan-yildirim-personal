import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'

import { CheckCircleIcon } from '@heroicons/react/20/solid'
import siteMetadata from '@/data/siteMetadata'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function AvatarContainer({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
      )}
      {...props}
    />
  )
}

function Avatar({
  large = false,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> & {
  large?: boolean
}) {
  return (
    <Link href="/" aria-label="Home" className={clsx(className, 'pointer-events-auto')} {...props}>
      <Image
        src="/static/images/avatar.jpeg"
        alt=""
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9'
        )}
        priority
        width={large ? 64 : 36}
        height={large ? 64 : 36}
      />
    </Link>
  )
}

export default function Introduction() {
  return (
    <div className="py-4">
      <div
        className="top-[var(--avatar-top,theme(spacing.3))] w-full"
        style={{
          position: 'var(--header-inner-position)' as React.CSSProperties['position'],
        }}
      >
        <div className="relative">
          <AvatarContainer
            className="absolute left-0 top-3 origin-left transition-opacity"
            style={{
              opacity: 'var(--avatar-border-opacity, 0)',
              transform: 'var(--avatar-border-transform)',
            }}
          />
          <Avatar
            large
            className="block h-16 w-16 origin-left"
            style={{ transform: 'var(--avatar-image-transform)' }}
          />
        </div>
      </div>
      <div className="max-w-3xl py-4 text-base leading-7 text-gray-700">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hey! This is Ozan. 👋
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I am a software developer and founder based in London.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={siteMetadata.twitter as string}
              aria-label="Follow on X"
              icon={XIcon}
            />
            <SocialLink
              href={siteMetadata.instagram}
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href={siteMetadata.github}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={siteMetadata.linkedin || ''}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
        <div className="mt-5 max-w-2xl dark:text-gray-400">
          <p className="dark:text-gray-400">I am currently working on: </p>
          <ul className="mt-8 max-w-xl space-y-8 text-gray-600 dark:text-gray-400">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <Link href="https://www.hypersaas.dev/">
                  <strong className="font-semibold text-gray-900 dark:text-gray-400">
                    HyperSaas.
                  </strong>{' '}
                </Link>
                A SaaS starter with Django, Django Rest Framework and Next.js.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <Link href="https://www.protonstack.dev/">
                  <strong className="font-semibold text-gray-900 dark:text-gray-400">
                    ProtonStack.
                  </strong>{' '}
                </Link>
                Next.js boilerplae with TypeScript, Tailwind CSS, Clerk.dev, Prisma.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                <Link href="https://github.com/tyrozz/next-js-boilerplate">
                  <strong className="font-semibold text-gray-900 dark:text-gray-400">
                    next-js-boilerplate.
                  </strong>{' '}
                </Link>
                A streamlined and feature-rich open source boilerplate for Next.js.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
