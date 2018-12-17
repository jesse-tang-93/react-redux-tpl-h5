import React,{ Component} from 'react'
import { connect } from 'react-redux'

import { NoticeBar,Card,Button,Toast } from 'antd-mobile';
import path from '@/utils/path'
import * as actionCreators from './store/actionCreators'
class Index extends Component{
  btnClick(){
    Toast.success('原谅成功，但不要给他戴原谅帽哦，嘿嘿;-)', 6);
  }
  render = ()=>{
    return(
      <div className='outer'>
        <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
        原谅这个小可怜吧～原谅这个小可怜吧～原谅这个小可怜吧～原谅这个小可怜吧～原谅这个小可怜吧～他就是个笨怂
        </NoticeBar>
        <img src={path('top.png')} alt=''className='top_nanner' />
        <div className='card_box'>
          <Card className='card'>
            <Card.Body>
              <div>
               &nbsp;&nbsp;&nbsp;&nbsp;写时已是华灯初上，人散声寂，我想我此时此刻应该最清醒。昨夜种种我都清楚的记得，老婆的伤心的啼哭，气然于胸口坚定的说让我走的语气
               ，此刻的我仿佛置身与那时。我不该丢下你一人在寒风中搜寻，莫怕是受人厉色？如若受了风寒？那我万般不能原谅自己。<span>♥</span>
               <br/>
               <div className='blank'></div>
               &nbsp;&nbsp;&nbsp;&nbsp;有时候我一直想，我拥有全世界最好的女孩，善良懂事聪明伶俐，娟美细琢勇敢无畏。自己是全天下最幸运最幸福的男人了。我们虽然过的紧凑，但谈不上清苦；
               &nbsp;&nbsp;&nbsp;&nbsp;我们白天躬身工作，可晚上仍旧心照相依，每个晚上，我都会因为看到你而自足，而安稳。和你在一起的每一天，每一刻都值的细细回味。<span>♥</span><br/>
               <div className='blank'></div>
               &nbsp;&nbsp;&nbsp;&nbsp;昨天让你受了太多的委屈，其实我心里明白，我变的有很多地方开始退缩，我惧怕冷言，惧怕内心的孤单，伤心亲人的离去，内心其实万般杂陈。很多地方未顾及甚至未想到
               对你有一丝丝的关怀，原谅我吧，我心里挚爱的人。我暗自发誓，我会比以前更加爱你疼你。我甚至幻想着我们搬新家后的美丽日子。我还会为你变着花样做饭，做你最爱吃的，
               做你最想吃的。我们依旧是彼此最温暖的港湾。<span>♥</span><br/>
               <div className='blank'></div>
               &nbsp;&nbsp;&nbsp;&nbsp;如果有人问我我会怎样表达对爱人的思念和爱意，我会黯然愁苦因思念，怅然若失因离别。也会情歌笙箫对伊人，甜言蜜语话床沿。<span>♥</span>
               <br/>
               <div className='blank'></div>
               &nbsp;&nbsp;&nbsp;&nbsp;原谅我，我的爱人，我心依旧<span>♥</span>。
              </div>
            </Card.Body>
             <Button onClick={this.btnClick.bind(this)} type="ghost" className='btn' inline size="small" style={{ width:'120px'}}>点击原谅</Button>
            <Card.Footer content="" extra={<div className='text_num'>字数：快700字;-)</div>} />
          </Card>
        </div>
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
