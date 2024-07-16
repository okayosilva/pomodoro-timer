import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer, ButtonVariant } from './button.styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...props}>
      Click me
    </ButtonContainer>
  )
}
