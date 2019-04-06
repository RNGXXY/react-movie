import React,{ Component } from 'react'

// 样式组件
import { HeaderContainer } from './styledComponents'
class Header extends Component{

    render(){
        return(
            <HeaderContainer>
                <div className = "header-left" onClick={this.props.onClickLeft}>{this.props.icon}</div>
                <div className = "header-center" onClick={this.props.onClickMid}>{this.props.children}</div>
                <div className = "header-right" onClick={this.props.onClickRight}>{this.props.rightContent}</div>
            </HeaderContainer>
        )
    }
}

export default Header