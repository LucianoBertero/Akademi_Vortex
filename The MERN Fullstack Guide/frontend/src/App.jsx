import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Users } from "./user/pages/Users";
import { NewPlaces } from "./places/pages/NewPlaces";
import { MainNavigation } from "./shared/Navigation/MainNavigation";
import { UserPlaces } from "./places/pages/UserPlaces";

function App() {
  return (
    <Router>
      <MainNavigation> </MainNavigation>
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlaces />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
