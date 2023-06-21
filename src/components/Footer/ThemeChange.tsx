import React, { memo, useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
import { Palette } from 'lucide-react'
import SoundButton from '../SoundButton'
import { themes } from './ThemeChange.constants'

const ThemeChange: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('')

  useEffect(() => {
    themeChange(false)
  }, [])

  function handleRandomTheme() {
    const nextTheme = themes[Math.floor(Math.random() * themes.length)].id
    setCurrentTheme(nextTheme)
  }

  return (
    <SoundButton
      data-set-theme={currentTheme}
      title='click to get a random theme'
      onClick={handleRandomTheme}
      className='btn-ghost btn-square join-item btn'
    >
      <Palette size={30} />
    </SoundButton>
  )
}

export default memo(ThemeChange)
