import React, { useState, useEffect, useRef } from 'react'
import { createSlices, getRandomNumberBetween, getRatioImageSize } from '../helpers'
import { useObserver } from '../hooks'
import { heightOffsetType } from '../Typings'
import { Slice } from './Slice'

export const GlitchedImage: React.FC<{ image: string}> = ({ image }) => {
  const slicesRef = useRef<HTMLDivElement>(null)
  const [containerDims, setContainerDims] = useState({ width: 0, height: 0 })
  const [imageDims, setImageDims] = useState({ width: 0, height: 0 })
  const [heightOffsets, setHeightOffsets] = useState<heightOffsetType[]>([])
  const [isGlitching, setIsGlitching] = useState(false)
  const runInObserver = () => {
    setContainerDims({
      width: slicesRef.current?.clientWidth || 0,
      height: slicesRef.current?.clientHeight || 0,
    })
  }
  useObserver(runInObserver, slicesRef)


  // get image width and height
  useEffect(() => {
    const myImage = new Image()
    myImage.onload = () => {
      setImageDims(
        getRatioImageSize(
          containerDims,
          { height: myImage.height, width: myImage.width },
        ),
      )
    }
    myImage.src = image

  }, [image, containerDims])

  // trigger glitching with random intervals
  useEffect(() => {
    const lowRandom = getRandomNumberBetween(100, 600)
    const highRandom = getRandomNumberBetween(1000, 3000)
    const timer = isGlitching ? lowRandom : highRandom
    const interval = setInterval(() => {
      setIsGlitching((prevGlitching) => !prevGlitching)
    }, timer)
    return () => clearInterval(interval)
  }, [isGlitching])

  // create heightOffsets array with container height
  useEffect(() => {
    setHeightOffsets(createSlices(containerDims.height))
  }, [containerDims.height, containerDims.width])
  return (
    <div style={{ height: '100%', width: '100%' }} ref={slicesRef}>
      {heightOffsets.map((heightOffset, i) => (
        <div
          key={i}
          style={{
            position: 'relative',
            height: heightOffset.height,
            overflow: 'hidden',
          }}
        >
          <Slice
            isGlitching={isGlitching}
            top={heightOffset.offset}
            imageHeight={imageDims.height}
            image={image}
          />
        </div>
      ))}
    </div>
  )
}
