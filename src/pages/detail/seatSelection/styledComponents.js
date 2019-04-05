import styled from 'styled-components'

export const SelectModal = styled.div`
  z-index:999;
  width:${() => `${document.documentElement.clientWidth}px`};
  height:${() => `${document.documentElement.clientHeight}px`};
  position:absolute;
  background:rgb(0,0,0,0.5);
  bottom:0;
  left:0;
`
export const SelectWrap = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction :column;
`
export const SelectHeader = styled.div`
  height:80px;
  background:#fff;
  padding:10px;
  position:relactive;
  .title{
    width:100%;
    height:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:tomato;
    font-size:20px;
  };
  .fileName{
    flex:1;
    display:flex;
    align-items:center;
    color:#333;
    font-size:20px;
  };
  .closeSelect{
    position: fixed;
    right: 10px;
    top: 10px;
    font-size: 30px;
    color: #888;
    z-index: 999;
  }
`

export const SelectBody = styled.div`
  flex-grow: 1;
  background-image:url(https://movie.miguvideo.com${props => props.imageUrl});
  background-size:cover;
  display:flex;
  flex-wrap: wrap;
  padding:20px;
  justify-content:center;
  align-items:centerl;
  .seatItem{
    width:10%;
    height:30px;
    padding:2px;
    .seatItemBox{
      width:100%;
      height:100%;
      border:1px solid #f4f4f4;
    }
  }
`

export const SelectFooter = styled.div`
  height: 120px;
  width:100%;
  background:#fff;
  display:flex;
  flex-direction :column;
  .selections{
    flex:1;
    display:flex;
    flex-direction :column;
    justify-content:space-around;
    .selectionsList{
      height:40px;
      display:flex;
      .selectionsInfo{
        width:20%;
        height:100%;
        display:flex;
        flex-direction :column;
        justify-content:center;
        align-items:center;
        border:1px dashed;
      }
      
    }
  };
  .selectBtn{
    height:42px;
    width:100%;
    background:tomato;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:16px;
    color:#fff;
  }
`