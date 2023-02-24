import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";

const UpdateProduct = () => {
    const { id } = useParams();

    const [product, setProduct] = useState({
        id: id,
        name: "",
        qty: "",
        price: ""
    });
    useEffect(() => {
        ProductService.getProductById(product.id).then((res) => {
            setProduct(res.data);
        });
    });
    const UpdateProduct = () => {
        alert("Update Product" + product.id + "" + product.name);
        ProductService.updateProduct(id,product).then((res) => {
            window.location.href = "/list";
        })
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h1>Update Product Details</h1>
                </div>
                <div className="card-body">
                    <div className="mt-3">
                        <input type="text" placeholder="enter Product Id" className="form-control"
                            onChange={(e) => setProduct(e.target.value)}
                            value={product.id} />

                        <div className="mt-3">
                            <input type="text" placeholder="Enter Product Name" className="form-control"
                                onChange={(e) => setProduct(e.target.value)}
                                value={product.name} />

                        </div>

                        <div className="mt-3">
                            <input type="text" placeholder="Enter Product Quantity" className="form-control"
                                onChange={(e) => setProduct(e.target.value)}
                                value={product.qty} />

                        </div>

                        <div className="mt-3">
                            <input type="text" placeholder="Enter Product Price" className="form-control"
                                onChange={(e) => setProduct(e.target.value)}
                                value={product.price} />
                        </div>
                        <div className="text-center">
                            <button type="submit" onClick={() => UpdateProduct()} className="btn btn-info">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default UpdateProduct;