import { Outlet, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../style/Home.css";
import { useState } from "react";
import { useAuth } from "./auth/Auth";
import { CgProfile } from "react-icons/cg";

export const Layout = () => {
  const {storeToken}=useAuth();
  const {isLoggedIn}=useAuth();
  const {logout}=useAuth();
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate=useNavigate();
  const[logo,setlogo]=useState({
    email:"",
    password:"",
  })

  // const [store, setstore] = useState(() => {
  //     const storedUser = localStorage.getItem("user");
  //     return storedUser ? JSON.parse(storedUser) : { name: "", email: "", mobileno: "" };
  //   });


  const [user,setuser]=useState({
    name:"",
    email:"",
    mobileno:"",
    password:"",
  })

  const handleinput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    
    setuser((prev)=>({...prev,[name]:value}));
  }
  const openSignUp = () => {
    setIsLogin(false);
    setShowModal(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setShowModal(true);
  };

  const closePopup = () => {
    setShowModal(false);
  };

  const handlesubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/register/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const result = await response.json();

    if (response.status === 200) {
      alert(result.msg); // "data inserted successfully"
      setIsLogin(true);
      // localStorage.setItem("user", JSON.stringify(result.wholeData));
    } else if (response.status === 404) {
      alert(result.msg); // "Duplicate entry" or "data not inserted"
    } else {
      alert("Unexpected error occurred!");
    }

    console.log("Server Response:", result);
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong! Please try again.");
  }
};

const handlelogin=(e)=>{
  const name=e.target.name;
  const value=e.target.value;

  setlogo((prev)=>({...prev,[name]:value}));
}

const handleloginsubmit=async(e)=>{
  e.preventDefault();

  const response=await fetch("http://localhost:3000/login/verify",{
    method:"POST",
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(logo),
  })

  const result=await response.json();

  if(response.ok){
    alert(result.msg);
    storeToken(result.token);
    setIsLogin(false);
    setShowModal(false);
    navigate('/About');

  }
  else{
    alert(result.msg);
  }
  console.log(logo);

}

const handlelogOut=()=>{
   logout();
}
  return (
    <>
      <nav className="navbar">
        <div className="logo">Foody</div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Cart">
            <FaShoppingCart/>
          </NavLink>
          {
            isLoggedIn ? 
            <>
                <div className="profile-wrapper">
      <CgProfile style={{ fontSize: "40px", color: "white", cursor: "pointer" }} onClick={() => setOpen(!open)} />
                {open && (
                <div className="profile-box">
                  <h3>User Profile</h3>
                  <p></p>
                  <p></p>
                  <button onClick={() => setOpen(false)}>Close</button>
                </div>
              )}
         </div>

              <button className="popup-btn" onClick={handlelogOut} >Log Out</button>
            </>
             :
            <>
              <button className="popup-btn" onClick={openSignUp}>
                Sign Up
              </button>
              <button className="popup-btn" onClick={openLogin}>
                Login
              </button>
            </>

          }
          
        </div>
      </nav>

      <Outlet />

      {/* Popup Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closePopup}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>

            {/* Switch between Login & SignUp */}
            {isLogin ? (
              <form className="signup-form" onSubmit={handleloginsubmit}>
                <h2>Login</h2>

                <input type="email" name="email" placeholder="Email" onChange={handlelogin}required />
                <input
                  type="password"
                  name="password"
                  onChange={handlelogin}
                  placeholder="Password"
                  required
                />

                <button type="submit">Login</button>

                <p>
                  Don’t have an account?{" "}
                  <span className="switch-link" onClick={() => setIsLogin(false)}>
                    Sign Up
                  </span>
                </p>
              </form>
            ) : (
              <form className="signup-form" onSubmit={handlesubmit}>
                <h2>Sign Up</h2>

                <input type="text" name="name" placeholder="Name" onChange={handleinput}required />
                <input type="email" name="email" placeholder="Email" onChange={handleinput} required />
                <input type="text" name="mobileno" placeholder="Mobile Number" onChange={handleinput} required />
                <input type="password" name="password" placeholder="Password" onChange={handleinput} required />

                <button type="submit">Register</button>

                <p>
                  Already have an account?{" "}
                  <span className="switch-link" onClick={() => setIsLogin(true)}>
                    Login
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
