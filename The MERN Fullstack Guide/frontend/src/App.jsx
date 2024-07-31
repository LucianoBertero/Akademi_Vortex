import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Users } from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlaces";
import { MainNavigation } from "./shared/Navigation/MainNavigation";
import { UserPlaces } from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import { Auth } from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import { useCallback, useEffect, useState, useContext } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //al usar callback y no poner dependencias se ejecuta una sola vez
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation> </MainNavigation>
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
