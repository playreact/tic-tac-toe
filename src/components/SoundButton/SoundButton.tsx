import useSound from 'use-sound'
import popUp from '@/assets/pop-up.mp3'
import popDown from '@/assets/pop-down.mp3'

interface SoundButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SoundButton({ children, ...rest }: SoundButtonProps) {
  const [playDown] = useSound(popDown, { id: 'active', volume: 0.25 })
  const [playUp] = useSound(popUp, { id: 'on', volume: 0.25 })

  return (
    <button {...rest} onMouseDown={() => playDown()} onMouseUp={() => playUp()}>
      {children}
    </button>
  )
}
