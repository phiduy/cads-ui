import { ThemeOptions } from '@material-ui/core/styles';
import { merge } from 'lodash';
import Buttons from './Buttons';

// ----------------------------------------------------------------------

const ComponentsOverrides = ({ theme }: { theme: ThemeOptions }) => {
  return merge(Buttons({ theme }));
};

export default ComponentsOverrides;
