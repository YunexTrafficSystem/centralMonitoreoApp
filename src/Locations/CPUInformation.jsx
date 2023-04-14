import { LedState } from "./LedState"

function CPUInformation({ name, address, controllerType, ip }) {
  return (
    <div className="flex-container">
      <LedState />
      <div>
        <p>Nombre: {name}</p>
        <p>Tipo de controlador: {controllerType}</p>
        <p>Dirección: {address}</p>
        <p>IP: {ip}</p>
      </div>
    </div>
  ) 
}

export { CPUInformation }