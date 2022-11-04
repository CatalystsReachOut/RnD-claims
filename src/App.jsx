import './App.css'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Dashboard from './pages/Dashboard/Dashboard'
import SignIn from './componenets/SignIn/SignIn'
import SignUp from './componenets/SignUp/signup'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Route>
        <Route path='/tickets' element={<Dashboard/>}/>
        </Routes>
    </div>
  )
}

export default App
