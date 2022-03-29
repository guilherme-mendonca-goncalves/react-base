import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ErrorPage,
  LobbyPage,
  UsersPage,
  ProfilePage,
} from '../../pages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/lobby" element={<LobbyPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/profile/:userID" element={<ProfilePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
