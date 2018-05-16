import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchZones } from '../actions/zones';
import ZoneList from '../components/ZoneList';
import { bindActionCreators } from 'redux'

class ZonesPage extends React.Component {

  componentDidMount(){
    this.props.fetchZones()
  }


  render() {
    const zones = this.props.zones

    return (
      <div className="ZonesContainer">

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {zones: state.zones}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchZones: fetchZones
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ZonesPage);
