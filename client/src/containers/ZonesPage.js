import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchZones } from '../actions/zones';
import ZoneList from '../components/ZoneList';
import { bindActionCreators } from 'redux'

class ZonesPage extends Component {

  componentDidMount(){
    if(this.props.zones.length === 0) {
     this.props.fetchZones()
   }
  }

  render() {
    const zones = this.props.zones

    return (
      <div className="ZonesContainer" align="center">
      <ZoneList zones={zones} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {zones: state.zones.zones}
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     fetchZones: fetchZones
//   }, dispatch);
// }

export default connect(mapStateToProps, {fetchZones})(ZonesPage);
