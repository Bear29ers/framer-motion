import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import './scss/styles.scss';

export const App: FC = memo(() => {
  return (
    <>
      <h1>App Component</h1>
      <Link to='/expandable-card'>Expandable Card</Link>
    </>
  );
});
