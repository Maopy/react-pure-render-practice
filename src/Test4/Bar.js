import React, { Component } from 'react'
import '../App.css'

class Bar extends Component {
  render () {
    let styleObj = {
      backgroundColor: '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6)
    }
    return (
      <div className='item' style={styleObj}>
        {this.props.payload}
      </div>
    )
  }
}

export default Bar
