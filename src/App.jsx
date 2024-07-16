import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { AdminRoutes } from './routes/AdminRoute';
import { UserRoutes } from './routes/UserRoute';

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        {/* admin routes */}
        {AdminRoutes.map((route, index) => {
          const Page = route.component;

          let Layout = route.AdminLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route key={index} path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}

        {/* user routes */}
        { UserRoutes.map((route, index) => {
          const Page = route.component;

          let Layout = route.AdminLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route key={index} path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter >
  );
}

export default App;

