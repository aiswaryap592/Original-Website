
import {Link} from 'react-router-dom';

const PublicHeader=()=>{
    return (

        <>
<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)">React Shopping app</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item ps-4">
          <Link className="nav-link active" to="/">Shopping</Link>
        </li>
        <li className="nav-item ps-4">
          <Link className="nav-link active" to="/cart">My Cart</Link>
        </li>
        <li className="nav-item ps-4 ">
          <Link className="nav-link active" to="/wishlist">My WishList</Link>
        </li>
        <li className="nav-item ps-4 ">
          <Link className="nav-link active" to="/login">Login</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

        
        </>
    )
}
export default PublicHeader