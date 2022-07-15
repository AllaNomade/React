import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ErrorPage,
  LobbyPage,
  HomePage,
  LoginPage,
  RegisterPage,
  UsersPage,
  ProfilePage,
} from '../../pages';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/profile/:userId" element={<ProfilePage />} />
      <Route path="/lobby" element={<LobbyPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
