import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { Home } from "./pages/Home"
import './index.css'
import { Private } from "./pages/Private"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase.config"
import { ProtectedRoutes } from "./components/ProtectedRoutes"
import { Memoization, ParentComponent } from "./pages/Memoization"
function App() {
 const [user,setUser] = useState(null)
 
 useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,(user)=>{
    console.log(user)
    setUser(user)
    return () => unsubscribe();
   })
 },[])
  return (
    <>
     <Router>
      <Routes>
       {/* <Route path="/" element = {<Home />} />
       <Route path="/private" element = { 
        <ProtectedRoutes user = {user}>
        <Private />
        </ProtectedRoutes>
        } /> */}
       <Route path="/memo" element={<Memoization />}/>
       <Route path="/memo" element = {<ParentComponent />}/>
      </Routes>
      </Router> 
    </>
  )
}

export default App
