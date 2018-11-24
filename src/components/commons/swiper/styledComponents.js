import styled from 'styled-components'

export const SwiperWrapper = styled.div`
    width:100%;
    height:100%;
    /* padding-bottom: 10px; */
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    position: relative;
    background:#fff;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
   
`

export const SwiperTitle = styled.div`
    height: 45px;
    line-height: 45px;
    background: url('https://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png') no-repeat 0 11px;
    background-size: 3px 23px;
    padding-left: 8px;
    padding-right: 12px;
    font-size: 16px;
    color: #1a1a1a;
`

export const SwiperList = styled.div`
    width:100%;
    flex:1 1 ;
    .swiper-common-bigbox{
        height:100%;
        .swiper-common-item{
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            .swiper-common-img-box{
                flex:1 1;
                img{
                    height:100%;
                    width:100%;
                }
            }
            .swiper-content{
                padding:0 12px;
                height:23px;
                text-align:center;
                line-height:23px;
                font-size:14px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
    }
`

