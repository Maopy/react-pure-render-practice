import React, { Component } from 'react'

import Test1 from './Test1'
import Test2 from './Test2'
import Test3 from './Test3'
import Test4 from './Test4'

class App extends Component {
  render () {
    return (
      <div>
        <p>对未经 Pure 优化的 Component 进行数据未改变的赋值</p>
        <Test1 />
        <p>对经过 Pure 优化的 Component 进行深层子对象赋值</p>
        <Test2 />
        <Test3 />
        <Test4 />
      </div>
    )
  }
}

export default App
