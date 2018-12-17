import React,{ Component} from 'react'
import { Button } from 'antd-mobile';
import { connect } from 'react-redux'

import * as actionCreators from './store/actionCreators'
class Index extends Component{
  render = ()=>{
    const { btnText,changeBtnText } = this.props
    return(
      <div>
         <Button onClick={()=>changeBtnText("别点我")}>{btnText}</Button>
      </div>
    )
  }
}
// 获取数据
const mapStateToProps = (state) => ({
  btnText:state.getIn(['site', 'btnText'])
})
// 定义事件action
const mapDispatchToProps = (dispatch) => ({
  changeBtnText(name){
    dispatch(actionCreators.setBtnText(name))
  },
})
export default connect(mapStateToProps,mapDispatchToProps)(Index)
