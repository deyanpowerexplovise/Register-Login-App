import { useState } from "react"; 
import Login from "./Login";
import Books from "./Books";


const App = () => {

    const [token, setToken] = useState('');

    const userLogin = (tok) => {
        setToken(tok);
    }

    return (
        <div className="App">
            <Login userLogin={userLogin} />
            <Books token={token}/>
        </div>
    );
};

export default App;