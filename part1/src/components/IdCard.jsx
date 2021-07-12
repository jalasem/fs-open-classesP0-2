import { useState } from 'react'
import './IdCard.css'

const IdCard = () => {
  const [info, setInfo] = useState({
    fullName: 'Ibrahim Alao Kondiki',
    designation: 'Senior Backend Developer',
    dob: '1985-01-08',
    expiry: '2023-07-13',
  })
  const updateField = (field, value) =>
    setInfo({...info, [field]: value })

  return (
    <>
      <div className="IdCard">
        <span className="field">Fullname</span>
        <span className="value">{info.fullName}</span>
        
        <span className="field">Designation</span>
        <span className="value">{info.designation}</span>
        
        <span className="field">Date of birth</span>
        <span className="value">{info.dob}</span>
        
        <span className="field">Expiry date</span>
        <span className="value">{info.expiry}</span>
      </div>

      <form onSubmit={e => e.preventDefault()}>
        <input
          value={info.fullName}
          type="text"
          placeholder="fullname"
          onChange={e => setInfo({...info, fullName: e.target.value})}
        />
        <input
          value={info.designation}
          type="text"
          placeholder="Designation"
          onChange={(e) => updateField('designation', e.target.value)}
        />
        <input
          value={info.dob}
          type="date"
          placeholder="Date of birth"
          onChange={(e) => updateField('dob', e.target.value)}
        />
        <input
          value={info.expiry}
          type="date"
          placeholder="Expiry date"
          onChange={(e) => updateField('expiry', e.target.value)}
        />
      </form>
    </>
  )
}

export default IdCard
