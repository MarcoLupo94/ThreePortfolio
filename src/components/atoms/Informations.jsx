import { v4 } from 'uuid'

export const contacts = [
  { id: v4(), name: 'Github', url: 'https://github.com/MarcoLupo94' },
  { id: v4(), name: 'Linkedin', url: 'https://www.linkedin.com/in/marcolupo94/' },
  { id: v4(), name: 'lupo.marco94@gmail.com', url: 'mailto:lupo.marco94@gmail.com', mail: true },
]
export const experiences = [
  {
    id: v4(),
    name: 'MissionLabs',
    role: 'Software Engineer',
    separator: 'at',
    start: '2023',
    end: 'Present',
  },
  {
    id: v4(),
    name: 'Codeworks',
    role: 'Software Engineering',
    separator: 'at',
    start: '2022',
    end: '2023',
  },
  {
    id: v4(),
    name: 'TheOdinProject',
    role: 'FullStack Development',
    separator: 'at',
    start: '2021',
    end: '2022',
  },
]
export const projects = [
  {
    id: v4(),
    name: 'Topfolio',
    description:
      'A web application for professionals to easily create and showcase their work on a visually appealing, mobile-friendly portfolio page.',
    url: 'https://topfolio.herokuapp.com/',
    technologies: [
      { id: v4(), name: 'ReactJs', url: 'https://reactjs.org/' },
      { id: v4(), name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      { id: v4(), name: 'ExpressJs', url: 'https://expressjs.com/' },
      {
        id: v4(),
        name: 'MongoDB',
        url: 'https://www.mongodb.com/cloud/atlas/lp/try4?utm_content=controlhterms&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_emea-gb_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624581&adgroup=115749705343&cq_cmp=12212624581&gclid=Cj0KCQiAjbagBhD3ARIsANRrqEs2JwvNHX3oq16oyG2qUXY4jIrV4aKEJtiytcEdr-V66u4XliltfPEaAhMlEALw_wcB',
      },
    ],
  },
  {
    id: v4(),
    name: 'Goods4Good',
    description:
      'A web application that helps people find and donate to charitable causes, designed to be accessible and easy to use on any device',
    url: 'https://github.com/MarcoLupo94/Goods4Good/',
    technologies: [
      { id: v4(), name: 'Angular', url: 'https://angular.io/' },
      { id: v4(), name: 'NestJs', url: 'https://nestjs.com/' },
      { id: v4(), name: 'NodeJs', url: 'https://nodejs.org/en/' },
      { id: v4(), name: 'AWS S3', url: 'https://aws.amazon.com/s3/?nc=sn&loc=0' },
      { id: v4(), name: 'Stripe', url: 'https://stripe.com/docs' },
    ],
  },
]
export const skillsList = projects.reduce((accumulator, currentProject) => {
  return (accumulator = [...accumulator, ...currentProject.technologies])
}, [])
