import React, { Component } from 'react'
import { fromJS } from 'immutable'
// import immutableRenderDecorator from '../immutableRenderDecorator'
import shouldComponentUpdate from '../shouldComponentUpdate'
import '../App.css'

import Foo from './Foo'
import Bar from './Bar'

class Test4 extends Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = shouldComponentUpdate.bind(this)
  }
  
  state = {
    data: fromJS({
      foo: {
        bar1: 1,
        bar2: 2
      },
      bar3: 3
    })
  }
  
  handleClick = () => {
    this.setState(({data}) => ({
      data: data.setIn(['foo', 'bar2'], Math.round(Math.random() * 9 + 1))
    }))
  }

  render () {
    let data = this.state.data
    return (
      <div className='wrapper'>
        <Foo payload={data.get('foo').toJS()} />
        <Bar payload={data.get('bar3')} />
        <button onClick={this.handleClick}>Update</button>
      </div>
    )
  }
}

export default Test4
