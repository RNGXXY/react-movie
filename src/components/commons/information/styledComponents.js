import styled from 'styled-components'

export const InfoListWrapper = styled.div`
    width:100%;
    margin-bottom: 10px;
    padding-bottom: 10px;
`

export const InfoListTitle = styled.div`
    height: 45px;
    line-height: 45px;
    background: url('https://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png') no-repeat 0 11px;
    background-size: 3px 23px;
    padding-left: 8px;
    padding-right: 12px;
    font-size: 16px;
    color: #1a1a1a;
`

export const InfoListTime = styled.div`
    height: 35px;
    line-height: 35px;
    padding: 0 12px;
    background: #efefef;
    font-size: 16px;
`
export const InfoListList = styled.ul`
    width:100%;
    padding-bottom: 10px;
`

export const InfoItemWrapper = styled.li`
    height:120px;
    padding: 8px 12px;
    border-top: 1px solid #e7e7e7;
    display:flex;
    flex-flow:column;
    justify-content:space-between;
    .news-click{
        height: 78px;
        display: block;
        width: 100%;
        .news-con{
            height: 100%;
            width:100%;
            display:flex;
            justify-content:space-between;
            .news-name{
                flex: 1 1;
                color: #666;
                font-size: 14px ;
            }
            .news-pic{
                width: 33%;
                height: 100%;
                img{
                    height: 100%;
                    width:100%;
                }
            }
        }
    }
    .news-origin{
        flex: 1 1;
        display:flex;
        justify-content:space-between;
        align-items:center;
        color: #999;
        font-size: 12px;
        .pull-right{
            font-size:16px;
            color:#000;
            width:30px;
            display:flex;
            justify-content:space-between;
        }
    }
`