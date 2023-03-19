import { CoolLink } from '../components/atoms/CoolLink'
import { contacts, experiences, projects } from '../components/atoms/Informations'

export default function html() {
  return (
    <>
      <span className='background back-1'></span>
      <span className='background back-2'></span>
      <div className='v'>
        <CoolLink text='3D VERSION' link='/' />
      </div>
      <main className='html-portfolio'>
        <section className='section-intro'>
          <div className='aligner'>
            <h1>MARCO LUPO</h1>
            <h2>SOFTWARE ENGINEER</h2>
            <p>Creative developer living in Manchester,Uk. Passionate about WebGl and WebXr.</p>
          </div>
        </section>
        <section className='section-contact'>
          <div className='aligner'>
            <h1>CONTACT</h1>
            <ul className='list-1'>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <CoolLink target='_blank' routerLink={false} link={contact.url} text={contact.name} />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className='section-experience'>
          <div className='aligner'>
            <h1>EXPERIENCE</h1>
            <ul className='list-2'>
              {experiences.map((experience) => (
                <li key={experience.id}>
                  <h3>
                    {experience.role}
                    <span> {experience.separator} </span>
                    {experience.name}
                  </h3>
                  <div>
                    <span className='period'>{experience.start}</span>
                    <span style={{ fontWeight: 700 }}> {'>'} </span>
                    <span className='period'>{experience.end}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className='section-projects'>
          <div className='aligner'>
            <h1>PROJECTS</h1>
            <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <CoolLink target='_blank' routerLink={false} link={project.url} text={project.name} />
                  <p style={{ fontSize: '0.4rem', width: '70%' }}>{project.description}</p>
                  <ul className='list-4'>
                    {project.technologies.map((skill) => (
                      <li key={skill.id}>
                        <a target='_blank' href={skill.url}>
                          {skill.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
