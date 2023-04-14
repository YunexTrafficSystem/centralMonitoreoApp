import { Marker } from 'react-leaflet'
import { Modal } from 'antd'
const { info } = Modal
import { InformationTabs } from '../InformationTab/Index'
import { CPUInformation } from './CPUInformation'
import { Pass } from './Pass'
import { Fail } from './Fail'

function LocationMarker({ data }) {

  const showInformationConfirm = (point) => {
    // Recibir de forma implicita la data, desde el map
    info({
      title: `${point.shortName} (TTS)`,
      content: (
        <>
          <CPUInformation
            name={point.shortName}
            address={point.address}
            controllerType={point.controllerType}
            ip={point.ip}
          />
          <InformationTabs 
            point={point}
          />
        </>
        
      ),
      okText: 'Cerrar',
    })
  }

  return (
    data.map((point) => (
      <Marker
        key={point.id}
        position={point.coords}
        icon={point.operative ? Pass : Fail}
        eventHandlers={{
          dblclick: () => {
            showInformationConfirm(point)
          }
        }}
      />
    ))
  )
}

export { LocationMarker }