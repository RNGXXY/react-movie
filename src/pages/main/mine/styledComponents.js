import styled from 'styled-components';

export const MineWrapper = styled.section`
    height:100%;
    width:100%;
    background:#efefef;
    padding-top:44px;
    .page-head{
        height:100px;
        padding: 20px 10px;
        background-color: #fff;
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size: 16px;
        .head-left{
            width:16.66%;
            height:100%;
            .img-box{
                width:100%;
                height:100%;
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
        .head-center{
            flex:1 1 ;
            height:100%;
            padding-left: 10px;
            display:flex;
            flex-direction:column ;
            justify-content:center;
        }
        .head-right{
            width:30px;
        }
    }
`

export const MineTabs = styled.div`
    margin-top: 10px;
    padding: 18px 0 13px;
    height: 93px;
    background:#fff;
    .tablist{
        height: 100%;
        width: 100%;
        display:flex;
        .tabItem{
            flex: 1 1 ;
            display:flex;
            flex-direction:column;
            align-items:center;
            font-size:15px;
            color: #1a1a1a;
            img{
                height:37px;
                width:37px;
            }
            p{
                margin-top: 5px;
            }
        }
    }
`

export const MineListWrap = styled.div`
    margin-top: 10px;
    background-color: #fff;
    color: #1a1a1a;
    font-size: 15px;
    .mineListItem{
        height:41px;
        padding: 0 12px;
        .mineListItemContent{
            width:100%;
            height:100%;
            border-bottom: 1px solid #dbdbdb;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .pull-left{
                display:flex;
                align-items:center;
                img{
                    height:16px;
                    width: 16px;
                }
                p{
                    margin-left:10px;
                }
            }
            
        }
    }
`