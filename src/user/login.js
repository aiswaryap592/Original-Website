/*import { useState } from "react";


const MyLogin = () => {
    let[uname,picname]=useState("")
    let[upassword,picpassword]=useState("");
    let[msg,updatemsg]=useState("Enter Login Details")
    const Gologin=()=>{
        if(uname==""||upassword == ""){
            updatemsg("Empty Email or Password")
        }else{
            updatemsg("Please Wait Processing")
            var url="http://localhost:1234/account?email="+uname + "&password="+upassword;
            fetch(url)
            .then(response=>response.json())
            .then(userinfo=>{
                if(userinfo.length >0){
                    updatemsg("Success ! Please wait redirecting")
                    localStorage.setItem("Id",userinfo[0].id);
                    localStorage.setItem("name",userinfo[0].name);
                    window.location.href ="http://localhost:3000/#/"
                    window.location.reload();
                }
                else{
                    updatemsg("Fail! Invalid Not exist...")
                }
            })
        }
    }
    return (
        <div className="container mt-4">
            <div className="row">
<div className="col-lg-4"></div>
<div className="col-lg-4">
    <p className="text-danger text-center">{msg}</p>
    <div className="card border-0 shadow-lg">
        <div className="card-header bg-primary text-white">Login</div>
        <div className="card-body">
            <div className="mb-4"><span>e-Mail Id<small className="text-danger"></small></span>
            <input type="email"className="form-control"onChange={obj=>picname(obj.target.value)}/>
            
            </div>
            <div className="mb-4"><span>Password<small className="text-danger"></small></span>
            <input type="password"className="form-control"onChange={obj=>picpassword(obj.target.value)} />
            
            </div>

        </div>
        <div className="card-footer text-center"><button className="btn btn-danger"onClick={Gologin}>Login</button></div>
    </div>
</div>
<div className="col-lg-4"></div>
            </div>
           
            
        </div>
    )
}
export default MyLogin*/

import { useState } from "react";
import PublicHeader from "./publicheader";

const MyLogin = () => {
  let [uname, pickUsername] = useState("");
  let [upass, pickPassword] = useState("");
  let [msg, updateMsg] = useState("Enter Login Details");

  const goLogin = () => {
    if ((uname == "") & (upass == "")) {
      updateMsg("Invalid");
    } else {
      updateMsg("Please wait processing...");
      var url =
        "http://localhost:1234/account?email=" + uname + "&password=" + upass;
      fetch(url)
        .then((response) => response.json())
        .then((userInfo) => {
          if (userInfo.length > 0) {
            updateMsg("Success! please wait redirecting");

            localStorage.setItem("id", userInfo[0].id);
            localStorage.setItem("name", userInfo[0].name);
            window.location.href = "http://localhost:3000/account#/";
           // window.location.href="http://127.0.0.1:5500/#/";
            window.location.reload();
          } else {
            updateMsg("Faild!.. Invalid or not exists");
          }
        });
    }
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <p>{msg}</p>
          <div className="card border-0 shadow-lg">
            <div className="card-header bg-primary text-white">Login</div>
            <div className="card-body">
              <div className="mb-4">
                <span>
                  e-mail id: <small className="text-danger">*</small>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(obj) => pickUsername(obj.target.value)}
                  />
                </span>
              </div>
              <div className="mb-4">
                <span>
                  Password: <small className="text-danger">*</small>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(obj) => pickPassword(obj.target.value)}
                  />
                </span>
              </div>
              <div className="footer">
                <button className="btn btn-primary" onClick={goLogin}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};
export default MyLogin;
