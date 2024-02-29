import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Navigation from "./components/Navigation";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuthStore } from "./store/auth";



function App() {
  const isAuth = useAuthStore(state => state.isAuth);

  return (
    <div>
      <BrowserRouter>

        <Navigation />

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          
          <Route element={<ProtectedRoute isAllowed={isAuth}/>}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
