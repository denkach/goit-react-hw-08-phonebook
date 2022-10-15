import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import {
  Link,
  Item,
  UserEmail,
  UserMenu,
  UserMenuButton,
  Nav,
} from './AppBar.styled';
import { BiExit } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import authSelectors from 'redux/auth/auth-selectors';

export const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const email = useSelector(authSelectors.getEmail);

  return (
    <div>
      {!isLoggedIn ? (
        <Nav>
          <Item>
            <Link to="/register">Register</Link>
          </Item>
          <Item>
            <Link to="/login">Login</Link>
          </Item>
        </Nav>
      ) : (
        <UserMenu>
          <UserEmail>{email}</UserEmail>
          <UserMenuButton
            type="button"
            onClick={() => dispatch(authOperations.logOut())}
          >
            <IconContext.Provider value={{ size: 24 }}>
              <BiExit />
            </IconContext.Provider>
          </UserMenuButton>
        </UserMenu>
      )}
    </div>
  );
};
