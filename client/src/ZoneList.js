import React from 'react';

export default function ZoneList(props) {
  const zones = props;

  const zoneRows = zones.map((zone, id) => (
      <td>{zone.street_name}</td>
    ))

  return(
    <div>
      {zoneRows}
    </div>
  )
}
