import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import { Header } from "./Header";
import { Listar } from "./Listar";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      
        {isAuthenticated ? (
          <>
       
        <Header/>
            <Listar/>
           
          </>
        ) : (
          <LoginButton />
        )}
      
    </div>
  );
}

export default App;
