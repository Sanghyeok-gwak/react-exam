
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./layouts/Headers";
import ProductList from "./pages/ProductCard";
import Notice from "./pages/Notice";

import LikeButton from "./components/LikeButton";
import LiveInput from "./components/LiveInput";
import Page from "./components/Page";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ProductList />

                <section>
                  <h2>문제 1 - React Hook</h2>
                  <LikeButton />
                  <LiveInput />
                  <Page />
                </section>
              </>
            }
          />

          <Route
            path="/notice"
            element={<Notice />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
