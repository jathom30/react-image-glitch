# Glitching image effect

A basic React component for a glitching image effect.

---

GlitchedImage takes a single image prop (`string`) and must be in a container with a set height or flex grow.

## To use:

```tsx
import { GlitchedImage } from 'react-image-glitch'
import { image } from './myImage.jpg'

const MyComponent = () => {
  const myImageString = 'www.example.com/image'
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ height: 500 }}>
        <GlitchedImage image={myImageString} />
      </div>
      <div style={{ flexGrow: 1 }}>
        <GlitchedImage image={image} />
      </div>
    </div>
  )
}
```
