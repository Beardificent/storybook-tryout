import React from 'react';
import Button from './Button';
import Center from '../Center/Center';

export default {
    title: 'Form/Button',
    component: Button,
}
//center comes from Center.js and Center.css.
export const Primary = () => <Center><Button variant="primary">Primary</Button></Center>
export const Secondary = () => <Center><Button variant="secondary">Secondary</Button></Center>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>
