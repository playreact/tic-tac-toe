import React, { memo } from 'react'
import { Github } from 'lucide-react'
import ThemeChange from './ThemeChange'

const Footer: React.FC = () => {
  return (
    <footer className="join flex justify-center">
      <ThemeChange />
      <a href='https://github.com/playreact/tic-tac-toe' title='get source code from github' className='btn-ghost btn-square join-item btn'>
        <Github size={30} />
      </a>
    </footer>
  )
}

export default memo(Footer)
