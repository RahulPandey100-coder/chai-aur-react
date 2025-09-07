import React, { useState, useCallback } from 'react'

const App = () => {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const[charAllowed, setCharAllwed]= useState(false)
  const [password, setPassword]= useState("")
  const passwordGenerator= useCallback(() => {
    let pass= ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str+= "!@#$%^&*-+=[]{}~`"
  }, [length, numberAllowed, charAllowed, setPassword])
  return (
    <>
    <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
