import React from 'react';
import { action } from '@storybook/addon-actions';
import VehicleCard from '../components/vehicle-card';

export default {
  title: 'Vehicle Card',
  component: VehicleCard,
};

export const defaultView = () => <VehicleCard year={2020} make="Ford" model="F-150" imageUrl="http://ux-dev.awadserver.com/abtl-mygarage/app/images/ford-f150.png" close={action('close')} />