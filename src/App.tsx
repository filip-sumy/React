import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import { RootState } from "./redux/store";
import { login, logout } from "./redux/slices/authSlice";

// import React from "react";
function App() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispath = useDispatch();

  const handleToggleAuth = () => {
    if (isAuth) {
      dispath(logout());
    } else {
      dispath(login());
    }
  }
  return (
    <div>
      <header>
        <button onClick={handleToggleAuth}>{isAuth ? 'Logout' : 'Login'}</button>
      </header>
      <Counter />
    </div>
  )
}

export default App;