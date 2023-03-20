import { CoolLink } from '../atoms/CoolLink'
export default function HtmlLayout({ children }) {
  return (
    <main className='scene-html flex flex-col'>
      <section className='flex h-screen flex-col items-start justify-center gap-1 '>
        <h1 className='m-0 text-xl  '>HI THERE!</h1>
        <p className='text-xs'>MY NAME IS MARCO LUPO AND I'M A SOFTWARE ENGINEER</p>
        <CoolLink className='m-1' text={'HTML Version'} link='html' />
      </section>
      <section className='h-screen '>
        <h1>CONTACT ME</h1>
      </section>
      <section className='h-screen '>
        <h1>EXPERIENCE</h1>
      </section>
      <section className='h-screen '>
        <h1>PROJECTS</h1>
      </section>
    </main>
  )
}
