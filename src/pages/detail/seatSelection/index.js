import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Icon } from '@Commons'
import { connect } from 'murlin-connect'
// 样式组件
import {
  SelectModal,
  SelectWrap,
  SelectHeader,
  SelectBody,
  SelectFooter

} from './styledComponents'


class SeatSelection extends Component {
  constructor(props) {
    super(props)
    let seatList = []
    for (let i = 1; i <= 12; i++) {
      let seatListItem = []
      for (let j = 1; j <= 10; j++) {
        let seatListItemItem = {}
        seatListItemItem.seat = j
        seatListItemItem.isSelled = false
        seatListItemItem.isClicked = false
        seatListItem.push(seatListItemItem)
      }
      seatList.push(seatListItem)
    }
    this.state = {
      selectOrderList: [],   // 选中的座位表
      price: 29.9,
      arr: seatList,
    }
  }



  // 获取当前座位情况
  onGetSeatState = async () => {
    let resData = await this.axios(`/cms/seat/getSeatById?movieId=${this.props.movieId}`)
    if (resData.data.code == 200) {
      if (resData.data.data.length) {
        let newArr = this.state.arr
        resData.data.data.forEach((item, index) => {
          let keyName = Object.keys(item)[0]
          newArr[keyName][item[keyName]].isSelled = true
        })
        this.setState({
          arr: newArr
        })
      }
    }
  }

  // 控制选中的座位
  onHandleIsClicked = (row, list, isClicked, isSelled) => {
    if (isSelled) return false
    let newArr = this.state.arr
    let newSelectOrderList = this.state.selectOrderList
    if (isClicked) {
      let sindex = 0
      newSelectOrderList.some((item, index) => {
        if (item.row == row && item.list == list) {
          sindex = index
          return true
        }
      })
      newSelectOrderList.splice(sindex, 1)
    } else {
      if (newSelectOrderList.length >= 5) {
        return false
      }
      newSelectOrderList.push({ row, list })
    }

    newArr[row][list].isClicked = !newArr[row][list].isClicked
    this.setState({
      arr: newArr,
      selectOrderList: newSelectOrderList
    })
  }

  // 点击确认选座
  onSureSeat = () => {
    if(!Object.keys(this.props.sign.userInfo).length){
      this.props.history.push('/sign')
    }else if (this.state.selectOrderList.length ){
      this.occupySeat()
    }
  }

  // 占座
  occupySeat = async ()=>{
    let seatList = []
    this.state.selectOrderList.forEach((item, index) => {
      let seatListItem = {}
      seatListItem[item.row]=item.list
      seatList.push(seatListItem)
    })
    let resDate = await this.axios({
      method:'post',
      url:'/cms/seat/setSeatList',
      data:{
        movieId:this.props.movieId,
        movieName:this.props.fileName,
        seatList,
      }
    })
    if(resDate.data.code == 200 ){
      let newArr = this.state.arr
      seatList.forEach((item, index) => {
        let keyName = Object.keys(item)[0]
        newArr[keyName][item[keyName]].isSelled = true
      })
      // 生成订单
      this.generateOrder()  
      this.setState({
        arr: newArr,
        selectOrderList:[]
      })
    }
  }

  // 生成订单
  generateOrder = () => {
    this.axios({
      method:'post',
      url:'/cms/orderList/addOrder',
      data:{
        userId:this.props.sign.userInfo.userId,
        movieId:this.props.movieId,
        userName:this.props.sign.userInfo.userName,
        orderTime:String(new Date().getTime()),
        movieName : this.props.fileName,
        money : (this.state.selectOrderList.length * this.state.price).toFixed(2),
        number : this.state.selectOrderList.length ,
        state : '已完成' ,
        cinema : '万达电影院',
        orderContent:this.state.selectOrderList
      }
    })
  }

  componentDidMount() {
    // 发送请求,获取当前座位情况
    this.onGetSeatState()

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
              <Icon type={'times'} />
            </div>
          </SelectHeader>
          <SelectBody imageUrl={this.props.imageUrl}>
            {
              this.state.arr.map((items, indexs) => (
                items.map((item, index) => (
                  <div
                    key={Math.random()}
                    className='seatItem'
                    onClick={() => this.onHandleIsClicked(indexs, index, item.isClicked, item.isSelled)}
                  >
                    <div
                      className='seatItemBox'
                      style={{ background: item.isSelled ? 'tomato' : item.isClicked ? 'tomato' : 'transparent' , display:'flex', justifyContent:'center',alignItems:'center',color:'#fff' }}>
                      {
                        item.isSelled ? '占' : ''
                      }
                    </div>
                  </div>
                ))
              ))
            }
          </SelectBody>
          <SelectFooter>
            <div className='selections'>
              <p>已选座位：{this.state.selectOrderList.length >= 5 && <span>最多只能选5个座位哦</span>}</p>
              <div className='selectionsList'>
                {
                  this.state.selectOrderList.map((item, index) => (
                    <div key={index} className='selectionsInfo'>
                      <div className='seatInfo'>{item.row}排{item.list}座</div>
                      <div className='price'>￥{this.state.price}</div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div
              className='selectBtn'
              onClick={this.onSureSeat}>
              {
                this.state.selectOrderList.length > 0 && <span>￥{(this.state.selectOrderList.length * this.state.price).toFixed(2)}&nbsp;&nbsp;</span>
              }
              <span>确认选座</span>
            </div>
          </SelectFooter>
        </SelectWrap>
      </SelectModal>
    )
  }
}

export default withRouter(connect(SeatSelection, [{ name: 'order', state: ['orderList'] },{name:'sign',state:['userInfo']}]))