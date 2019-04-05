import React, { Component } from 'react'
import { Icon } from '@Commons'
// 样式组件
import { SelectModal,
         SelectWrap,
         SelectHeader,
         SelectBody,
         SelectFooter

} from './styledComponents'


class SeatSelection extends Component {
  constructor(props){
    super(props)
    this.state={
      selectOrderList:[],   // 选中的座位表
      arr : [
        [{seat:1,isSelled:false,isClicked:false},{seat:2,isSelled:false,isClicked:false},{seat:3,isSelled:false,isClicked:false},{seat:4,isSelled:false,isClicked:false},{seat:5,isSelled:false,isClicked:false},
         {seat:6,isSelled:false,isClicked:false},{seat:7,isSelled:false,isClicked:false},{seat:8,isSelled:false,isClicked:false},{seat:9,isSelled:false,isClicked:false},{seat:10,isSelled:false,isClicked:false}],
        [{seat:1,isSelled:false,isClicked:false},{seat:2,isSelled:false,isClicked:false},{seat:3,isSelled:false,isClicked:false},{seat:4,isSelled:false,isClicked:false},{seat:5,isSelled:false,isClicked:false},
         {seat:6,isSelled:false,isClicked:false},{seat:7,isSelled:false,isClicked:false},{seat:8,isSelled:false,isClicked:false},{seat:9,isSelled:false,isClicked:false},{seat:10,isSelled:false,isClicked:false}],
        [{seat:1,isSelled:false,isClicked:false},{seat:2,isSelled:false,isClicked:false},{seat:3,isSelled:false,isClicked:false},{seat:4,isSelled:false,isClicked:false},{seat:5,isSelled:false,isClicked:false},
         {seat:6,isSelled:false,isClicked:false},{seat:7,isSelled:false,isClicked:false},{seat:8,isSelled:false,isClicked:false},{seat:9,isSelled:false,isClicked:false},{seat:10,isSelled:false,isClicked:false}],
        [{seat:1,isSelled:false,isClicked:false},{seat:2,isSelled:false,isClicked:false},{seat:3,isSelled:false,isClicked:false},{seat:4,isSelled:false,isClicked:false},{seat:5,isSelled:false,isClicked:false},
         {seat:6,isSelled:false,isClicked:false},{seat:7,isSelled:false,isClicked:false},{seat:8,isSelled:false,isClicked:false},{seat:9,isSelled:false,isClicked:false},{seat:10,isSelled:false,isClicked:false}],
        [{seat:1,isSelled:false,isClicked:false},{seat:2,isSelled:false,isClicked:false},{seat:3,isSelled:false,isClicked:false},{seat:4,isSelled:false,isClicked:false},{seat:5,isSelled:false,isClicked:false},
         {seat:6,isSelled:false,isClicked:false},{seat:7,isSelled:false,isClicked:false},{seat:8,isSelled:false,isClicked:false},{seat:9,isSelled:false,isClicked:false},{seat:10,isSelled:false,isClicked:false}],
        [{seat:1,isSelled:false,isClicked:false},{seat:2,isSelled:false,isClicked:false},{seat:3,isSelled:false,isClicked:false},{seat:4,isSelled:false,isClicked:false},{seat:5,isSelled:false,isClicked:false},
         {seat:6,isSelled:true,isClicked:false},{seat:7,isSelled:false,isClicked:false},{seat:8,isSelled:false,isClicked:false},{seat:9,isSelled:false,isClicked:false},{seat:10,isSelled:false,isClicked:false}],
        [{seat:1,isSelled:false,isClicked:false},{seat:2,isSelled:true,isClicked:false},{seat:3,isSelled:false,isClicked:false},{seat:4,isSelled:false,isClicked:false},{seat:5,isSelled:false,isClicked:false},
         {seat:6,isSelled:false,isClicked:false},{seat:7,isSelled:false,isClicked:false},{seat:8,isSelled:false,isClicked:false},{seat:9,isSelled:false,isClicked:false},{seat:10,isSelled:false,isClicked:false}],
        [{seat:1,isSelled:false,isClicked:false},{seat:2,isSelled:false,isClicked:false},{seat:3,isSelled:false,isClicked:false},{seat:4,isSelled:false,isClicked:false},{seat:5,isSelled:false,isClicked:false},
         {seat:6,isSelled:false,isClicked:false},{seat:7,isSelled:false,isClicked:false},{seat:8,isSelled:false,isClicked:false},{seat:9,isSelled:false,isClicked:false},{seat:10,isSelled:false,isClicked:false}],
        [{seat:1,isSelled:false,isClicked:false},{seat:2,isSelled:false,isClicked:false},{seat:3,isSelled:false,isClicked:false},{seat:4,isSelled:false,isClicked:false},{seat:5,isSelled:false,isClicked:false},
         {seat:6,isSelled:false,isClicked:false},{seat:7,isSelled:false,isClicked:false},{seat:8,isSelled:false,isClicked:false},{seat:9,isSelled:false,isClicked:false},{seat:10,isSelled:false,isClicked:false}],
        [{seat:1,isSelled:false,isClicked:false},{seat:2,isSelled:false,isClicked:false},{seat:3,isSelled:false,isClicked:false},{seat:4,isSelled:false,isClicked:false},{seat:5,isSelled:false,isClicked:false},
         {seat:6,isSelled:false,isClicked:false},{seat:7,isSelled:true,isClicked:false},{seat:8,isSelled:false,isClicked:false},{seat:9,isSelled:false,isClicked:false},{seat:10,isSelled:false,isClicked:false}],
        [{seat:1,isSelled:false,isClicked:false},{seat:2,isSelled:false,isClicked:false},{seat:3,isSelled:false,isClicked:false},{seat:4,isSelled:false,isClicked:false},{seat:5,isSelled:false,isClicked:false},
         {seat:6,isSelled:false,isClicked:false},{seat:7,isSelled:false,isClicked:false},{seat:8,isSelled:false,isClicked:false},{seat:9,isSelled:false,isClicked:false},{seat:10,isSelled:false,isClicked:false}],
        [{seat:1,isSelled:false,isClicked:false},{seat:2,isSelled:false,isClicked:false},{seat:3,isSelled:false,isClicked:false},{seat:4,isSelled:false,isClicked:false},{seat:5,isSelled:false,isClicked:false},
         {seat:6,isSelled:false,isClicked:false},{seat:7,isSelled:false,isClicked:false},{seat:8,isSelled:false,isClicked:false},{seat:9,isSelled:false,isClicked:false},{seat:10,isSelled:false,isClicked:false}],
      ]
    }
  }

  componentDidMount(){
    // 发送请求
  }

  onHandleIsClicked = (row,list,isClicked,isSelled) => {
    if(isSelled) return false
    let newArr = this.state.arr
    let newSelectOrderList = this.state.selectOrderList
    if (isClicked) {
      let sindex = 0
      newSelectOrderList.some((item,index)=>{
        if(item.row == row && item.list == list){
          sindex = index
          return true
        }
      })
      newSelectOrderList.splice(sindex,1)
    }else{
      if(newSelectOrderList.length>=5){
        return false
      }
      newSelectOrderList.push({row,list})
    }
    
    newArr[row][list].isClicked=!newArr[row][list].isClicked
    this.setState({
      arr:newArr,
      selectOrderList:newSelectOrderList
    })
  }
  render() {
    return (
      <SelectModal>
        <SelectWrap>
          <SelectHeader>
            <div className='title'>在线选座</div>
            <div className='fileName'>{this.props.fileName}</div>
            <div className='closeSelect'
                onClick={this.props.onHandleShowSelection}
            >
                <Icon type={'times'}/>
            </div>
          </SelectHeader>
          <SelectBody imageUrl={this.props.imageUrl}>
          {
            this.state.arr.map((items,indexs)=>(
              items.map((item,index)=>(
                <div
                  key={Math.random()} 
                  className='seatItem'
                  onClick={()=>this.onHandleIsClicked(indexs,index,item.isClicked,item.isSelled)}
                >
                  <div 
                    className='seatItemBox'  
                    style={{background:item.isSelled?'tomato':item.isClicked?'tomato':'transparent'}}>
                  </div>
                </div>
              ))
            ))
          }
          </SelectBody>
          <SelectFooter>
            <div className='selections'>
              <p>已选座位：{this.state.selectOrderList.length>=5 && <span>最多只能选5个座位哦</span>}</p>
              <div className='selectionsList'>
              {
                this.state.selectOrderList.map((item,index)=>(
                  <div key={index} className='selectionsInfo'>
                    <div className='seatInfo'>{item.row}排{item.list}座</div>
                    <div className='price'>￥29.9</div>
                  </div>
                ))
              }
              </div>
            </div>
            <div 
              className='selectBtn'
              onClick={this.props.onHandleShowSelection}>
              {
                this.state.selectOrderList.length>0 && <span>￥{(this.state.selectOrderList.length*29.9).toFixed(2)}&nbsp;&nbsp;</span>
              }
              <span>确认选座</span>
            </div>
          </SelectFooter>
        </SelectWrap>
      </SelectModal>
    )
  }
}

export default SeatSelection

