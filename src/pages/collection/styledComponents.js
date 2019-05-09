import styled from 'styled-components'

export const CollectionWrap = styled.div`
    width:${window.innerWidth}px;
`
export const CollectionList = styled.ul`
    padding:0 10px;
    width:100%;
    background:#fff;
`
export const CollectionItem = styled.li`
    height:130px;
    width:100%;
    padding: 12px 0;
    border-bottom:1px solid #ebebeb;
    display:flex;
    position:relative;
    .delectItem{
        position:absolute;
        width:15px;
        height:15px;
        right:10px;
        top:15px;
        border-radius:40%;
        background:rgba(0,0,0,0.1);
        text-align:center;
        line-height:15px;
    }
    .imgBox{
        width:20%;
        margin-right:14px;
        img{
            height:100%;
            width:100%;
        }
    }
    .filmContent{
        flex:1;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        color: #666;
        font-size: 10px;
        .filmName{
            color: #000;
            font-weight:bold;
            font-size: 17px;
        }
    }
`