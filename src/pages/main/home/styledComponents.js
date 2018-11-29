import styled from 'styled-components'

export const HomeWrapper = styled.section`
   
    height:100%;
    width:100%;
    background:#efefef;
   
    overflow:hidden;
    .homeBetter{
        width:100%;
        padding-top:44px;
    }
`
export const HomeSwiperWrapper = styled.div`
    position:relative;
    width:100%;
    
    height:8.986667rem;
    overflow:hidden;
    z-index:5;
    .wingblank{
        height:100% !important;
        .space-carousel {
            height:100% !important;
            padding: .426667rem;
            padding-top:1.066667rem;
            overflow: hidden;
        }
    }
    
`

export const BgBlur = styled.div`
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    z-index:-1;
    background:${props=>`url('https://movie.miguvideo.com/publish/i_www${props.src}') 50% 50%`} ;
    filter: blur(.266667rem);
    transition: all 0.5s;
`

export const HomeSwiperImgBox = styled.a`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    boxShadow: .053333rem .026667rem .026667rem rgba(0, 0, 0, 0.2);
    top:${props=>props.top ? '-0.533333rem' : '0rem'};
`
export const HomeCommonSwiper = styled.div`
    width:100%;
    height:7.626667rem;
    padding-bottom:.266667rem;
    background:#efefef;
`

export const HomeActive = styled.div`
    width:100%;
    height:4.986667rem;
    padding-bottom:.266667rem;
    background:#efefef;
`