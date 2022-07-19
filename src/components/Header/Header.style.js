import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    align-items: center;
    background-color: ${theme.colors.secondary.dark};
    color: ${theme.colors.white.primary};
    display: flex;
    justify-content: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px;
  `}
`;

export const Title = styled.h1`
  font-size: 32px;
`;

export const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: none;
  font-size: 16px;
  margin: 0px;
  padding: 0px;

  @media(max-width: 922px) {
    display: block;
  }
`;

export const Menu = styled.div`
  display: flex;

  @media(max-width: 922px) {
    display: none;
  }
`;

export const SideMenu = styled.div`
  ${({ showSideMenu }) => css`
  background-color: white;
  border-right: solid #d0d7de 1px;
  bottom: 0px;
  color: black;
  left: 0px;
  position: absolute;
  right: 70%;
  top: 58px;
  transform: translateX(-300%);
  transition: transform 400ms ease-in-out;

  ${showSideMenu && css`
    transform: translateX(0%);
  `}

  `}
`;
