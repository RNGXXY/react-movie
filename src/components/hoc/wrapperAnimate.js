
import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

// 处理动画的高阶组件
const wrapperAnimate = (Uicomponent) => {
    return class extends Component {
        render () {
            let { location, match } = this.props
            // 取出路由中保留的方向状态，准备添加对应的类名~
            let state = this.props.location.state || { dir: 'left' }
            let { dir } = state 
            return (<CSSTransition
                        in = { !!match }
                        classNames={{
                            enter: 'animated',
                            enterActive: dir === 'left' ? 'slideInRight' : 'slideInLeft',
                            exit: 'animated',
                            exitActive: dir === 'left' ? 'slideOutLeft' : 'slideOutRight'
                        }}
                        mountOnEnter = {true}
                        unmountOnExit = {true}
                        timeout={300}
                    >
                        <Uicomponent {...this.props}/>
                    </CSSTransition>
            )
        }
    }
}

export default wrapperAnimate