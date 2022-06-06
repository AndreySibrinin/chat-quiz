import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Login from "./pages/Login";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Main/>} />
              <Route path="/login" element={<Login/>} />
          </Route>
      </Routes>
  );
}

export default App;
