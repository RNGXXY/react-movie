import React, { Component } from 'react'
import { Tabs, WhiteSpace , Button , List } from 'antd-mobile';
import { SelectList } from './styledComponents'

const Item = List.Item;

class SelectTab extends Component{
    constructor(props){
        super(props)
    }

    // 
    onPress = (id,time,hall)=>{
        this.props.onHandleSceneId(id,time,hall)
        this.props.onHandleShowSelection()
    }
    
    renderContent = tab =>(
        <SelectList>
            {
                tab.shows.map(item=>(
                    <div key={item.showId} className='selectItem'>
                        <div className='time pubStyle1'>
                            <p className='firstTitle'>{item.showTime.slice(0,2)}:{item.showTime.slice(2,4)}</p>
                        </div>
                        <div className='cinemaHall pubStyle1'>
                            <p className='firstTitle'>{item.language}/{item.edition}</p>
                            <p className='secondTitle'>{item.hallName}</p>
                        </div>
                        <div className='price pubStyle1'>
                            ￥{Number(item.miguPrice)/100}
                        </div>
                        <div className='selectBtn pubStyle1'>
                        <Button
                            type="primary" 
                            inline size="small" 
                            onClick={()=>{this.onPress(item.showId,`${item.showTime.slice(0,2)}:${item.showTime.slice(2,4)}`,item.hallName)}}
                            style={{ marginRight: '4px' }}>选座</Button>
                        </div>
                    </div>
                ))
            }

        </SelectList>

    )
   
//     (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
//     <p>Content of {tab.showdate}</p>
//   </div>);

  render() {

    return (
      <div style={{height:'100%',width:'100%'}}>
        {/* <WhiteSpace /> */}
        {/* <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}> */}
        <Tabs 
            tabs={this.props.selectList} 
            renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
          {this.renderContent}
        </Tabs>
      </div>
    );
  }
}



export default SelectTab