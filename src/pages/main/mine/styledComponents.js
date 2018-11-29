import styled from 'styled-components';

export const HomeWrapper = styled.section`
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