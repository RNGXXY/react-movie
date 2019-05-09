import React, { Component } from 'react'
import { PayWrapper } from './styledComponents'
class PayPage extends Component{
    constructor(props){
        super(props)
        this.state={
            payState:'确认支付'
        }
    }
    onPay=()=>{
        this.setState({
            payState:'支付中……'
        })
        setTimeout(()=>{
            this.setState({
                payState:'支付成功'
            })
        },2000)
        setTimeout(()=>{
            this.props.history.goBack()
        },1000)
    }

    componentWillUnmount(){
        this.setState({
            payState:'确认支付'
        })
    }
    render(){
        return(
            <PayWrapper>
                <div className='payContent'>
                    <div className='payContentWrap'> 
                        <div className='payTitle'>
                            支付
                        </div>
                        <div className='payMoney'>
                            ￥{this.props.location.state ? this.props.location.state.payMoney : 0}
                        </div>
                        <div className='payState' > 
                            <p className='payBtn'>{this.state.payState}</p>
                        </div>
                    </div>
                </div>
                <div className='payFinger'>
                    <div className='imgBox' onClick={this.onPay}>
                        <img src='/images/zwzf.png'/>
                    </div>
                </div>
            </PayWrapper>
        )
    }
}

export default PayPage