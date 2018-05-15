import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchSpots } from '../actions/spots';
import SpotsList from '../components/SpotsList';

class SpotsPage extends Component {

  componentDidMount() {
    this.props.fetchSpots()
  }

  render() {
    const spots = this.props;
    return (
      <div className="SpotsContainer">
        <SpotsList spots={spots} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    spots: state.spots
  };
}

export default connect(mapStateToProps, { fetchSpots })(SpotsPage);
