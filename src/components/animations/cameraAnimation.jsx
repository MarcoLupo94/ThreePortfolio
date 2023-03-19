import gsap from 'gsap'

export const zoomOnLaptop = (camera) => {
  gsap.to(camera.position, {
    x: '+=2.8',
    z: '-=2.5',
  })
  gsap.to(camera.rotation, {
    y: '+=0.6',
    z: '+=0.22',
  })
}
export const zoomOffLaptop = (camera) => {
  gsap.to(camera.position, {
    x: '-=2.8',
    z: '+=2.5',
  })
  gsap.to(camera.rotation, {
    y: '-=0.6',
    z: '-=0.22',
  })
}
