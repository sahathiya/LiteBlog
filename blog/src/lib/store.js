import { create } from "zustand";
import { persist } from "zustand/middleware"; 
export const useBlogStore =create(
    persist(
   (set)=>({
    blogs:[],
    blog:null,
    setBlogs: (blogs) =>{
         set({ blogs })
         console.log("blogs",blogs)
    },
    setBlog:(blog)=>{
        set({blog})
         console.log("blog",blog)
    }
    
    
}),
{
    name:"blogs"
}
    )

 

)





export const useCurrentUserStore =create(

    persist(
            (set)=>({
    currentUser:null,
    setCurrentUser: (user) =>{
         set({ currentUser:user })
         console.log("user",user)
    },
    
    
}),
{
    name:"currentUser"
}

    )


)