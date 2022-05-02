import { Route, Routes } from "react-router-dom";
import AdminContainer from "./AdminContainer";
import LogIn from "./components/Login";
import AdminProvider from "./context/adminContext";
import AuthProvider, { AuthContext } from "./context/authContext";
import { PrivateRouteAdmin } from "./routes/PrivateRouteAdmin";

function App() {
  return (
    <AuthProvider>
      <AdminProvider>
        <Routes>
          <Route element={<PrivateRouteAdmin />}>
            <Route path="/" element={<AdminContainer />} />
          </Route>
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </AdminProvider>
    </AuthProvider>
  );
}

export default App;
