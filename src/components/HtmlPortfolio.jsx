import { contacts, experiences, projects, skillsList } from './Informations'
export const HtmlPortfolio = () => {
    return (
        <>
            <span className="background back-1"></span>
            <span className="background back-2"></span>
            <main className="html-portfolio">
                <section className="section-intro">
                    <h1>Marco Lupo</h1>
                    <h2>Software Engineer</h2>
                    <ul>
                        {skillsList.map(skill => (
                            <li key={skill.id}>
                                <a target="_blank" href={skill.url}>
                                    <b>{skill.name}</b>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="section-contact">
                    <h1>Contact</h1>
                    <ul>
                        {contacts.map(contact => (
                            <li key={contact.id}>
                                <a
                                    target="_blank"
                                    href={contact.url}
                                    className={contact.mail ? 'email' : 'social'}
                                >
                                    {contact.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="section-experience">
                    <h1>Experience</h1>
                    <ul>
                        {experiences.map(experience => (
                            <li key={experience.id}>
                                <h3>
                                    {experience.role}
                                    <span> {experience.separator} </span>
                                    {experience.name}
                                </h3>
                                <div className="period">
                                    <span> {experience.start}</span>
                                    <span> {'>'}</span>
                                    <span> {experience.end}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="section-projects">
                    <h1>Projects</h1>
                    <ul>
                        {projects.map(project => (
                            <li key={project.id}>
                                <a target="_blank" href={project.link}>
                                    <span>{project.name}</span>
                                </a>
                                <p>{project.description}</p>
                                <ul>
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
