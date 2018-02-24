import React,{ Component } from 'react'
import PropTypes from 'prop-types'

class SouthChinaSea extends Component {
  render() {
    const { width, height } = this.props
    return(
      <g
        transform={`translate(${width - 180},${height - 120})scale(0.5)`}
        stroke='black'
        fill='#2A333D'
      >
        <title>South China Sea</title>
        <line id="svg_1" y2="7" x2="145" y1="7" x1="20" />
        <line id="svg_2" y2="24" x2="6" y1="7" x1="20" />
        <line id="svg_3" y2="195" x2="145" y1="7" x1="145" />
        <line id="svg_4" y2="195" x2="6" y1="24" x1="6" />
        <line id="svg_5" y2="195" x2="145" y1="195" x1="6" />
        <path id="svg_6" d="m6,31.5l9,7.5l15,9l15,4l18,0l17,-14l21,-31L20,7L6,24z" />
        <path id="svg_7" d="m113,7l10,25l11,-25z" />
        <path id="svg_9" d="m46.5,66.5l14.5,-6.5l-1,13l-7,7l-15,4l8.5,-17.5z" />
        <line id="svg_10" y2="46.5" x2="132.5" y1="31.5" x1="141.5" />
        <line id="svg_11" y2="76.5" x2="115.5" y1="61.5" x1="121.5" />
        <line id="svg_12" y2="111.5" x2="110.5" y1="92.5" x1="110.5" />
        <line id="svg_13" y2="147.5" x2="101.5" y1="127.5" x1="108.5" />
        <line id="svg_14" y2="177.5" x2="78.5" y1="163.5" x1="91.5" />
        <line id="svg_15" y2="188.5" x2="39.5" y1="184.5" x1="54.5" />
        <line id="svg_16" y2="158.5" x2="11.5" y1="172.5" x1="17.5" />
        <line id="svg_17" y2="132.5" x2="39.5" y1="142.5" x1="24.5" />
        <line id="svg_18" y2="98.5" x2="37.5" y1="113.5" x1="40.5" />
      </g>
    )
  }
}

export default SouthChinaSea