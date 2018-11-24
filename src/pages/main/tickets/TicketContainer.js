import React,{ Component } from 'react'

import { Route , Redirect , withRouter} from 'react-router-dom'
// 功能组件
import { Header , Icon  } from '@Commons'
// 样式组件
import { TicketWrapper ,TicketHeaderLeft , TicketContent }  from './styledComponents'
// 子组件
import TicketNavBar from './TicketNavBar'
import TicketMovies from './TicketMovies'
import TicketCinemas from './TicketCinemas'



class TicketContainer extends Component{
    shouldComponentUpdate (props, state) {
        // 如果main的状态变化（更改显示的组件）的时候，main会rerender，导致此组件也会rerender -》 redirect
        let { pathname } = props.location
        let { pathname: _pathname } = this.props.location
        // 当再main中进行去掉路径 replace('/')的时候，阻止此组件rerender
        if ( pathname === '/' && (_pathname === '/movies' || _pathname === '/cinemas')) return false;
        
        return true
    }
    render(){
        // console.log(this.props)
        return(
            <TicketWrapper>
                <Header
                    icon={<TicketHeaderLeft><span>北京</span><Icon type={'angle-down'}/></TicketHeaderLeft>}
                >
                    <TicketNavBar/>
                </Header>
                <TicketContent>
                    <Route path='/' exact render={()=>{
                        return <Redirect to='/movies' />
                    }}/>
                    <Route path='/movies' exact component={(props) => <TicketMovies {...props}/>}/>
                    <Route path='/cinemas' exact component={(props) => <TicketCinemas {...props}/>}/>
                </TicketContent>

            </TicketWrapper>
        )
    }
}

export default withRouter(TicketContainer)