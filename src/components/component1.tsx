export const Component1 = () => {
  const text = "text1"

  return (
    <div className="m-10">
      <p className="text-center">Серверная компонента</p>
      <p className="text-center">{text}</p>
    </div>
  )
}