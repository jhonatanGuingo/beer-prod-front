import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import BeersPage from "./pages/BeersPage";
import RecipesPage from "./pages/RecipesPage";
import ProductionsPage from "./pages/ProductionsPage";
import { UserProvider } from "./contexts/UserContext";
import useToken from "./hooks/useToken";
import { BreweriesProvider } from "./contexts/UserBreweries";

function App() {
  return (
    <>
      <UserProvider>
        <BreweriesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />

              <Route path="/signup" element={<SignUpPage />} />
              <Route
                path="/beers"
                element={
                  <ProtectedRouterGuard>
                    <BeersPage />
                  </ProtectedRouterGuard>
                }
              />
              <Route
                path="/recipes"
                element={
                  <ProtectedRouterGuard>
                    <RecipesPage />
                  </ProtectedRouterGuard>
                }
              />
              <Route
                path="/productions"
                element={
                  <ProtectedRouterGuard>
                    <ProductionsPage />
                  </ProtectedRouterGuard>
                }
              />
            </Routes>
          </BrowserRouter>
        </BreweriesProvider>
      </UserProvider>
    </>
  );
}

export default App;

function ProtectedRouterGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
