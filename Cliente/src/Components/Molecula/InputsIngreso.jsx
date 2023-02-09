
export default function InputsIngreso({name,id,tipo,placeholder}) {
  return (
    <div className="inline-block">
        <label For={id} className="block w-30 m-auto" >{name}</label>
        <input id={id} type={tipo} className="border-solid border-2 block w-30 font-thin rounded-full text-gray-500" placeholder={placeholder}/>
    </div>
  )
}
