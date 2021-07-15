import React from 'react';
import * as ReactDOM from 'react-dom';
import { MButton } from '../src/@material-extend';

describe('MButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
