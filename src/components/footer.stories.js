import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from './footer';

storiesOf('Footer', module)
  .add('default', () => <Footer />)
  .add('foo1', () => <Footer />);
