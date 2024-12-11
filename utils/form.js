"use client";
import React, { useEffect } from "react";
import Botton from "@/utils/Button";
import styles from "@/app/style.module.css";
import register from "@/utils/register";
import { useRef } from "react";
import { useFormState } from "react-dom";
export default function form() {
   
  const x = useRef();
  const [state,formaction] = useFormState(register, {
    message: "",
    valueitem: {
      username: "",
      lastname: "",
      password: "",
    },
  });
 
  console.log("state->",state)
  return (
    <>
      <form
        ref={x}
        action={async (formData) => {
          await formaction(formData);
          x.current.reset();
        }}
        className={styles.tagform}
      >
        <label htmlFor="username">username:</label>
        <input type="text" name="username" id="" className={styles.inform} defaultValue={state.valueitem.username} />
        <label htmlFor="lastname">lastname:</label>
        <input type="text" name="lastname" id="" className={styles.inform} defaultValue={state.valueitem.lastname} />
        <label htmlFor="password">password:</label>
        <input type="text" name="password" id="" className={styles.inform} defaultValue={state.valueitem.password} />
        <p style={state.message=="succsessfully"?{color:"green", margin:"10px"}:{color:"red", margin:"10px"} }>{state.message}</p>
        <Botton />
      </form>
    </>
  );
}
