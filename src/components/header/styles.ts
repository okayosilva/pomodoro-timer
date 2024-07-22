import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  nav a {
    height: 3rem;
    width: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme['gray-100']};

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    transition: all 0.1s ease-in;

    &:hover {
      border-bottom-color: ${({ theme }) => theme['green-500']};
    }

    &.active {
      color: ${({ theme }) => theme['green-500']};
    }
  }
`
