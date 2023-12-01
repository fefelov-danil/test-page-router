import {ChangeEvent, useState} from "react";

export const ClientComponent = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  return (
    <div className="m-10">
      <p className="text-center">Клиентская компонента</p>
      <p className="text-center">
        <input className="bg-slate-500" type="text" onChange={handleChange} value={value}/>
      </p>
    </div>
  )
}