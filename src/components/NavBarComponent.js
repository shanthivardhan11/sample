import React from "react";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import ProductList from "./ProductList";
import CreateProduct from "./CreateProduct";
import UpdateProduct from "./UpdateProduct";
import Home from './Home';
import ViewProduct from "./ViewProduct";
import Login from "./Login";
import AdminLogin from "./AdminLogin";
const NavBarComponent = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <ul>
                    {/* <li>
                        <Link to="/">Home</Link>
                    </li> */}
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                    {/* <li>
                        <Link to="/">logout</Link>
                    </li> */}
                </ul>
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/adminLogin" element={<AdminLogin/>} />
                    <Route path="/create"  element={<CreateProduct/>} />
                    <Route path="/list" element={<ProductList/>} />
                    <Route path={'/view-product/:id'} element={<ViewProduct/>} />
                    <Route path={'update-product/:id'} element={<UpdateProduct/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default NavBarComponent;