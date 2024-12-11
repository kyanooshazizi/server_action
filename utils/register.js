"use server";
import { revalidatePath } from "next/cache";
import conection from "../connect/db";
import userModel from "../model/user";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";


const register = async (prevstate,formData) => {
    console.log(prevstate,formData.get("username"))
  conection();
  revalidatePath("/");
//   await delay(4000);
if(!formData.get("username").trim()){
    return{
        message: "username is empty",
        valueitem: {
          username:formData.get("username"),
          lastname:formData.get("lastname"),
          password:formData.get("password")
        },
    }
}
if(!formData.get("lastname").trim()){
    return{
        message: "lastname is empty",
        valueitem: {
          username:formData.get("username"),
          lastname:formData.get("lastname"),
          password:formData.get("password")
        },
    }
}
if(!formData.get("password").trim()){
    return{
        message: "password is empty",
        valueitem: {
          username:formData.get("username"),
          lastname:formData.get("lastname"),
          password:formData.get("password")
        },
    }
}
  const userdata = await userModel.create({
    username: formData.get("username"),
    lastname: formData.get("lastname"),
    password: formData.get("password"),
  });
//   redirect("alluser")
// const cookiesall=cookies()
// console.log("cookiesall->",cookiesall.get("_ga").value)
return{
    message: "succsessfully",
        valueitem: {
          username:"",
          lastname:"",
          password:""
        },
}
};
// function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }
export default register;
