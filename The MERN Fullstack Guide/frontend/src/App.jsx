import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Users } from "./user/pages/Users";
import { NewPlaces } from "./places/pages/NewPlaces";
import { MainNavigation } from "./shared/Navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation>
        <main>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/places/new" element={<NewPlaces />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </MainNavigation>
    </Router>
  );
}

export default App;
