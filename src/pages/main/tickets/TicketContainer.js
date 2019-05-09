import React,{ Component } from 'react'

import { Route , Redirect , withRouter} from 'react-router-dom'
import BScroll from 'better-scroll'
// 功能组件
import { Header , Icon  } from '@Commons'
// 样式组件
import { TicketWrapper ,TicketHeaderLeft , TicketContent }  from './styledComponents'
// 子组件
import TicketNavBar from './TicketNavBar'
import TicketMovies from './TicketMovies'
import TicketCinemas from './TicketCinemas'



class TicketContainer extends Component{
    constructor(){
        super()
        this.scroll = {
            tool: null
        }
    }
    async componentDidMount(){
        this.scroll.tool = new BScroll(this.ticket, {
            pullUpLoad: {
                threshold: 50
            },
            click: true
        })

        let resData = await this.axios({
            url:'/bddt/location/ip',
            params:{
                ak:'EajH3hpCLeGgNMbnPqbVl1Bm9PWGD0HO'
            }
        })
        console.log(11,resData)

    }
    shouldComponentUpdate (props, state) {
        // 如果main的状态变化（更改显示的组件）的时候，main会rerender，导致此组件也会rerender -》 redirect
        let { pathname } = props.location
        let { pathname: _pathname } = this.props.location
        // 当再main中进行去掉路径 replace('/')的时候，阻止此组件rerender
        if ( pathname === '/' && (_pathname === '/movies' || _pathname === '/cinemas')) return false;
        
        return true
    }


    render(){
        return(
            <TicketWrapper  ref={el=>this.ticket=el}>
                <div>
                    <Header
                        icon={<TicketHeaderLeft><span>北京</span><Icon type={'angle-down'}/></TicketHeaderLeft>}
                    >
                        <TicketNavBar/>
                    </Header>
                    <TicketContent>
                        <Route path='/' exact render={()=>{
                            if ( this.props.selectedTab ) return ''
                            return <Redirect to='/movies' />
                        }}/>
                        <Route path='/movies' exact component={(props) => <TicketMovies {...props} scroll = { this.scroll } />}/>
                        <Route path='/cinemas' exact component={(props) => <TicketCinemas {...props} scroll = { this.scroll } />}/>
                    </TicketContent>
                </div>

            </TicketWrapper>
        )
    }
}

export default withRouter(TicketContainer)