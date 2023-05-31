import { useEffect, useState } from 'react'

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({width: window.innerWidth, height: window.innerHeight});
  const [isScreenSmall, setIsScreenSmall] =useState(window.innerWidth < 821 ? true : false)
  function detectSize() {
    setScreenSize({
      width:window.innerHeight,
      height: window.innerHeight
    })
    setIsScreenSmall(window.innerWidth < 821 ? true : false)
  }
  

  useEffect(()=> {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [screenSize])
  return [screenSize, isScreenSmall]
}
