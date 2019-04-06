import React, { Component } from 'react'
import {connect} from 'murlin-connect'
import { handle_time } from '@Libs/decorator' 
// 功能组件
import { Header, Icon } from '@Commons'
import { OrderWrapper, OrderList } from './styledComponents'

@handle_time
class Orderontainer extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        console.log(this.props.order.orderList);
    }
    render() {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10]
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
                        this.props.order.orderList.length > 0 && this.props.order.orderList.map((item, index) => (
                            <li key={index} className='orderItem'>
                                <div className='orderItemInfo'>
                                    <p className='orderItemInfoName'>{item.filmName}&nbsp;&nbsp;&nbsp;{item.selectOrderList.length}张</p>
                                    <p className='orderItemInfoTime'>{this.handleTime(item.time)}</p>
                                    <p className='orderItemInfoCinema'>{item.cinema}</p>
                                </div>
                                <div className='orderItemCost'>
                                    <p className='orderItemMoney'>总价：{item.price}元</p>
                                    <p className='orderItemState'>已完成</p>
                                </div>
                            </li>
                        ))
                    }

                </OrderList>
            </OrderWrapper>
        )
    }
}

export default connect(Orderontainer,[{name:'order',state:['orderList']}])