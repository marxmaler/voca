import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import AddWords from "./routes/AddWords";
import Join from "./routes/Join";
import Login from "./routes/Login";
import { useRecoilValue } from "recoil";
import { loginState } from "./atoms";
import Review from "./routes/Review";

function Router() {
  const login = useRecoilValue(loginState);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={login.loggedIn ? <Home /> : <Login />}></Route>
        <Route path="/join" element={!login.loggedIn && <Join />}></Route>
        <Route path="/login" element={!login.loggedIn && <Login />}></Route>
        <Route
          path="/words"
          element={login.loggedIn ? <AddWords /> : <Login />}
        ></Route>
        <Route
          path="/words/review"
          element={login.loggedIn ? <Review /> : <Login />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
