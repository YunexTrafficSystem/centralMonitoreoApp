import { MapView } from './MapView'
import { MapEventsProvider } from '../MapEventsProvider'
import './App.css'

function App() {
  return (
    <MapEventsProvider>
      <MapView />
    </MapEventsProvider>
  )
}

export { App }
