import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/HtmlLayout'

const Blob = dynamic(() => import('@/components/canvas/Blob'), { ssr: false })

export default function Page(props) {
  return <></>
}

Page.canvas = (props) => <Blob route='/' position-y={-0.75} />

export async function getStaticProps() {
  return { props: { title: 'Blob' } }
}
