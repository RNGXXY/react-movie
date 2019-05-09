import React, { Component } from 'react'
import { Header , Icon} from '@Commons'
export default class Prototype extends Component{
    render(){
        return(
            <div style={{width:window.innerWidth}}>
                <Header
                    icon={<Icon type={'arrow-left'} />}
                    onClickLeft={this.props.history.goBack}
                >
                    用户须知
                </Header>
                <div style={{height:'44px',width:'100%'}}></div>   
                <img src='/images/ysxy.png' style={{width:'100%'}}/>
            </div>
        )
    }
}