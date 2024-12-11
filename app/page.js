import Form from "@/utils/form"
import Link from "next/link";
import conection from "@/connect/db";
import userModel from "@/model/user";

export default async function Home() {
  conection();
  const alluser= await userModel.find({})
  return (
    <>
      <Form></Form>
      <hr />
      <div>
      {
        alluser.map(item=>
            <li style={{color:"blue", fontSize:"20px"}}>{item.username} {item.lastname}</li>
        )
      }
    </div>
      <hr />
     <Link href="/alluser">alluser</Link>
    </>
  );
}
