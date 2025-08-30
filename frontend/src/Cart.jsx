export const Cart=()=>{
  const storedUser = localStorage.getItem("user");

  const user=storedUser ? JSON.parse(storedUser):null;

  
  return(
    <>
    {/* <h1>Hello</h1>
    <h3>{user._id}</h3>
    <h3>{user.email}</h3> */}
    
    </>
  )
}