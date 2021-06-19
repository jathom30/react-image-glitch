import React, { useState, useEffect } from 'react'
import { getRandomNumberBetween } from '../helpers'

export const Slice: React.FC<{
  isGlitching: boolean,
  top: number,
  imageHeight: number,
  image: string,
}> = ({ isGlitching, top, imageHeight, image }) => {
  const [translateX, setTranslateX] = useState(0)
  const [hue, setHue] = useState(0)
  const [negativeTranslate, setNegativeTranslate] = useState(false)

  const glitch = () => {
    setNegativeTranslate(getRandomNumberBetween(0, 2) !== 0)
    setTranslateX(getRandomNumberBetween(1, 25))
    setHue((getRandomNumberBetween(0, 360)))
  }

  const returnToNormal = () => {
    setTranslateX(0)
    setHue(0)
  }

  useEffect(() => {
    const randomInterval = getRandomNumberBetween(1, 1000)
    const interval = setInterval(() => {
      isGlitching ? glitch() : returnToNormal()
    }, randomInterval)
    return () => clearInterval(interval)
  })

  return (
    <div
      className="Slice"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: imageHeight,
        transform: `translateY(-${top}px) translateX(${negativeTranslate ? '-' : ''}${translateX}px)`,
        filter: `hue-rotate(${hue}deg)`,
      }}
    />
  )
}
