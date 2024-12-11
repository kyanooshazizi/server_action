"use client"
import styles from "../app/style.module.css";
import { useFormStatus } from "react-dom";
const Botton =() => {
  const { pending, data, method, action } = useFormStatus();
  console.log(pending)
  return (
    <button type="submit" className={styles.btn} disabled={pending} style={pending?{backgroundColor:"red"}:{}}>
      submit
    </button>
  );
};
export default Botton;
