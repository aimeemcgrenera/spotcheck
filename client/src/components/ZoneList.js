import React from 'react';
import ZoneSearch from './ZoneSearch';
import SpotNew from '../containers/SpotNew';
import './Index.css';

function ZoneList(props) {
  const zones = props.zones.map((zone) =>
    <div key={zone.id}>
      <p>Zone number: {zone.zone}</p>
      <p>Number Range: {zone.address_range_low}  -  {zone.address_range_high}</p>
      <p>Street: {zone.street_direction} {zone.street_name}</p>
      -----------------------------------------
    </div>
  );
  return(
    <div>
      {zones}
    </div>
  )
}

export default ZoneList;
