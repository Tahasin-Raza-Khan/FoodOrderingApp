import { Outlet } from "react-router-dom";
const Contact=()=>{
    return (
        <>
          <h1>This is contact page</h1>
          <Outlet name="khan"/>
        </>
    )
}

export default Contact;