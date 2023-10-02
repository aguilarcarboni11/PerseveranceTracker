import React from 'react'
import Papa from 'papaparse'
import { useState, useEffect } from 'react'
import NavBar from '../Inner-components/NavBar'
import Header from '../Inner-components/Header'
import { Link } from 'react-router-dom'
import Map from '../Inner-components/Map'

const MapDesktop = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    Papa.parse('Assets/CSV/waypoints.csv', {
    header: true,
    skipEmptyLines: true,
    download: true,
    complete: function (results) {
        var arr = []
        var tempData = results.data
        for (var elem of tempData) {
          const x1 = parseFloat(elem.lon)
          const y1 = parseFloat(elem.lat)
          arr.push([y1,x1])
        }
        setData(arr)
      },
    });
  },[]);

  return (
    <div className={'container'} style={{backgroundImage: "url(Assets/IMG/map.png)", backgroundSize:'cover'}}>
      <NavBar />
      <Link to='/' style={{textDecoration:'none'}}>
      <Header />
      </Link>
      <div className='mapContainer' style={{marginLeft:'12vmax'}}> 
        <Map data = {data} height={'30vmax'} width={'50vmax'}/>
      </div>
      <img className = 'nasaLogo' src={'Assets/IMG/nasaLogo.png'} alt="Nasa Logo" />
    </div>
  )
}

export default MapDesktop