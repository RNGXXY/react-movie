import styled from 'styled-components'

export const ActiveWrapper = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column; 
    background:#fff;
`

export const ActiveTitle = styled.div`
    height: 45px;
    line-height: 45px;
    background: url('https://movie.miguvideo.com/lovev/miguMovie/images/icon/module-icon.png') no-repeat 0 11px;
    background-size: 3px 23px;
    padding-left: 8px;
    padding-right: 12px;
    font-size: 16px;
    color: #1a1a1a;
`

export const ActiveList = styled.div`
    flex:1 1;
    .active-box{
        height:100%;
    }
`

export const ActiveImg = styled.div`
    width: 100%;
    height:100%;
    img{
        width: 100%;
        height:100%;
    }
`