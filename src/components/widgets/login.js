import { useState } from "react";


export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault()

        fetch("hhtps://httpbin.org/post",{
            method: "post",
            body: JSON.stringify({
                "user_name": userName,
                password
            })
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setUserName("")
            setPassword("")
        })
        .catch(console.error("Data ERROR ", error))
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <input autoComplete="email" name="user_name" type="text" placeholder="User name or email" value={userName || ""} onChange={e => setUserName(e.target.value)}/>
                <input outoComplete="current-password" type="password" placeholder ="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </form>
        </div>
    )



}