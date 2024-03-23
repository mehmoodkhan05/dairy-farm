import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./components/containers/Main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { Header, Footer } from "./components/index";
import {OrderForm, Products} from "./pages/index"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} exact>
            <Route index element={<Main />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orderForm" element={<OrderForm />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
