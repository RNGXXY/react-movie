import React,{ Component } from 'react'
// 功能组件
import { Header , Icon } from '@Commons'
// 样式组件
import { HomeWrapper } from './styledComponents'
class MainContainer extends Component{

    render(){
        return(
            <HomeWrapper>
                <Header 
                    rightContent={<Icon type={'cog'}/>}
                >
                我的
                </Header>
                <div className='page-head'>
                    <div className="head-left">
                        <div className="img-box">
                            <img src="/images/defaultPhoto.png" alt=""/>
                        </div>
                    </div>
                    <div className="head-center">
                        <div className="to-login">
                            <p>点击登录</p>
                        </div>
                    </div>
                    <div className="head-right">
                        <Icon type={'angle-right'}/>
                    </div>
                </div>
            </HomeWrapper>
        )
    }
}

export default MainContainer