import React,{ Component } from 'react'
import { wrapperAnimate }  from '@Hoc'
import BScroll from 'better-scroll'
import { TicketTabContent  ,TabList } from './styledComponents'
import { inject_unmount } from '@Libs/decorator'
import { Tabs} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

import IsShowing from './isShowing'
import SoonShowing from './soonShowing'

@inject_unmount
class TicketMovies extends Component{
    constructor () {
        super()
        this.scroll = {
            tool: null
        }
        this.state = {
            commonSwiperData:[],
            activeData:[]
        }
    }

    // componentDidMount () {
    //     // 使用引用类型的特性来进行数据的传递，保证子组件中可以使用到better-scroll的实例
    //     this.scroll.tool = new BScroll(this.movie, {
    //         pullUpLoad: {
    //             threshold: 50
    //         },
    //         click: true
    //     })
    // }

    render(){
        
        const tabs = [
            { title: '正在热映' },
            { title: '即将上映' }, 
        ];
        function renderTabBar(props) {
            return (<Sticky>
                {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
            </Sticky>);
        }          
        return(
            <TicketTabContent ref={el=>this.movie=el} className='11'>
                 <StickyContainer className='22'>
                    <Tabs tabs={tabs}
                        initalPage={'t2'}
                        renderTabBar={renderTabBar}
                        tabBarActiveTextColor={'#F74444'}
                        tabBarUnderlineStyle={{borderColor:'#F74444'}}
                    >
                        <TabList >
                            <IsShowing/> 
                        </TabList>
                        <TabList >
                            <SoonShowing {...this.props}/>
                        </TabList>
                    </Tabs>
                </StickyContainer>
            </TicketTabContent>
        )
    }


    onChange = (e) => {
        console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
      }
    onValueChange = (value) => {
    console.log(value);
    }
}

export default wrapperAnimate(TicketMovies) 