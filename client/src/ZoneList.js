import React from 'react';

const ZoneList = (zones) => {
  function listZones() {
    return zones.map(zone => {
      return (
        <div className="col-lg-12">
          <div className="col-lg-6 col-lg-offset-3 well">
          
          </div>
        </div>
      )
    })
  }

  return(
    <div>
      {listZones()}
    </div>
  )
}

export default ZoneList
