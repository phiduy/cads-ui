import React from 'react';
import * as ReactDOM from 'react-dom';
import { MButtonGroup } from '../src/@material-extend';

describe('MButtonGroup', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MButtonGroup />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
