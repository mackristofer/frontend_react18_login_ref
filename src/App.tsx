import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Admin from './routes/Admin';
import AdminHome from './routes/Admin/AdminHome';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { history } from './utils/history';
import { PrivateRoute } from './components/PrivateRoute';
import { AccessTokenPayloadDTO } from './models/auth';
import { ContextToken } from './utils/context-token';
import * as authService from './services/auth-service';
import Public from './routes/Public';
import PublicHome from './routes/Public/PublicHome';
import Login from './routes/Public/Login';
import Course from './routes/Course';
import CourseDescription from './routes/Course/CourseDescription';

export default function App() {

  const [contextTokenPayload, setContextTokenPayload] = useState<AccessTokenPayloadDTO>();

  useEffect(() => {
    if (authService.isAuthenticated()) {
      const payload = authService.getAccessTokenPayload();
      setContextTokenPayload(payload);
    }
  }, []);

  return (
    <ContextToken.Provider value={{ contextTokenPayload, setContextTokenPayload }}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<Public />}>
            <Route index element={<PublicHome />} />
            <Route path="catalog" element={<PublicHome />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/admin/" element={<PrivateRoute roles={['ROLE_ADMIN']}><Admin /></PrivateRoute>}>
            <Route index element={<Navigate to="/admin/home" />} />
            <Route path="home" element={<AdminHome />} />
          </Route>
          <Route path="/course/" element={<PrivateRoute roles={['ROLE_ADMIN']}><Course /></PrivateRoute>}>
            <Route index element={<Navigate to="/course/catalog" />} />
            <Route path="catalog" element={<></>} />
            <Route path=":courseId" element={<CourseDescription />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HistoryRouter>
    </ContextToken.Provider>
  );
}
