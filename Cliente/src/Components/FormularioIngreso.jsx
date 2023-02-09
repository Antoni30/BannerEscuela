import InputsIngreso from "./Molecula/InputsIngreso"
import Boton from "./Molecula/Boton"

export default function FormularioIngreso() {
  return (
    <form method="POST">
        <InputsIngreso name="Ingresa Usuario" id="ingresoUsuario" tipo="text" placeholder="Usuario"/>
        <InputsIngreso name="Ingresa Contraseña" id="ingresoContra" tipo="password" placeholder="Contraseña"/>
        <Boton name="Ingresar"/>
    </form>
  )
}
