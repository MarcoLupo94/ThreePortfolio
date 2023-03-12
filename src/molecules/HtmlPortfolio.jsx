import { CoolLink } from '../atoms/CoolLink'
import { contacts, experiences, projects, skillsList } from '../atoms/Informations'
export const HtmlPortfolio = () => {
    return (
        <>
            <main className="html-portfolio">
                <section className="section-intro">
                    <h1>MARCO LUPO</h1>
                    <h2>SOFTWARE ENGINEER</h2>
                    <ul className="list-1">
                        {skillsList.map(skill => (
                            <li key={skill.id}>
                                <CoolLink
                                    target="_blank"
                                    routerLink={false}
                                    link={skill.url}
                                    text={skill.name}
                                />
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="section-contact">
                    <h1>CONTACT</h1>
                    <ul className="list-1">
                        {contacts.map(contact => (
                            <li key={contact.id}>
                                <CoolLink
                                    target="_blank"
                                    routerLink={false}
                                    link={contact.url}
                                    text={contact.name}
                                />
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="section-experience">
                    <h1>EXPERIENCE</h1>
                    <ul className="list-2">
                        {experiences.map(experience => (
                            <li key={experience.id}>
                                <h3>
                                    {experience.role}
                                    <span> {experience.separator} </span>
                                    {experience.name}
                                </h3>
                                <div>
                                    <span className="period">{experience.start}</span>
                                    <span> {'>'} </span>
                                    <span className="period">{experience.end}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="section-projects">
                    <h1>PROJECTS</h1>
                    <ul>
                        {projects.map(project => (
                            <li key={project.id}>
                                <CoolLink
                                    target="_blank"
                                    routerLink={false}
                                    link={project.url}
                                    text={project.name}
                                />
                                <p style={{ fontSize: '0.4rem' }}>{project.description}</p>
                                <ul className="list-1">
                                    {project.technologies.map(skill => (
                                        <li key={skill.id}>
                                            <a target="_blank" href={skill.url}>
                                                {skill.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    )
}
