import "./App.css";
import { useAuth } from "./contexts/authentication";
import AuthenticatedApp from "./pages/AuthenticatedApp";
import LoginPage from "./pages/LoginPage";

function App() {
  const auth = useAuth();
  return auth.state.user ? <AuthenticatedApp /> : <LoginPage />;
}

export default App;
