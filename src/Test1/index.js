import React, { Component } from 'react'
import '../App.css'

import Foo from './Foo'
import Bar from './Bar'

class Test1 extends Component {
  state = {
    vanilla: {
      foo: {
        bar1: 1,
        bar2: 2
      },
      bar3: 3
    }
  }
  
  handleClick = () => {
    let vanilla = this.state.vanilla
    this.setState({
      vanilla
    })
  }

  render () {
    let data = this.state.vanilla
    return (
      <div className='wrapper'>
        <Foo payload={data.foo} />
        <Bar payload={data.bar3} />
        <button onClick={this.handleClick}>Update</button>
      </div>
    )
  }
}

export default Test1
