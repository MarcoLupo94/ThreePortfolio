import { CoolLink } from '../atoms/CoolLink'
import { contacts } from '../atoms/Informations'
import { useContext } from 'react'
import { ScrollContext } from '@/templates/hooks/context'
export default function HtmlLayout({ children }) {
  const { scroll } = useContext(ScrollContext)
  return (
    <main className='scene-html ml-20 flex w-40  flex-col'>
      <section className='flex h-screen flex-col items-start justify-center gap-1 '>
        <h1 className='m-0 text-xl  '>HI THERE!</h1>
        <p className='text-xs'>MY NAME IS MARCO LUPO AND I'M A SOFTWARE ENGINEER</p>
      </section>
      <section className='flex h-screen flex-col items-start justify-center gap-1 '>
        <h1 className='m-0 text-xl'>CONTACT ME</h1>
        <ul className='list-1'>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <CoolLink target='_blank' routerLink={false} link={contact.url} text={contact.name} />
            </li>
          ))}
        </ul>
      </section>
      <section className='flex h-screen flex-col items-start justify-center gap-1 '>
        <h1 className='m-0 text-xl'>EXPERIENCE</h1>
      </section>
      <section className='flex h-screen flex-col items-start justify-center gap-1 '></section>
    </main>
  )
}
