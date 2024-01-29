import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // const [data,setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/parashardharmik')
  //   .then(res => res.json())
  //   .then(data => {
  //     setData(data)
  //   })
  // },[])
  const data = useLoaderData()
  return (
    <div className='text-center m-4 flex-col justify-center items-center bg-gray-300 text-black p-4 text-3xl'><div>Github Followers: {data.followers}</div>
  <div className='flex  items-center justify-center'><img src={data.avatar_url} className='rounded-3xl' alt="git image" /></div></div>
  )
}

export default Github

export const gitInfoLoader = async() => {
  const res = await fetch('https://api.github.com/users/parashardharmik')
  return res.json()
}

export const gitInfoLoader2 = async() => {
  const res = await fetch('https://api.github.com/users/rohan1917')
  return res.json()
}