import React, { Component } from 'react'
// import immutableRenderDecorator from '../immutableRenderDecorator'
import shouldComponentUpdate from '../shouldComponentUpdate'
import '../App.css'

import Bar from './Bar'

class Foo extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = shouldComponentUpdate.bind(this)
  }
  
  render () {
    let data = this.props.payload
    return (
      <div style={{display: 'inline-block'}}>
        <Bar payload={data.bar1} />
        <Bar payload={data.bar2} />
      </div>
    )
  }
}

export default Foo
