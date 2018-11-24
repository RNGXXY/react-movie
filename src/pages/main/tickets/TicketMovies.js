import React,{ Component } from 'react'
import { wrapperAnimate }  from '@Hoc'
import { TicketTabContent , TickenMovieHeader } from './styledComponents'

import { SegmentedControl ,Tabs} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
class TicketMovies extends Component{

    render(){
        console.log(111)
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
            <TicketTabContent>
                 <StickyContainer>
                    <Tabs tabs={tabs}
                        initalPage={'t2'}
                        renderTabBar={renderTabBar}
                        tabBarActiveTextColor={'#F74444'}
                        tabBarUnderlineStyle={{borderColor:'#F74444'}}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of first tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of second tab
                        </div>
                        
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