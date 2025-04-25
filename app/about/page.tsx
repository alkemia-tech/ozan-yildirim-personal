import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({ title: 'About' })

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}
export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <div>
        {/* <MDXLayoutRenderer code={author.body.code} /> */}

        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src="/static/images/avatar.jpeg"
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                width={512}
                height={512}
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              I’m Ozan Yildirim, Software Engineer based in London.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hello and welcome! I'm Ozan Yildirim, a dedicated Full Stack Developer and Machine
                Learning enthusiast. My academic journey in Mathematics and Computer Science has
                laid a solid foundation for my career, equipping me with analytical skills and a
                strategic approach to problem-solving.
              </p>
              <p>
                My professional path is marked by a keen interest in both software development and
                data science. I've embraced roles that blend these domains, from Full Stack Software
                Development to Data Science Developer. This experience has sharpened my expertise in
                languages like Python and JavaScript, and in frameworks such as Django and
                React/Next.js, while deepening my appreciation for the transformative role of
                technology in both business and social contexts.
              </p>
              <p>
                Beyond coding, I am fascinated by the intersection of technology and economics and
                how it shapes our global landscape. My goal is to contribute meaningful,
                technologically advanced solutions that are economically sound and socially
                beneficial.
              </p>
              <p>
                I invite you to join me in exploring the dynamic and ever-evolving world of
                technology. Whether you're a tech enthusiast, a potential collaborator, or simply
                curious about software and data, I hope to inspire and engage you on this platform!
              </p>
              <Link href="/projects">
                <p className="py-4 text-sm leading-6 font-semibold text-indigo-600 hover:text-indigo-500">
                  Check what I am working on currently →{' '}
                </p>
              </Link>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul>
              <SocialLink href={siteMetadata.twitter as string} icon={XIcon}>
                Follow on X
              </SocialLink>
              <SocialLink href={siteMetadata.instagram} icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href={siteMetadata.github} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href={siteMetadata.linkedin as string}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                {siteMetadata.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
