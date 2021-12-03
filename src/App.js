import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

const LoginView = lazy(() => import('./views/LoginView'));
const HomeView = lazy(() => import('./views/HomeView'));

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={''}>
            {!isLoggedIn ? <LoginView /> : <Navigate to="/" />}
          </Suspense>
        }
      />

      <Route
        exact
        path="/"
        element={
          <Suspense fallback={''}>
            {isLoggedIn ? <HomeView /> : <Navigate to="/login" />}
          </Suspense>
        }
      />
    </Routes>
  );
}
