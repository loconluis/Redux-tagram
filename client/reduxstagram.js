import React from 'react';

import { render } from 'react-dom';

import Main from './components/Main';
// import css
import css from './styles/style.styl';

render(<Main><p>Hello</p></Main>, document.getElementById('root'));