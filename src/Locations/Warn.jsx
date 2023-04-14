import L from 'leaflet'

const Warn = L.icon({
  iconUrl: './src/Assets/warning.svg',
  iconRetinaUrl: './src/Assets/warning.svg',

  shadowSize: null,
  iconAnchor: null,
  shadowAnchor: null,
  popupAnchor: null,
  iconSize: [30, 30],
  className: 'leaflet-traffic-icon'
})

export { Warn }