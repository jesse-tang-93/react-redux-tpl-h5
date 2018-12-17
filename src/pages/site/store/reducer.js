/*
*首页数据reducer
*/
import * as actionTypes from './constants'
import { fromJS } from 'immutable'
// 将state变为immutable对象
const defaultState  = fromJS({
  btnText: "点我", // 首页btn按钮文字
})
export default (state=defaultState, action)=> {
  switch (action.type) {
    case actionTypes.GET_BTN_TEXT:
      return state.set('btnText', action.data)
    default:
      return state
  }
}
