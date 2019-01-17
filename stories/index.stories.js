import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { BottomNav, Header, PageLoader, PageNotFound } from '../src/components';

storiesOf('App components', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('header', () => <Header />)
  .add('footer', () => <BottomNav />)
  .add('404 page', () => <PageNotFound />)
  .add('Page loader', () => <PageLoader />);
