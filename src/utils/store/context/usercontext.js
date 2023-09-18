import { createContext } from "react";

const userContext= createContext({
    user:{
        name:"Default name",
        email:"trk@gmail.com"
    }
})
export default userContext;