import React from 'react';
import { GlitchedImage } from '../src';

export default {
  title: 'Components/Slices',
  component: GlitchedImage,
}

export const Primary = () => (
  <div style={{ height: 500, width: 500 }}>
    <GlitchedImage image="https://st3.depositphotos.com/12674628/15275/i/600/depositphotos_152758804-stock-photo-red-rose-with-water-drops.jpg" />
  </div>
)