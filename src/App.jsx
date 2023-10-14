import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import  SignUpPage  from "./pages/SignUpPage";
import BeersPage from "./pages/BeersPage";
import RecipesPage from "./pages/RecipesPage";
import ProductionsPage from "./pages/ProductionsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/beers" element={<BeersPage/>}/>
          <Route path="/recipes" element = {<RecipesPage/>}/>
          <Route path="/productions" element = {<ProductionsPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
