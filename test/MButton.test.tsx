import React from 'react';
import * as ReactDOM from 'react-dom';
import { MButton } from '../src/@material-extend';
import { ThemeProvider } from '../src/theme';

describe('MButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const App = () => (
      <ThemeProvider>
        <MButton />
      </ThemeProvider>
    );

    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
