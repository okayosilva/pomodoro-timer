import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariantColors = {
  primary: 'blue',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};

  border: none;
  border-radius: 4px;
  margin: 8px;

  /* ${({ variant }) => css`
    background-color: ${buttonVariantColors[variant]};
  `}; */
`
