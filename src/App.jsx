import Navbar from "./components/partials/Navbar";
import Private from "./components/partials/Private"
import Dashboard from "./components/Dashboard";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import UpdateProfile from "./components/auth/UpdateProfile"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'





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
                path='/update-profile'
                element={<>
                  <Private>
                    <UpdateProfile />
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
