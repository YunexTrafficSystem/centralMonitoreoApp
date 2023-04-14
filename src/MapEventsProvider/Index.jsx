import { createContext, useState } from 'react'


const MapEventsContext = createContext() 

function MapEventsProvider({ children }) {

  return (
    <MapEventsContext.Provider
      value={{

      }}
    >
      { children }
    </MapEventsContext.Provider>
  )
}

export { MapEventsProvider }