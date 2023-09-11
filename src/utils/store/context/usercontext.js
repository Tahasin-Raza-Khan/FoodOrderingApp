import { createContext } from "react";

const userContext= createContext({
    user:{
        name:"Tahasin Khan",
        email:"trk@gmail.com"
    }
})
export default userContext;