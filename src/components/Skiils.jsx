import React from 'react'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiPostgresql } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3 } from 'react-icons/io'
import { ImGit } from 'react-icons/im'
import {AiOutlineGithub} from 'react-icons/ai'
import {GrHeroku} from 'react-icons/gr'

export default function Skiils() {
  return (
    <div className='skills-box'>
        <h1>Skills</h1>
        <FaReact className='icon react' color='#4d4d4e' />
        <FaNodeJs className='icon' color='#4d4d4e' />
        <SiPostgresql className='icon' color='#4d4d4e' />
        <IoLogoJavascript className='icon' color='#4d4d4e' />
        <ImHtmlFive className='icon' color='#4d4d4e' />
        <IoLogoCss3 className='icon' color='#4d4d4e' />
        <ImGit className='icon' color='#4d4d4e' />
        <AiOutlineGithub className='icon' color='#4d4d4e' />
        <GrHeroku className='icon' color='#4d4d4e' />
    </div>
  )
}
