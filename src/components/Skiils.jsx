import React from 'react'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import {SiPostgresql} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'

export default function Skiils() {
  return (
    <div className='skills-box'>
        <FaReact className='icon react' color='#4d4d4e' />
        <FaNodeJs className='icon' color='#4d4d4e' />
        <SiPostgresql className='icon' color='#4d4d4e' />
        <IoLogoJavascript className='icon' color='#4d4d4e' />
    </div>
  )
}
