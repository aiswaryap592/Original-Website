import {Link} from 'react-router-dom';

const AdminHeader=()=>{
    return (
        <>
<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4 sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">React Shopping app</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item ps-4">
          <Link className="nav-link active" to="/">Dashboard</Link>
        </li>
        <li className="nav-item ps-4">
          <Link className="nav-link active" to="/order">Manage Order</Link>
        </li>
        <li className="nav-item ps-4 ">
          <Link className="nav-link active" to="/product">Manage Product</Link>
        </li>
        <li className="nav-item ps-4 ">
          <a className="nav-link active"> Welcome - { localStorage.getItem("name") }-
          <a href="javascript-void(0)"onClick={logout}>Logout</a>
          </a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>



       
       </>
    )
}
export default AdminHeader;

const logout = () =>{
    localStorage.clear();
    window.location.href="http://localhost:3000/#/login";
    //window.location.href="http://127.0.0.1:5500/#/";
    window.location.reload();
}
