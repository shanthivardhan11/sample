import React,{useState} from "react";
export const LoggingIn =()=>{
    const [email,setEmail]= useState('');
    const [password,setPassword] = useState('');

    const handleSubmit =()=>{
        e.preventDefault();
        console.log(email)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label for="email">email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Your Email"/>
            <label for="password">Password</label>
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="********"/>
            <button type ="submit">Log in</button>
        </form>
        <button>Don't have an account..? Register here </button>
        </>

    )
}