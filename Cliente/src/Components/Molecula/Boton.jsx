export default function Boton({ name }) {
  return (
    <button className="border-solid border-2 border-gray-400 w-40 h-10 font-thin rounded-full text-gray-500 hover:bg-gray-600 hover:text-white"  type="submit">
      {name}
    </button>
  );
}
