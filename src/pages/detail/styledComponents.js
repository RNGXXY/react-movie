import styled from 'styled-components'

export const DetailWrapper = styled.section`
    height:${()=>`${document.documentElement.clientHeight}px`};
    width: 100%;
    padding-bottom:42px;
    position:relative;
`
export const DetailContent = styled.div`
    height:100%;
    width: 100%;
    overflow:auto;
`

export const DetailHeader = styled.div`
    height:400px;
    overflow:hidden;
    background:#fff;
    position:relative;
    .goBack{
        position:fixed;
        left:10px;
        top: 10px;
        font-size:30px;
        color: #888;
        z-index:988;
    }
    .detail-pic-wrap{
        height: 224px;
        position:relative;
        .shadow-box-one{
            position: absolute;
            width: 100%;
            height: 75px;
            left: 0;
            bottom: 0;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.8) 98%, #fff 100%);
        }
    }
    .detail-head-info{
       height:245px;
        padding: 0 10px;
        margin-top: -75px;
        position:relative;
        z-index: 2;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        overflow:hidden;
        .head-info-top{
            height:148px;
            display:flex;
            .info-img-box{
                width:95px;
                height: 100%;
            }
            .info-list{
                flex: 1 1;
                margin-left:10px;
                font-size: 13px;
                color: #1a1a1a;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                .info-name{
                    font-size: 18px;
                    color: #fff;
                    margin-top:15px;
                }
                .info-score{
                    color: #F8B246;
                    font-size: 14px;
                }
            }
        }
        .head-info-describe{
            flex:1 1;
            font-size: 14px;
            color: #666;
            padding-top: 19px;
            overflow:hidden;
        }
        .text-center{
            height: 20px;
            text-align:center;
        }
    }    
`

export const DetailBody = styled.div`
    margin-top: 10px;
    position: relative;
    .performers{
        height:213px;
        margin-bottom:10px;
    }
    .videos-stills{
        height:114px;
        margin-bottom:10px;
    }
    .recommend{
        height:231px;
    }
`
export const DetailFooter = styled.div`
    height:42px;
    color: #3a3a3a;
    
    background:#fff;
    display:flex;
    border-top: 1px solid #f0f0f0;
    
    .footer-flex{
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:20px;
        .foot-title{
            font-size: 13px;
            margin-left:10px;
        }
    }
    .footer-left{
        width:25%;
    }
    .footer-center{
        width:25%;
    }
    .footer-right{
        width:50%;
        background:#FEC22C;
        color: #fff;
    }
`