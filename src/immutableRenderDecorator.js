/**
 * Created by Maopy on 16/8/23.
 */
import React, { Component } from 'react'
import shouldComponentUpdate from './shouldComponentUpdate'

/**
 * Makes the given component "pure".
 *
 * @param {object} Target Component.
 */
export default (Target) => {
  class Wrapper extends Component {
    render() {
      return React.createElement(Target, this.props, this.props.children)
    }
  }
  
  Wrapper.prototype.shouldComponentUpdate = shouldComponentUpdate
  
  return Wrapper
}
