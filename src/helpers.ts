import { DimensionsType, heightOffsetType } from "./types"

export const getRandomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * max) + min
}

export const createSlices = (height: number) => {
  let heightOffsets: heightOffsetType[] = []
  for (let i = 0; i < height;) {
    const randomHeight = getRandomNumberBetween(3, 20)
    const newHeightOffset = { height: randomHeight, offset: i }
    heightOffsets.push(newHeightOffset)
    i += randomHeight
  }
  const trimmedHeightOffsets = heightOffsets.slice(0, -1)
  const [lastSet] = trimmedHeightOffsets.slice(-1)
  const lastHeightOffset = {
    height: height - (lastSet?.offset + lastSet?.height),
    offset: lastSet?.offset + lastSet?.height,
  }
  if (!lastSet) return []
  return [...trimmedHeightOffsets, lastHeightOffset]
}

export const getRatio = (imageDims: DimensionsType) => {
  return imageDims.width / imageDims.height
}

export const getRatioImageSize = (
  containerDims: DimensionsType,
  imageDims: DimensionsType,
) => {
  const imageRatio = getRatio(imageDims)
  return {
    height: containerDims.height,
    width: containerDims.height * imageRatio,
  }
}
