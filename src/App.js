import React, { Component } from 'react'

import Test1 from './Test1'
import Test2 from './Test2'
import Test3 from './Test3'
import Test4 from './Test4'

class App extends Component {
  render () {
    return (
      <div>
        <p>对未经 Pure 优化的 Component 进行数据未改变的赋值 —— 全部 re render</p>
        <Test1 />
        <p>对经过 Pure 优化的 Component 进行深层子对象赋值 —— 改变的 Component 没有 re render</p>
        <Test2 />
        <p>对 Immutable 优化的 Component 进行数据未改变赋值 —— 没有 re render</p>
        <Test3 />
        <p>对 Immutable 优化的 Component 进行深层子对象赋值 —— 改变的 Component re render 其他 Component 没有 re render</p>
        <Test4 />
      </div>
    )
  }
}

export default App
