import { memo, useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
import { Palette } from 'lucide-react'
import SoundButton from '../SoundButton'
import { themes } from './ThemeChange.constants'

function ThemeChange() {
  const [currentTheme, setCurrentTheme] = useState<string>('')

  useEffect(() => {
    themeChange(false)
  }, [])

  function handleRandomTheme() {
    const nextTheme = themes[Math.floor(Math.random() * themes.length)].id
    setCurrentTheme(nextTheme)
  }

  return (
    <SoundButton data-set-theme={currentTheme} onClick={handleRandomTheme} className='btn btn-ghost btn-square'>
      <Palette />
    </SoundButton>
  )
}

export default memo(ThemeChange)
