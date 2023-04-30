import React, { memo } from 'react'
import { Github } from 'lucide-react'
import ThemeChange from './ThemeChange'

const Footer: React.FC = () => {
  return (
    <footer className="btn-group flex justify-center">
      <ThemeChange />
      <a href='https://github.com/playreact/tic-tac-toe' className='btn btn-ghost btn-square'>
        <Github size={30} />
      </a>
    </footer>
  )
}

export default memo(Footer)
