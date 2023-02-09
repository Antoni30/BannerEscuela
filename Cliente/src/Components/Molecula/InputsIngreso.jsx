
export default function InputsIngreso({name,id,tipo,placeholder}) {
  return (
    <div className="inline-block m-2">
        <label For={id} className="block w-30 m-auto" >{name}</label>
        <input id={id} type={tipo} className="border-solid px-3 border-2 block w-72 font-thin  text-gray-500" placeholder={placeholder}/>
    </div>
  )
}
