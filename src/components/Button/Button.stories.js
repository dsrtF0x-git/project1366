import React from 'react';
import TButton from './Button';

const buttonStory = {
  title: 'TButton',
  component: TButton,
};

export const Primary = () => <TButton color='primary'>Primary</TButton>;
export const Secondary = () => <TButton color='secondary'>Secondary</TButton>;
export const Disabled = () => (
  <TButton color='disabled' disabled>
    Disabled
  </TButton>
);
export const Link = () => (
  <TButton color='primary' href='#contained-buttons'>
    Link
  </TButton>
);
export const Default = () => <TButton color='default'>Default</TButton>;

export default buttonStory;
