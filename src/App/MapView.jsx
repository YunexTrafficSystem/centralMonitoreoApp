import { useState } from 'react'
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import { DropMenu } from '../DropMenu/Index'
import { LocationMarker } from '../Locations/Index'
import { lights } from '../assets/data.json'
import { SideBar } from './SideBar'
import { NavBar } from '../NavBar'
import 'leaflet/dist/leaflet.css'

function MapView() {
  const initialLocation = [4.6947887, -74.1121391]
  const [location, setLocation] = useState(initialLocation)

  return (
    <>
      <NavBar />
      <MapContainer
        center={initialLocation}
        zoom={14}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker data={lights} />
        <DropMenu />
        <SideBar initialLocation={initialLocation}/>
      </MapContainer>
    </>
  )
}

export { MapView }