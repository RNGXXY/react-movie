import styled from 'styled-components'

export const SceneWrap = styled.div`
    z-index:990;
    /* width:${() => `${document.documentElement.clientWidth}px`};
    height:${() => `${document.documentElement.clientHeight}px`}; */
    position:absolute;
    background:#fff;
    top:0;
    left:0;
    top:0;
    left:0;
    bottom:0;
    right:0;
    border-top:1px solid gray;
`
export const BoxWrap = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    .title{
        height:41px;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:16px;
    }
    .selection{
        flex:1;
        overflow:hidden;
    }
    .ensure{
        height:41px;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        background:#FEC22C;
        color:#fff;
        font-size:16px;
        :active{
            background:tomato;
        }
    }
`

export const SpecificOptions = styled.div`
    width:100%;
    height:100%;
    .optionTitle{
        height:30px;
        line-height:30px;
    }
    .optionContent{
        display:flex;
        flex-wrap:wrap;
        width:100%;
        .optionItem{
            height: 50px;
            width:50%;
            padding:5px 10px;
            .optionItemContent{
                height: 100%;
                width:100%;
                border-radius:5px;
                border:1px solid tomato;
                display:flex;
                justify-content:center;
                align-items:center;
            }
            .selectOption{
                background:tomato;
                color:#fff;
            }
            
        }
    }
`

export const SelectList = styled.div`
    padding:0 10px;
    .selectItem{
        height:60px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom: 1px solid #e7e7e7;
        .firstTitle{
            color: #666;
            font-size:17px;
        }
        .secondTitle{
            color: #999;
            font-size:13px;
        }
        .pubStyle1{
            display:flex;
            flex-direction:column;
            justify-content:space-around;
        }
        .time{
            width:90px;
            height:100%;

        }
        .cinemaHall{
            width:105px;
            height:100%;
        }
        .price{
            flex:1;
            height:100%;
            color: #F74444;
            font-size: 18px;
        }
        .selectBtn{
            width:70px;
            height:100%;
        }
    }
`