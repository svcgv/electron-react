import React from 'react'
import { Link } from 'react-router-dom'
export default function Home (props:React.Props<React.Component>) {
  return <div>home<Link to='/detail'>detail</Link></div>
}
