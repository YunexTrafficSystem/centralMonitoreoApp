import { Menu } from 'antd'
import { useMapEvents } from 'react-leaflet/hooks'
import {
  ZoomOutOutlined,
  ZoomInOutlined,
  ReloadOutlined,
  HeartOutlined,
  AimOutlined,
  EnvironmentOutlined
} from '@ant-design/icons'

function SideBar({ initialLocation }) {
  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, map.getZoom())
    }
  })

  const handleCurrentPosition = () => {
    map.locate({
      enableHighAccuracy: true
    })
  } 

  const items = [
    {
      label: 'Acercar',
      key: 'zoomIn',
      icon: (
        <a onClick={() => map.zoomIn()}>
          <ZoomInOutlined/>
        </a>
      ),
    },
    {
      label: 'Alejar',
      key: 'zoomOut',
      icon: (
        <a onClick={() => map.zoomOut()}>
          <ZoomOutOutlined />
        </a>
      ),
    },
    {
      label: 'Reiniciar',
      key:'reset',
      icon: (
        <a onClick={() => map.flyTo(initialLocation, map.getZoom())}>
          <ReloadOutlined />
        </a>
      )
    },
    {
      label: 'Mi ubicación',
      key: 'location',
      icon: (
        <a onClick={handleCurrentPosition}>
          <AimOutlined />
        </a>
      )
    },
    {
      label: 'Favoritos',
      key: 'favorites',
      icon: <HeartOutlined />
    },
    {
      label: 'Puntos',
      key: 'points',
      icon: <EnvironmentOutlined />
    }
  ]

  return (
    <Menu 
      style={{
        width: 50,
        zIndex: 1050,
        borderRadius: 5,
        position: 'inherit',
        margin: 10
      }}
      items={items}
      mode="inline" 
      theme='dark'
      inlineCollapsed={true}
    />
  )
}

export { SideBar }