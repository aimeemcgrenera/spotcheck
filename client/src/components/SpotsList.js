import React from 'react';

function SpotsList(props) {
    const spots = props.spots.map((spot) =>
        <div key={spot.id}>
            <h6>{spot.address_number} {spot.street_direction}. {spot.street_name}</h6>
            -----------------------------------------
        </div>
      )

  return (
    <div>
      {spots}
    </div>
  );
};


export default SpotsList;
