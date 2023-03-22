import { CoolLink } from '../atoms/CoolLink'
import { contacts } from '../atoms/Informations'
import { useContext } from 'react'
import { ScrollContext } from '@/templates/hooks/context'
export default function HtmlLayout({ children }) {
  const { scroll, overlay, caption } = useContext(ScrollContext)
  const handleScroll = (e) => {
    scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
    caption.current.innerText = scroll.current.toFixed(2)
  }
  return (
    <main ref={overlay} onScroll={handleScroll} className='scroll scene-html ml-20  w-40 '>
      <section className=' h-screen' style={{ height: '200vh' }}>
        <div className='dot'>
          <h1 className='m-0 text-xl  '>HI THERE!</h1>
          <p className='text-xs'>MY NAME IS MARCO LUPO AND I'M A SOFTWARE ENGINEER</p>
        </div>
      </section>
      <section className=' h-screen  ' style={{ height: '200vh' }}>
        <div className='dot'>
          <h1 className='m-0 text-xl'>CONTACT ME</h1>
          <ul className='list-1'>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <CoolLink target='_blank' routerLink={false} link={contact.url} text={contact.name} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className=' h-screen  ' style={{ height: '200vh' }}>
        <div className='dot'>
          <h1 className='m-0 text-xl'>EXPERIENCE</h1>
        </div>
      </section>
      <section className=' h-screen' style={{ height: '200vh' }}>
        <div className='dot'>
          <h1 className='m-0 text-xl'>PROJECTS</h1>
        </div>
      </section>
      <span ref={caption} class='caption'>
        {scroll.current}
      </span>
    </main>
  )
}
