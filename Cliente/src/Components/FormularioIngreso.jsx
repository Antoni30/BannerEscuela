import InputsIngreso from "./Molecula/InputsIngreso"
import Boton from "./Molecula/Boton"

export default function FormularioIngreso() {
  return (
    <form className=" flex w-96 h-96 bg-gray-400 rounded-lg m-auto flex-col border-solid justify-center items-center border-2" method="GET">
          <InputsIngreso name="Ingresar Usuario" id="ingresoUsuario" tipo="text" placeholder="Usuario"/>
          <InputsIngreso name="Ingresar Contraseña" id="ingresoContra" tipo="password" placeholder="Contraseña"/>
          <Boton name="Ingresar"/>
          <br />
          <a href="#Contraseña" className="text-white">¿Olvido su Contraseña?</a>
          <a href="#VerificarUsaurio" className="text-white">Verifique su Usuario</a>
    </form>
  )
}
