import { LaptopSection } from '@/components/molecules/LaptopSection'
import { PhoneSection } from '@/components/molecules/PhoneSection'
import { useMemo, useRef, useContext } from 'react'

import { useThree } from '@react-three/fiber'
import { IntroSection } from '../molecules/IntroSection'
import { ScrollContext } from '@/templates/hooks/context'

export default function MainScene({ route, ...props }) {
  const mesh = useRef(null)
  const { viewport } = useThree()
  const isPhoneScreen = useMemo(() => viewport.width < 4.8, [viewport])
  const { scroll } = useContext(ScrollContext)
  return (
    <group ref={mesh} {...props}>
      <IntroSection />
      {!isPhoneScreen ? <LaptopSection viewport={viewport} isPhoneScreen={isPhoneScreen} /> : <PhoneSection />}
    </group>
  )
}
