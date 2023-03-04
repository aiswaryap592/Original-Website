
import { useState,useEffect } from "react"

const Wishlist = ()=>{

    let[allproduct,updateProduct]=useState([])
    const getProduct = ()=>{
        let url = " http://localhost:1234/wishlist"
        fetch(url)
        .then(response=>response.json())
        .then(productArray=>{
            updateProduct(productArray)
        })
    }
    useEffect(()=>{
        getProduct()
    },[1])
    const delCart = (pid)=>{
        let url = " http://localhost:1234/wishlist/"+pid;
        var postData={
            method : "DELETE"
        }
        fetch (url,postData)
        .then(response=>response.json())
        .then(serverRes=>{
            getProduct()
        })
    }
   
    return(
<>
<div class="container mt-5">
<div className="col-lg-9 mx-5">
                <h1 className="text-center">Wishlist Item :{allproduct.length}</h1>
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>Item Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Photo</th>
                            <th  >Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {allproduct.map((product,index)=>{
                           
                            return(
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td><img src={product.photo}height="40"/></td>
                                    <td ><button className="btn btn-danger btn-sm"onClick={delCart.bind(this,product.id)}>Delete</button></td>
                                    </tr>
                                      )
                                    })
                                }
                                   </tbody>
                                   </table>
                                   </div>
                                   </div>
</>
    )
}
export default Wishlist;