import React, { Component } from 'react'
import '../App.css'

import Bar from './Bar'

class Foo extends Component {
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
