import React, { Component } from 'react'
import {connect} from 'murlin-connect'
import { handle_time } from '@Libs/decorator' 
import { Result } from 'antd-mobile';
// 功能组件
import { Header, Icon } from '@Commons'
import { OrderWrapper, OrderList } from './styledComponents'
const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;
@handle_time
class Orderontainer extends Component {
    constructor(props) {
        super(props)
        this.state={
            orderList:[]
        }
    }

    // 在这里做路由跳转有问题
    async componentDidMount(){
        if(Object.keys(this.props.sign.userInfo).length){
            let resData = await this.axios(`/cms/orderList/dataListByUser?userId=${this.props.sign.userInfo.userId}`)
            if(resData.data.code == 200){
                this.setState({
                    orderList:resData.data.data
                })
            }
        }
        
    }
    render() {
        return (
            <OrderWrapper>
                <Header
                    icon={<Icon type={'arrow-left'} />}
                    onClickLeft={this.props.history.goBack}
                >
                    订单中心
                </Header>
                <OrderList>
                    {
                        this.state.orderList.length > 0 && this.state.orderList.map((item, index) => (
                            <li key={index} className='orderItem'>
                                <div className='orderItemInfo'>
                                    <p className='orderItemInfoName'>{item.movieName}&nbsp;&nbsp;&nbsp;{item.number}张</p>
                                    <p className='orderItemInfoTime'>{this.handleTime(Number(item.orderTime))}</p>
                                    <p className='orderItemInfoCinema'>{item.cinema}</p>
                                </div>
                                <div className='orderItemCost'>
                                    <p className='orderItemMoney'>总价：{Number(item.money).toFixed(2)}元</p>
                                    <p className='orderItemState'>{item.state}</p>
                                </div>
                            </li>
                        ))
                    }
                    {
                        Object.keys(this.props.sign.userInfo).length == 0 && (
                            <Result
                            img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
                            // title="请登录先"
                            buttonText='请登录先'
                            // message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
                            onButtonClick = {()=>this.props.history.push('/sign')}
                            />
                        )
                    }
                    {
                        !this.state.orderList.length && Object.keys(this.props.sign.userInfo).length > 0 && (
                           <Result
                            img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
                            title="么得记录"
                            // message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
                            />
                        )
                    }
                </OrderList>
            </OrderWrapper>
        )
    }
}

export default connect(Orderontainer,[{name:'order',state:['orderList']},{name:'sign',state:['userInfo']}])