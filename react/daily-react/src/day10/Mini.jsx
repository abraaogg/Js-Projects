import React, { useState } from 'react'

function Mini() {
    const [inputText, setInputText] = useState("")
    const [list, setList] = useState([])
  return (
    <div>
        <input type="text" value={inputText} onChange={(e)=> setInputText(e.target.value)} />
        <button>Save</button>
        <ul>

        </ul>
    </div>
  )
}

export default Mini