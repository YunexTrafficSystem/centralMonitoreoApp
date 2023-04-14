import { useState } from 'react'
import { Dropdown, Modal } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons'
import { useMapEvents } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet'
import { Fav } from '../Locations/Fav'

function DropMenu() {
  const [markers, setMarkers] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [latLng, setLatLng] = useState(null)
  const [dropCoords, setDropCoords] = useState({ x: 0, y: 0 })

  const HanddleAddMarker = (marker) => {
    // Verificación de añadidos faltante
    const newMarkers = [...markers, marker]
    setMarkers(newMarkers)
  }

  const HanddleRemoveMarker = (marker) => {
    const newMarkers = markers.filter((mark) => (
      mark !== marker
    ))
    setMarkers(newMarkers)
  }

 useMapEvents({
    contextmenu(e) {
      // logica para la creación de items dentro del mapa
      if (!showDropdown) { // Cambio de coord
        setDropCoords(e.containerPoint)
        setLatLng(e.latlng)
        setShowDropdown(true) // Emerger dropdown
      }
    }
  })

  const items = [
    {
      key: 1,
      label: (
        <a onClick={() => {
          setShowDropdown(false)
          HanddleAddMarker(latLng)
        }}>
          Añadir punto
        </a>
      )
    },
    {
      key: 2,
      danger: true,
      label: (
        <a onClick={() => {
          setShowDropdown(false)
          showDeleteConfirm()
        }}>
          Eliminar punto
        </a>
      )
    }
  ]

  const showDeleteConfirm = () => {
    Modal.confirm({
      title: '¿Eliminar punto?',
      icon: <ExclamationCircleFilled />,
      content: 'El elemento junto con su información será eliminado',
      okText: 'Si',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        HanddleRemoveMarker(latLng)
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  return (
    <>
      {markers && (
        markers.map((mark, i) => (
          <Marker
            key={i}
            icon={Fav}
            eventHandlers={{
              contextmenu: (e) => {
                if (!showDropdown) {
                  setDropCoords(e.containerPoint)
                  setLatLng(e.latlng)
                  setShowDropdown(true)
                }
              },
              dblclick: (e) => {
                showInformationConfirm()
              }
            }}
            position={mark}
          />
        ))
      )}
      <Dropdown menu={{ items }} trigger={['contextMenu']} open={showDropdown}>
        <div style={{
          position: 'absolute',
          left: `${dropCoords.x}px`,
          top: `${dropCoords.y - 25}px`
        }}> </div>
      </Dropdown>
    </>
  )
}

export { DropMenu }