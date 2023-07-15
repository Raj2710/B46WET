import React, { useContext } from 'react'
import { UserContext } from '../../components/context/UserContextComponent'
function Bill() {
  let context = useContext(UserContext)
  console.log(context)
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Bill Details Section</h1>
      </div>
  )
}

export default Bill