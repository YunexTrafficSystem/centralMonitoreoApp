import L from 'leaflet'

const Fav = L.icon({
  iconUrl: './src/Assets/fav.svg',
  iconRetinaUrl: './src/Assets/fav.svg',

  shadowSize: null,
  iconAnchor: null,
  shadowAnchor: null,
  popupAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-traffic-icon'
})

export { Fav }