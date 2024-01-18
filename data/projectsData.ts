interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'HyperSaaS',
    description: `HyperSaaS is a boilerplate for building SaaS applications. It is built on top of Django and React. It is a great starting point for building your own SaaS product.`,
    imgSrc: '/static/images/hyper-saas.png',
    href: 'https://www.hypersaas.dev/',
  },
  {
    title: 'ProtonStack',
    description: `ProtonStack is a Saas boilerplate built on top of Next.js, Prisma, and Clerk.dev.`,
    imgSrc: '/static/images/protonstack.png',
    href: 'https://www.protonstack.dev/',
  },
]

export default projectsData
