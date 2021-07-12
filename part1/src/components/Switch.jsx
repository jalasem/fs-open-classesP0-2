import { useState } from "react"

const Switch = () => {
  const [isOn, setIsOn] = useState(false)

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      style={{
        width: '30rem',
        height: '10rem',
        position: 'relative',
        background: isOn ? 'green' : 'grey',
        borderRadius: '5rem',
        margin: '5rem auto',
        transition: 'opacity ease-in-out 0.3s',
      }}
    >
      <span
        style={{
          background: 'white',
          border: `2px solid ${isOn ? 'green' : 'grey'}`,
          position: 'absolute',
          width: '10rem',
          height: "10rem",
          borderRadius: '50%',
          transition: 'right ease-in-out 0.3s',
          right: isOn ? 0 : 'calc(100% - 10rem)',
          cursor: 'pointer'
        }}
      />
    </div>
  )
}

export default Switch
