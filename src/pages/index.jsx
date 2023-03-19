import MainScene from '@/components/canvas/MainScene'
import Instructions from '@/components/dom/Instructions'
import dynamic from 'next/dynamic'
import Scroll from '@/templates/Scroll'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

// Dom components go here
export default function Page(props) {
  return <Scroll></Scroll>
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
Page.canvas = (props) => <MainScene route='/blob' />

export async function getStaticProps() {
  return { props: { title: 'MARCO LUPO' } }
}
