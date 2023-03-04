import { useState, useEffect } from "react";

const MyHome = () => {
  let [allproduct, updateProduct] = useState([]);
  const getProduct = () => {
    let url = "http://localhost:1234/productlist";
    fetch(url)
      .then((response) => response.json())
      .then((productArray) => {
        updateProduct(productArray);
      });
  };

  useEffect(() => {
    getProduct();
  }, [1]);

  //Add to cart
  const addtocart = (pdata) => {
    pdata["qty"] = 1; // add qty in cart
    // console.log(pdata);
    let url = "http://localhost:1234/cart";
    let postData = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(pdata),
    };
    fetch(url, postData)
      .then((response) => response.json())
      .then((serverRes) => {
        alert(pdata.name + " Added in your Cart");
      });
  };
  const addToWish = (pdata)=>{
    let url = "http://localhost:1234/wishlist";
    let postData = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(pdata),
    };
    fetch(url, postData)
      .then((response) => response.json())
      .then((serverRes) => {
        alert(pdata.name + " Added in your Wishlist");
      });
  }

  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="banner"> </div>
          </div>
        </div>
      </section>

      <div className="container mt-4">
        <div className="row">
          {allproduct.map((product, index) => {
            return (
              <div key={index} className="col-lg-3 mb-4">
                <div className="p-4 rounded shadow">
                  <h5 className="text-center text-secondary">{product.name}</h5>
                  <img src={product.photo} height="140" width="100%" alt="" />
                  <p className="text-center">
                    <del className="text-danger">
                      Rs. {product.price + (product.price * 15) / 100}
                    </del>
                    <ins className="text-secondary fs-4">Rs. {product.price}</ins>
                  </p>
                  <p className="text-center">
                    <button
                      className="btn btn-danger"
                      onClick={addtocart.bind(this, product)}
                    >
                      Add to cart
                    </button>
&nbsp;&nbsp;
                    <button className="btn btn-warning text-white" onClick={addToWish.bind(this,product)}>Wishlist</button>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MyHome;