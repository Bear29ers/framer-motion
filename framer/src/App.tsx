import React, { FC, memo } from 'react';

import { Top } from './components/Top';

import './scss/styles.scss';

export const App: FC = memo(() => {
  return <Top />;
});
