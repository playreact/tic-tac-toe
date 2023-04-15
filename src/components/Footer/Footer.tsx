import { memo } from 'react'
import { Github } from 'lucide-react'
import ThemeChange from '../ThemeChange'

function Footer() {
  return (
    <footer className="flex justify-center">
      <ThemeChange />
      <a href='https://github.com/playreact/tic-tac-toe' className='btn btn-ghost btn-square'>
        <Github />
      </a>
    </footer>
  )
}

export default memo(Footer)
