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

function App() {
  return (
    <Router>
      <MainNavigation> </MainNavigation>
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/places/:placeId" element={<UpdatePlace />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
