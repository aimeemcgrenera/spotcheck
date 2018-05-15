import React from 'react';
import { Link } from 'react-router-dom';

const SpotsList = (props) => {
debugger
  const renderSpots = spots.map(spot =>
    <div key={spot.id}>
      <div className="SpotList">
        <p>{spot.address_number}</p>
        <p>{spot.street_direction}</p>. {spot.street_name}
      </div>
    </div>
  );

  return (
    <div>
      {renderSpots}
    </div>
  );
};


export default SpotsList;
