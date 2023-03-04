import { useState, useEffect } from "react";
import AddProduct from "./addproduct";

const MyProduct=()=>{
    let[allproduct, updateProduct] = useState( [] );
    const getProduct = () =>{
        let url = "http://localhost:1234/productlist";
        fetch(url)
        .then(response=>response.json())
        .then(productArray=>{
            updateProduct(productArray);
        })
    }

    useEffect(()=>{
        getProduct();
    },[1]);

    return (
        <div className="container mt-5">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 className="text-primary"> 
                        {allproduct.length} : Product Management 
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <AddProduct/>
                </div>
                <div className="col-lg-9">
                <table className="table table-bordered mt-4 shadow">
                        <thead>
                            <tr className="bg-light text-primary">
                                <th>Item Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Photo</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allproduct.map((product, index2)=>{
                                    return(
                                        <tr key={index2}>
                                            <td> {product.id} </td>
                                            <td> {product.name} </td>
                                            <td> {product.price} </td>
                                            <td> <img src={product.photo} height="40"/></td>
                                            <td> {product.info} </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default MyProduct;
