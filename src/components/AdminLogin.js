

const AdminLogin = () => {
    const createProd = (e) => {
        window.location.href('/createProduct');
    }
    return (
        <div className="container">
            <button className="btn btn-primary" onClick={(e) => createProd(e)}>Create Product</button>
        </div>
    )
}
export default AdminLogin;