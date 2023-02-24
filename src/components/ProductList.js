import React, { useEffect, useState } from "react";

import ProductService from "../services/ProductService";

// import { toast } from "react-toastify";

const ProductList = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        ProductService.getAllProducts().then(res => setProduct(res.data));
    }, [product]);

    // const navigate = useNavigate();

    const onDelete = (id) => {
        alert(id);

        // ProductService.deleteProduct(id).then(() => {
        //     toast.success("Deleted", { position: "top-right" });
        // });
    };


    const onUpdate = (id) => {
        window.location.href = "/update/" + id;

        // navigate("/update/" + id);

    };

    const onView = (id) => {
        window.location.href = "/view/" + id;

        // navigate("/view/" + id);

    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header"><h1>Product List</h1></div>
                        <div className="card-body">
                            <center>
                                <table className="table table-striped" border={'1px'}>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Update</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            product.map((product, index) =>
                                                <tr key={index}>
                                                    <td>{product.id}</td>
                                                    <td>{product.name}</td>
                                                    <td>{product.qty}</td>
                                                    <td>{product.price}</td>
                                                    <td>
                                                        <button className="btn btn-primary" onClick={(e) => { onUpdate(product.id); }}>Update</button>
                                                    </td>

                                                    <td>
                                                        <button className="btn btn-Warning" onClick={(e) => { onView(product.id); }}>View</button>
                                                    </td>

                                                    <td>
                                                        <button className="bn btn-Danger" onClick={(e) => { onDelete(product.id); }}>Delete</button>
                                                    </td>
                                                </tr>)
                                        }
                                    </tbody>
                                </table>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ProductList;