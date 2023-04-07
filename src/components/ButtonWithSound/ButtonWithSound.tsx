import useSound from 'use-sound'
import popUpOn from '../../assets/pop-up-on.mp3'
import popDown from '../../assets/pop-down.mp3'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export default function ButtonWithSound({ children, ...rest }: ButtonProps) {
  const [playDown] = useSound(popDown, { id: 'active', volume: 0.25 })
  const [playUp] = useSound(popUpOn, { id: 'on', volume: 0.25 })

  return (
    <button
      {...rest}
      onMouseDown={() => playDown()}
      onMouseUp={() => playUp()}
    >
      {children}
    </button>
  )
}
