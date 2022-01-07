import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import { AuthProvider } from "./contexts/AuthContext"
import Dashboard from "./components/Dashboard";
import Private from "./components/Private"
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App font-[Inter]">
          <Navbar />
          <div className="max-w-5xl py-8  mx-auto">

            <Routes>
              <Route
                path='/'
                exact
                element={<>
                  <Private>
                    <Dashboard />
                  </Private>
                </>}
              />
              <Route
                path='/login'
                element={<Login />}
              />
              <Route
                path='/register'
                element={<Register />}
              />
              <Route
                path='/forgot-password'
                element={<ForgotPassword />}

              />
            </Routes>
          </div>
        </div >
      </AuthProvider>
    </Router >
  );
}

export default App;
