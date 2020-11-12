import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsaGR6YSIsImEiOiJja2dzeHJjbnMwZzE3MnJtNWV6cHVsam9sIn0.7oigwdpk6AYK5VqUZq3phg';

class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          lng: 5,
          lat: 34,
          zoom: 2
        };
      }
        
      componentDidMount() {
        const map = new mapboxgl.Map({
          container: this.mapContainer,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [this.state.lng, this.state.lat],
          zoom: this.state.zoom
        });
      }
      
      render() {
        return (
          <div>
            <div ref={el => this.mapContainer = el} className="mapContainer"/>
          </div>
        )
      }
    
    
    
    
    
    
    
    }
     
    ReactDOM.render(<Application />, document.getElementById('app'));