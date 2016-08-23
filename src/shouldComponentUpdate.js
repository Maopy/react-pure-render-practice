/**
 * Created by Maopy on 16/8/23.
 */

import shallowEqualImmutable from './shallowEqualImmutable'

export default function (nextProps, nextState) {
  const thisProps = this.props, thisState = this.state
  
  return !shallowEqualImmutable(thisProps, nextProps) || !shallowEqualImmutable(thisState, nextState)
}
