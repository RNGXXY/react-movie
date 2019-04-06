import styled from 'styled-components'

const WINDOWWIDTH = window.innerWidth;
const WINDOWHEIGHT = window.innerHeight;

export const OrderWrapper = styled.div`
  /* width:${WINDOWWIDTH}px;
  height:${WINDOWHEIGHT}px; */
  padding-top:44px;
`

export const OrderList = styled.ul`
  width:100%;
  .orderItem{
    height:150px;
    width:100%;
    padding:10px;
    margin-bottom:10px;
    display:flex;
    flex-direction:column;
    background:#fff;
    .orderItemInfo{
      height:100px;
      width:100%;
      display:flex;
      flex-direction:column;
      justify-content:space-around;
      border-bottom:1px dashed #888;
      .orderItemInfoName{
        font-size: 15px;
        color: #000;
      }
      .orderItemInfoTime{
        font-size: 12px;
        color: #888;
      }
      .orderItemInfoCinema{
        font-size: 12px;
        color: #888;
      }
    }
    .orderItemCost{
      display:flex;
      flex:1;
      justify-content:space-between;
      align-items:center;
      .orderItemMoney{
        font-size: 13px;
        color: #888;
      }
      .orderItemState{
        font-size: 13px;
        color: #333;
      }
    }
  }
`