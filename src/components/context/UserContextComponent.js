import React,{useState} from 'react'
export const UserContext = React.createContext()
function UserContextComponent({children}) {
    let [users,setUsers] = useState([
        {
          name:'Raj',
          email:'raj@gmail.com',
          mobile:'9910910901',
          address:'123, Dubai Main Road, Dubai',
          batch:'B46WET'
        },
        {
          name:'Naga',
          email:'naga@gmail.com',
          mobile:'9019019001',
          address:'123, Dubai Cross Cut Street, Dubai',
          batch:'B46WET'
        },
        {
          name:'Ashwin',
          email:'ashwin@gmail.com',
          mobile:'8918902091',
          address:'432, Dubai Cross Cut Street, Dubai',
          batch:'B46WET'
        }
      ])
  return <>
  <UserContext.Provider value={{users,setUsers}}>
    {children}
  </UserContext.Provider>
  </>
}

export default UserContextComponent