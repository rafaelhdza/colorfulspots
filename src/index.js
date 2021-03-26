import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import {all} from './test';
mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsaGR6YSIsImEiOiJja2dzeHJjbnMwZzE3MnJtNWV6cHVsam9sIn0.7oigwdpk6AYK5VqUZq3phg';


class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          lng: 5,
          lat: 34,
          zoom: 2,
          business: all
        };
      }
        
      componentDidMount() {
        const map = new mapboxgl.Map({
          container: this.mapContainer,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [this.state.lng, this.state.lat],
          zoom: this.state.zoom
        });
      


        map.on('load', function (e) {
          /* Add the data to your map as a layer */
          map.addLayer({
            "id": "locations",
            "type": "symbol",
            /* Add a GeoJSON source containing place coordinates and information. */
            "source": {
              "type": "geojson",
              data: {
                "type": "FeatureCollection",
                "features": [{
                "type": "Feature",
                "properties": {
                  "name":""
                },
                "geometry": {
                "type": "Point",
                "coordinates":""
                  } 
                }]
              }
            },
            "layout": {
              "icon-image": "marker-15",
              "icon-allow-overlap": true,
            }
          });
        });




      }
      

      render() {
        return (
          
          <div>
            
            <div class='sidebar pad2'>
              <ul>{this.state.business.map(b =>{
                return <li>{b.name}</li>
              })}
                
              </ul>
            </div>

            <div ref={el => this.mapContainer = el} className="mapContainer"/>
          </div>
        )
      }
    
    
    
    
    
    
    
    }
     
    ReactDOM.render(<Application />, document.getElementById('app'));