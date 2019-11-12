import React, { Component } from 'react';
import maps from 'qqmap'
import './Location.css';

export class Location extends Component {
  locationRef = React.createRef();
  componentDidMount() {
    this.init()
  }
  init = () => {
    maps.init('VGWBZ-QZRLX-O2K4A-7EGNB-NZF2F-XBFDD', (e) => {
      const pointX = 29.6047700000;
      const pointY = 116.2469600000;
      const center = new maps.LatLng(pointX, pointY);
      console.log(this, maps)
      const map = new maps.Map(this.locationRef.current, {
        // 地图的中心地理坐标。29.6047700000,116.2469600000
        center,
        zoom: 16,
      });
      new maps.Marker({
        position: center,
        map: map
      });
    })
  }
  render() {
    return (
      <div ref={this.locationRef} className='location_wrap'>
      </div>
    )
  }
}

export default Location
