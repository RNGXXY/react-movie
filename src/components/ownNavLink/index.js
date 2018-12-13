import React from 'react'
import { NavLink,withRouter } from 'react-router-dom'
import styled from 'styled-components'


const OwnLinkItem = (props)=>{
    // 要渲染成什么元素
    let Tag = props.tag || 'a'
    // 要加的类名
    let _class = props.className || ''
    let _activeClassName = props.activeClassName || 'active'
    // 判断是否要加active
    let isActive = props.exact ? props.location.pathname === props.to : props.location.pathname.startsWith(props.to)
     // 加空格
    let className = ( props.nav && isActive ) ? _class + ' ' + _activeClassName : _class
    // Link和NavLink生成a标签通过href进行路由跳转，我们使用onClick事件来进行路由跳转
    return <Tag className = {className} 
    // 通过withRouter
        onClick = { ()=> props.history.push(props.to) }>{props.children}
    </Tag>
}


// 自己实现的Link组件，因为内部需要调用history的路由相关api，而Link组件又不是一个路由组件（会自动包Route，并能得到context中的路由相关属性），所以想要使用到这些api，需要利用withRouter的高阶组件来进行处理
export const OwnLink = props => {   
    let Item = withRouter(OwnLinkItem)
    return (
        <Item {...props}/>
    )
}


// styled.xx`aaaa`,styled.xx本身是一个函数，跟上模板字符串会执行这个函数，在函数中接收到模板字符串的内容
// 这个函数会返回一个组件，将得到的样式生成随机类名放如style中，为组件生成真正的dom
// const Nav = style.a``    生成的Nav组件相当于是一个a标签    

// 自己封装的NavLink，既可以使用tag属性，又可以动态设置activeClass，没样式的
export const OwnNavLink = (props)=>{
    // if( !props.tag ) return <ActiveNavLink {...props}/>
    // OwnLinkItem外面报了一个withRouter，其实是包了一个Route
    // Rouet会给OwnNavLink身上挂很多属性
    const Item = withRouter(OwnLinkItem)
    return  <Item {...props} nav/>
}
 


// 为react-router的Native修改默认样式
// NavLink在点击到的时候会自动为dom加上一个active类名
// 判断当有active类名的时候就会有样式
export const ActiveNavLink = styled(NavLink)` 
    &.active {
        color:tomato;
    }
    &.selected {
        color: blue;
    }
    color:#333; 
`

// 为自己封装的ownNavLink添加样式
// OwnStyleLink拿到的东西都会给OwnLink
export const ActiveOwnStyleNavLink = styled(OwnNavLink)`
    &.active {
        color:tomato;
    }
    &.selected {
        color: blue;
    }
    color:#333; 
`



