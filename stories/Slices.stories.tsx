import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Slices } from '../src';

export default {
  title: 'Components/Slices',
  component: Slices,
}

export const Primary = () => (
  <div style={{ height: 500, width: 500 }}>
    <Slices image="https://st3.depositphotos.com/12674628/15275/i/600/depositphotos_152758804-stock-photo-red-rose-with-water-drops.jpg" />
  </div>
)