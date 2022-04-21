import { useState } from "react";

function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("");
    
  return (
    <div>
        <h1>Login</h1>

        <form>
            <div>
                <input type="text" placeholder="Username or Email" />
            </div>

            <div>
                <input type="password" placeholder="Password" />
            </div>
        </form>
    </div>
  );
}

export default Login;