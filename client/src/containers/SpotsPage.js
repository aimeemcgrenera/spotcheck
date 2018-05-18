import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpots } from '../actions/spots';
import SpotsList from '../components/SpotsList';
import { bindActionCreators } from 'redux'

class SpotsPage extends React.Component {

  componentDidMount() {
    if (this.props.spots.length === 0){
      this.props.fetchSpots()
    }
  }


  render() {
    const spots = this.props.spots
    return (
      <div className="SpotsContainer" align="center">
        <h3><strong>Previous Spots Entered: </strong></h3><br/>
        <SpotsList spots={spots} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {spots: state.spots.spots}
}


export default connect(mapStateToProps, {fetchSpots})(SpotsPage);
