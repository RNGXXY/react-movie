import styeld from 'styled-components'

export const HomeWrapper = styeld.section`
    height:100%;
    width:100%;
    background:#efefef;
    .ss{
        height:200px;
        width:100%;
    }
`
export const HomeSwiperWrapper = styeld.div`
    position:relative
    width:100%;
    
    height:8.986667rem;
    overflow:hidden;
    z-index:5;
    .wingblank{
        height:100% !important;
        .space-carousel {
            height:100% !important;
            padding: 16px;
            padding-top:40px;
            overflow: hidden;
        }
    }
    
`

export const BgBlur = styeld.div`
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    z-index:-1;
    background:${props=>`url('https://movie.miguvideo.com/publish/i_www${props.src}') 50% 50%`} ;
    filter: blur(10px);
    transition: all 0.5s;
`

export const HomeSwiperImgBox = styeld.a`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    boxShadow: 2px 1px 1px rgba(0, 0, 0, 0.2);
    top:${props=>props.top ? '-20px' : '0px'}
`
export const HomeCommonSwiper = styeld.div`
    width:100%;
    height:286px;
    padding-bottom:10px;
    background:#efefef;
`