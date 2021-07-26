import { capitalize } from 'lodash';

// ----------------------------------------------------------------------

function getFirstCharacter(name: string) {
  return capitalize(name && name.charAt(0));
}

function getAvatarColor(name: string) {
  if (['A', 'N', 'H', 'L', 'Q', '9', '8'].includes(getFirstCharacter(name)))
    return 'primary';
  if (
    ['F', 'G', 'T', 'I', 'J', '1', '2', '3'].includes(getFirstCharacter(name))
  )
    return 'info';
  if (['K', 'D', 'Y', 'B', 'O', '4', '5'].includes(getFirstCharacter(name)))
    return 'success';
  if (
    ['P', 'E', 'R', 'S', 'C', 'U', '6', '7'].includes(getFirstCharacter(name))
  )
    return 'warning';
  if (['V', 'W', 'X', 'M', 'Z'].includes(getFirstCharacter(name)))
    return 'error';
  return;
}

export default function createAvatar(name: string) {
  return {
    name: getFirstCharacter(name),
    color: getAvatarColor(name),
  };
}
