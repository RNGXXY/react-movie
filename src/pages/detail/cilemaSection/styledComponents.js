import styled from 'styled-components'

export const CinemaWrap = styled.div`
    z-index:${props=>props.isShowScene?-1:989};
    /* width:${() => `${document.documentElement.clientWidth}px`};
    height:${() => `${document.documentElement.clientHeight}px`}; */
    position:absolute;
    background:#fff;
    top:0;
    left:0;
    bottom:0;
    right:0;
`

export const CinemaList = styled.ul`
    width:100%;
    padding:0 10px;
    .cinemaItem{
        height:70px;
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        border-bottom:1px solid #e7e7e7;
        .clinemaName{
            font-size:16px;
            color:#666;
        }
        .cinemaAddress{
            font-size:13px;
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
`