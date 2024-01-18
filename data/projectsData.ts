interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'HyperSaaS',
    description: `Django, Django Rest Framework ve Next.js ile hazırlanmış bir SaaS boilerplate.`,
    imgSrc: '/static/images/hyper-saas.png',
    href: 'https://www.hypersaas.dev/',
  },
  {
    title: 'ProtonStack',
    description: ` TypeScript, Tailwind CSS, Clerk.dev, Prisma ile Next.js için hazırlanmış bir
                boilerplate.`,
    imgSrc: '/static/images/protonstack.png',
    href: 'https://www.protonstack.dev/',
  },
]

export default projectsData
