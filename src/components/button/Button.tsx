import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...otherProps } = props;
  return <button {...otherProps}>{children}</button>;
};

export default Button;
