import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserEmail = styled.span`
  margin-right: 8px;
  font-size: 24px;
`;

export const UserMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const UserMenuButton = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;

  transition: color 250ms linear;

  :hover {
    color: #f96670;
  }
`;

export const Link = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  transition: color 250ms linear;

  &:hover {
    color: #b9b2ec;
  }
`;

export const Item = styled.li`
  list-style: none;
`;

export const Nav = styled.ul`
  display: flex;
  gap: 12px;
`;
