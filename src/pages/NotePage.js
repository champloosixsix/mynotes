import React from 'react'

const NotePage = ({match}) => {
    let noteId = match.params.id
    
  return (
    <div>
        <h1>This is a single note page</h1>
    </div>
  )
}

export default NotePage