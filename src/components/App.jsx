import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

import { AppBar } from 'components/AppBar/AppBar';
import { authOperations } from 'redux/auth/auth-operations';
import { ContactsPage } from 'pages/ContactsPage';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Box padding="24px" backgroundColor="#b9b2ec" height="100vh">
      <Box
        padding="24px"
        border="2px solid #4e2ecf"
        borderRadius="8px"
        color="#fff"
        backgroundColor="#1d1d42"
      >
        <AppBar />
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<RegisterPage />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Box>
      <GlobalStyle />
    </Box>
  );
};
