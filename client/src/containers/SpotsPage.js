import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
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
      <div className="SpotsContainer">
        <SpotsList spots={spots} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {spots: state.spots}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSpots: fetchSpots
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotsPage);
