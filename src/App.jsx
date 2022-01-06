import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  return (
    <AuthProvider>
      <div className="App font-[Inter]">
        <Router>
          <Navbar />
          <div className="max-w-1/5">
            <Routes>
              <Route
                path='/login'
                element={
                  <>
                    <Login />
                  </>
                }
              />
              <Route
                path='/register'
                element={
                  <>
                    <Register />
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
      </div >
    </AuthProvider>
  );
}

export default App;
