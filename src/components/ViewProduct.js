import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
const ViewProduct=()=>{
    const {id}= useParams();
    const [product,setProduct]= useState({
        id:id,
        name:"",
        qty: "",
        price:""
    });
    useEffect(()=>{
        ProductService.getProductById(product.id).then((res)=>{
            setProduct(res.data);

        },[])
    });
    return(
        <div>
            <h1>View Product</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.qty}</td>
                        <td>{product.price}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default ViewProduct;