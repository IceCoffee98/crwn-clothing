import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles.jsx';

/*
default

inverted

google sign in
=> create a variables to diffierenciate them
*/

export const BUTTON_TYPE_CLASSES = {
  base: 0,
  google: 1,
  inverted: 2,
};

const getSelectedButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const SelectedButton = getSelectedButton(buttonType);
  return <SelectedButton {...otherProps}>{children}</SelectedButton>;
};

export default Button;