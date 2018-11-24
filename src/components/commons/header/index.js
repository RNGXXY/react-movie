import React,{ Component } from 'react'

// 样式组件
import { HeaderContainer } from './styledComponents'
class Header extends Component{

    render(){
        return(
            <HeaderContainer>
                <div className = "header-left">{this.props.icon}</div>
                <div className = "header-center">{this.props.children}</div>
                <div className = "header-right">{this.props.rightContent}</div>
            </HeaderContainer>
        )
    }
}

export default Header