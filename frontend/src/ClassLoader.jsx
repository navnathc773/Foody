export const ClassLoader=async({params})=>{
    console.log("params:",params);

  const URL = `/api/getAll?Category=${params.product}`;

  try{
    const res=await fetch(URL);

    const data=await res.json();

    return data;
  }
  catch(error){
    console.log(error);
  }
}