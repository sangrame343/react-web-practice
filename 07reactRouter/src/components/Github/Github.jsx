import React, { useEffect , useState} from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data=useLoaderData();
//     const[data,setData]=useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/sangrame343")
//       .then(res => res.json())
//       .then(data => {setData(data)
//         })
//     },[])
  return (
    <div>
      <div className="text-center bg-yellow-400 text-3xl p-8">
         
        GitHub Followers :{data.followers}
        <div className="w-24 flex flex-wrap border-radius-full">
        <img src={data.avatar_url} alt="" />
        </div>
        
      </div>
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sangrame343')
    return response.json()
}