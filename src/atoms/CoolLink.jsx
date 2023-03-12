import { Link } from 'react-router-dom'
const Internal = ({ text }) => (
    <>
        {' '}
        <span className="border"></span>
        <span className="label">{text}</span>
        <span className="label-hover">
            <span className="inner">{text}</span>
        </span>
    </>
)
export const CoolLink = ({ routerLink, link, element, text, target }) => {
    return (
        <>
            {' '}
            {routerLink ? (
                <Link to={link} element={element} className="link">
                    <Internal text={text} />
                </Link>
            ) : (
                <a href={link} className="link" target={target}>
                    <Internal text={text} />
                </a>
            )}
        </>
    )
}
