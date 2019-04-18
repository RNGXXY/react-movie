import React,{ Component } from 'react'
import {connect} from 'murlin-connect'
// 功能组件
import { Header , Icon } from '@Commons' 

import { SignWrapper , SignLogo , SignForm , SignBtn , SendCode} from './styledComponents'
class Sign extends Component{
  constructor(props){
    super(props)
    this.state={
      phoneNum:'',      // 手机号码
      code:'',          // 验证码
      isSending:false,  // 正在发送验证码
      sendContent:'发送验证码'  // 发送验证码按钮内容
    }
  }

  // 返回上一页
  goBack=()=>{
    this.props.history.push('/')
  }

  // 发送验证码
  onSendCode=()=>{
    if(!this.state.phoneNum){
      this.phoneNum.placeholder='请输入电话号码'
      return false
    }
    if(!this.state.isSending){
      this.setState({
        isSending:!this.state.isSending,
      })
      let second=60
      this.timer = setInterval(()=>{
        second -- ;
        this.setState({
          sendContent:second+'秒后重新发送'
        })
        if(second==0) {
          clearInterval(this.timer)
          this.setState({
            sendContent:'发送验证码',
            isSending:true
          })
        }
        if(second == 55){
         this.setState({
           code:parseInt(Math.random()*1000000+99999)
         })
         this.onChange()
        }
      },1000)
    }
  }

  // 点击登录
  onSign=()=>{
    if(this.state.phoneNum && this.state.code){
      let userInfo = {
        phoneNum:this.state.phoneNum
      }
      this.props.sign_actions.getUserInfo(userInfo)
      this.props.history.goBack()
    }
  }

  // 受控组件修改input的value值
  onChange=()=>{
    this.code.value=this.state.code
  }

  // input失去焦点事件
  onBlur=()=>{
    this.setState({
      phoneNum:this.phoneNum.value
    })
  }

  // 组件销毁是终止定时器，防止内存泄漏
  componentWillUnmount(){
    clearInterval(this.timer)
  }


  render(){
    return(
      <SignWrapper>
        <Header
          icon={<Icon type={'arrow-left'}/>}
          onClickLeft={this.goBack}
        >
          登录
          
        </Header>
        <SignLogo>
          <img src='/images/logo.jpeg' />
        </SignLogo>
        <SignForm> 
          <form>
            <input placeholder='手机号' type="tel" maxLength='11' ref={el=>this.phoneNum=el} onBlur={this.onBlur}/>
            <input placeholder='验证码' ref={el=>this.code=el} onChange={()=>this.onChange()}/>
            <SendCode onClick={this.onSendCode}>{!this.state.isSending ? this.state.sendContent :this.state.sendContent}</SendCode>
          </form>
          <SignBtn onClick={this.onSign}>
            登录
          </SignBtn>
        </SignForm>
        
      </SignWrapper>
    )
  }
}

export default connect(Sign,[{name:'sign',state:['userInfo']}])
