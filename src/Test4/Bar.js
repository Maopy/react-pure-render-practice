import React, { Component } from 'react'
// import immutableRenderDecorator from '../immutableRenderDecorator'
import shouldComponentUpdate from '../shouldComponentUpdate'
import '../App.css'

class Bar extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = shouldComponentUpdate.bind(this)
  }
  
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
