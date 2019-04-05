import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import uuid from 'uuid'
import * as MainStyled from './styledComponents'
import { withRouter } from 'react-router-dom'

import SeeFilmIcon from '@As/images/mainMenu-seeFilm.png'
import SeeFilmIconActive from '@As/images/mov-active.png'
import TicketsIcon from '@As/images/mainMenu-tickets.png'
import TicketsIconActive from '@As/images/mainMenu-ticketsActive.png'
import FindIcon from '@As/images/mainMenu-find.png'
import FindIconActive from '@As/images/find-active.png'
import MineIcon from '@As/images/mainMenu-member.png'
import MineIconActive from '@As/images/mine-active.png'

// 子组件
import HomeContainer from './home/HomeContainer'
import TicketContainer from './tickets/TicketContainer'
import MinetContainer from './mine/MineContainer'
import FindContainer from './find/FindContainer'

class TabBarExample extends Component {
    constructor(props) {
        super(props);
        let selectedTab = 'watch'
        this.state = {
            selectedTab: selectedTab,
            hidden: false,
            fullScreen: true, // 是否全屏
            tabs: [
                { id: uuid(), title: '看片', selected: 'watch', component:<HomeContainer/>, icons: { default: SeeFilmIcon, active: SeeFilmIconActive }  },
                { id: uuid(), title: '购票', selected: 'tickets', component: <TicketContainer selectedTab = {  selectedTab }/>, icons: { default: TicketsIcon, active: TicketsIconActive }  },
                { id: uuid(), title: '发现', selected: 'find', component: <FindContainer/>, icons: { default: FindIcon, active: FindIconActive }  },
                { id: uuid(), title: '我的', selected: 'mine', component: <MinetContainer/>, icons: { default: MineIcon, active: MineIconActive }  },
            ]
        };
    }
    componentDidMount () {
        if ( this.props.location.pathname === '/movies' ) {
            this.setState({
                selectedTab: 'tickets'
            })
        }
    }
    componentDidUpdate (props, {selectedTab}) {
        // 如果此时，状态改变说明切换组件，判断如果是从menu切换出来的话，就更改路由为/
        let { selectedTab: stab } = this.state
        if ( selectedTab !== stab && selectedTab === 'tickets' ) {
          this.props.history.replace('/')
        }
        if ( selectedTab !== stab && stab === 'tickets' ) {
          this.props.history.push('/movies')
        }
      }

    renderTabItems(){
        let { tabs } = this.state
        return tabs.map(tab=>(
            <TabBar.Item
                title={tab.title}
                key={tab.id}
                icon={<MainStyled.MianTabIcon url={tab.icons.default}/>}
                selectedIcon={<MainStyled.MianTabIcon url={tab.icons.active}/>}
                selected={this.state.selectedTab === tab.selected}
                onPress={() => {
                    this.setState({
                        selectedTab: tab.selected,
                    });
                }}
            >
                {tab.component}
            </TabBar.Item>
        ))
    }
    render() {
        return (
        <MainStyled.MainWrapper >
            <TabBar
            unselectedTintColor="#949494"   //未选中的字体颜色
            tintColor="#F74444" //选中的字体颜色
            barTintColor="white"
            hidden={this.state.hidden}
            >
            {this.renderTabItems()}
            </TabBar>
        </MainStyled.MainWrapper>
        );
    }
}
  
export default withRouter(TabBarExample)