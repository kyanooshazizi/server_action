import React from 'react'
import conection from "@/connect/db";
import userModel from "@/model/user"
async function page() {
    conection();
    const alluser= await userModel.find({})
   
  return (
    <div>
      {
        alluser.map(item=>
            <li style={{color:"blue", fontSize:"20px"}}>{item.username} {item.lastname}</li>
        )
      }
    </div>
  )
}

export default page
