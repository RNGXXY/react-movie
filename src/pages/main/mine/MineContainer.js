import React,{ Component } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'murlin-connect'
// 功能组件
import { Header , Icon } from '@Commons'
// 样式组件
import { MineWrapper , MineTabs , MineListWrap } from './styledComponents'
class MainContainer extends Component{
    constructor(props){
        super(props)
    }

    // 去登录页面
    toSign=()=>{
        this.props.history.push('./sign')
    }
    render(){
        return(
            <MineWrapper>
                <Header rightContent={<Icon type={'cog'}/>}>
                    我的
                </Header>
                <div className='page-head'>
                    <div className="head-left">
                        <div className="img-box">
                            <img src="/images/defaultPhoto.png" alt=""/>
                        </div>
                    </div>
                    <div onClick={this.toSign} className="head-center">
                        <div  className="to-login">
                            {
                                !Object.keys(this.props.sign.userInfo).length ? <p>点击登录</p> : <p>{this.props.sign.userInfo.phoneNum}</p>
                            }
                        </div>
                    </div>
                    <div className="head-right">
                        <Icon type={'angle-right'}/>
                    </div>
                </div>
                <MineTabs>
                    <div className="tablist">
                        <div className="tabItem">
                            <img src="/images/colle.png" alt=""/>
                            <p>收藏</p>
                        </div>
                        <div className="tabItem">
                            <img src="/images/mov-com.png" alt=""/>
                            <p>影评</p>
                        </div>
                        <div className="tabItem">
                            <img src="/images/play-his.png" alt=""/>
                            <p>播放记录</p>
                        </div>
                    </div>
                </MineTabs>
                <MineListWrap>
                    <div className="mineListItem">
                        <div 
                            className="mineListItemContent" 
                            onClick={ ()=>{this.props.history.push('./order')}}
                        >
                            <div className="pull-left">
                                <img src="/images/order.png" alt=""/>
                                <p>我的订单</p>
                            </div>
                            <div className="pull-right">
                                <Icon type={'angle-right'}/>
                            </div>
                        </div>
                    </div>
                    <div className="mineListItem">
                        <div className="mineListItemContent">
                            <div className="pull-left">
                                <img src="/images/wallet (1).png" alt=""/>
                                <p>我的钱包</p>
                            </div>
                            <div className="pull-right">
                                <Icon type={'angle-right'}/>
                            </div>
                        </div>
                    </div>
                    <div className="mineListItem">
                        <div className="mineListItemContent">
                            <div className="pull-left">
                                <img src="/images/question.png" alt=""/>
                                <p>常见问题</p>
                            </div>
                            <div className="pull-right">
                                <Icon type={'angle-right'}/>
                            </div>
                        </div>
                    </div>
                    <div className="mineListItem">
                        <div className="mineListItemContent">
                            <div className="pull-left">
                                <img src="/images/serv-online.png" alt=""/>
                                <p>在线客服</p>
                            </div>
                            <div className="pull-right">
                                <Icon type={'angle-right'}/>
                            </div>
                        </div>
                    </div>
                    <div className="mineListItem">
                        <div className="mineListItemContent">
                            <div className="pull-left">
                                <img src="/images/shopping.png" alt=""/>
                                <p>商城</p>
                            </div>
                            <div className="pull-right">
                                <Icon type={'angle-right'}/>
                            </div>
                        </div>
                    </div>
                </MineListWrap>
            </MineWrapper>
        )
    }
}

export default withRouter(connect(MainContainer,[{name:'sign',state:['userInfo']}]))
