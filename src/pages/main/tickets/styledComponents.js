import styled from 'styled-components'

export const TicketWrapper = styled.div`
    height:100%;
    width:100%;
`

export const TicketHeaderLeft = styled.p`
    width:45px;
    height:100%;
    display:flex;
    justify-content:space-between;
`


export const TicketNavBarWrapper = styled.div`
    width:130px;
    height:28px; 
    line-height:28px; 
    border: 1px solid #F74444;
    border-radius: 10px ; 
    position:relative;
`

export const TicketNavBarItem = styled.div`
    width:50%;
    height:100%;
    text-align:center;
    float:left;
    color: #F74444;
    transition: all 0.3s;
    position: relative;
    z-index:2;
    color: ${props => props.active ? '#fff' : '#F74444'};
    /* background: ${props => props.active ? '#F74444' : '#fff'}; */
    border-radius: 10px ; 
`

export const TicketNavBarSlider = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: ${props => props.active === '/movies' ? '0' : '50%'};
    width: 50%;
    height: 100%;
    background: #F74444; 
    border-radius: 10px; 
    transition: all 0.3s;

`

export const TicketContent = styled.div`
    position:relative
`
export const TicketTabContent = styled.div`
    position: absolute;  
    top: 0;
    left: 0;
    width: 100%;

`
export const TickenMovieHeader = styled.div`
    height:46px;
    .headerSwitch{
        background:none !important;
        border:none !important;
    }
`