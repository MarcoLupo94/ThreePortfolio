import Link from 'next/link'
const Internal = ({ text }) => (
  <>
    <span className='border'></span>
    <span className='label'>{text}</span>
    <span className='label-hover'>
      <span className='inner'>{text}</span>
    </span>
  </>
)
export const CoolLink = (props) => {
  const { routerLink, link, element, text, target, zoomIn } = props
  return (
    <>
      {routerLink ? (
        <Link to={link} element={element} className='link'>
          <Internal text={text} />
        </Link>
      ) : (
        <a href={link} className='link border-2' target={target} onClick={zoomIn}>
          <Internal text={text} />
        </a>
      )}
    </>
  )
}
