import React, { useEffect, useState } from "react";
import ProductService from '../services/ProductService';

const Login = () => {

    const [uname,setUname] =useState([])
    const [pass,setPass] =useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        ProductService.getAllUsers().then(res => setUsers(res.data))
    },[])
    const check = () => {
        let count = 0;
        // window.location.href = "/update";
        users.filter(user => {
            
            if (user.uname == uname && user.pass == pass) {
                if (user.type === 'admin') {
                    alert('admin'+uname+pass)
                   window.location.href='/list'
                } 
                else
                {
                    alert('Customer'+uname+pass)
                    window.location.href='/create'
                    
                }
                count++;
            }
        })
        if (count == 0) {
            alert('invalid credentials')
        }
    }


    return (
        <div>
            {/* <div className="loginimage"> */}
                <div className="container">
                    {/* <div className="row">
                        <div className="col-lg-8 col-md-6 col-sm-12"></div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
                                <div className="card w-100">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-center">
                                            <img src="https://img.icons8.com/color/380/null/user.png" className="img-fluid shadow-2-strong mb-3" width={"150px"} alt={"Logo"} />
                                        </div> */}

                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label"> UserName </label>
                                                <input  className="form-control" placeholder="Enter Username" onChange={(e) =>setUname(e.target.value)} />
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">Password</label>
                                                <input type={"password"} className="form-control" placeholder="Enter your Password" onChange={(e) =>setPass(e.target.value)} />
                                                <p className="text-danger mt-2"></p>
                                            </div>
                                            <button className="btn btn-primary w-100 mb-3" onClick={(e) => { check(e) }}>Log In</button>
                                            <div className="d-flex justify-content between mb-3">
                                                <div className="text-danger p-2" onClick={(e) => { }}>Dont have an account..?</div>
                                                <div className="text-danger p-2"> Forgot Password </div>
                                            </div>
                                        </form>

                                    {/* </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        </div>
    );

};
export default Login