import React,{ Component } from 'react'
import { withRouter } from 'react-router-dom'
import { TicketNavBarWrapper , TicketNavBarItem , TicketNavBarSlider} from './styledComponents'

class TicketNavBar extends Component{
    constructor(props){
        super(props)
        this.state={
            active_nav:this.props.location.pathname
        }
    }
    // 当路由切来切去的时候，改状态
    componentWillReceiveProps (props, state) {
        this.setState({ active_nav: props.location.pathname })
    }
    render(){
        let { active_nav } = this.state
        return(
            <TicketNavBarWrapper>
                <TicketNavBarItem active = {active_nav === '/movies'}
                    onClick = {() => this.handleClick('/movies', 'left')}
                >
                    影片
                </TicketNavBarItem>
                <TicketNavBarItem active = {active_nav === '/cinemas'}
                    onClick = {() => this.handleClick('/cinemas', 'right')}
                >
                    影院
                </TicketNavBarItem>
                <TicketNavBarSlider active = {active_nav}/>
            </TicketNavBarWrapper>
        )
    }

    handleClick (nav, dir) {
        // 路由切换， 并给路由中保存一个路由状态：点击的是左边的还是右边的
        this.props.history.push({pathname: nav, state:{ dir }})
    }
}

export default withRouter(TicketNavBar)