import { createSlice } from '@reduxjs/toolkit'
const url = 'https://6486a3c8beba6297278efd7e.mockapi.io/blogs'
export const blogSlice = createSlice({
    name:'blogs',
    initialState:{blogs:[],url},
    reducers:{
        setAll:(state,inboundData)=>{
            state.blogs = inboundData.payload
        },
        toggleStatus:(state,inboundData)=>{
            for(let i=0;i<state.blogs.length;i++)
            {
                if(state.blogs[i].id===inboundData.payload)
                {
                    state.blogs[i].active_flag = !state.blogs[i].active_flag
                }
            }
        },
        createBlog:(state,payload)=>{

        }
    }
})

export const {setAll, setOnlyActive, createBlog, editBlog,toggleStatus} = blogSlice.actions

export default blogSlice.reducer