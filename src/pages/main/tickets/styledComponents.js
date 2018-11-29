import styled from 'styled-components'

export const TicketWrapper = styled.section`
    height:100%;
    width:100%;
   
    overflow:hidden;
    >div{
        padding-top:44px;
    }
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
    position:relative;
    
`
export const TicketTabContent = styled.div`
    /* position: absolute;   */
    /* height:100%; */
    width: 100%;

`
export const TickenMovieHeader = styled.div`
    height:46px;
    .headerSwitch{
        background:none !important;
        border:none !important;
    }
`

export const TabList = styled.div`
    /* display: flex; 
    align-items: center; 
    justify-content: center; */
    /* height: 1000px; */
    background: #fff;
    /* width:100%; */
`

export const CinemasHeader = styled.div`
    height:41px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .navbarCon{
        width: 88%;
        .navbar-active{
            width: 20%;
            text-align: center;
            padding-top: 8px;
            padding-bottom: 12px;
            font-size: 14px;
            border-bottom: 2px solid #F74444;
            color: #F74444;
        }
    }
    .nav-list{
        flex: 1 1;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:20px;
        color: #666;
    }
`

export const CinemasList = styled.div`
    .cinemaList{
        .cinemaItem{
            .cinemaContent{
                height: 86px;
                width: 100%;
                border-bottom: 1px solid #e7e7e7;
                padding: 5px 12px 10px;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                /* text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden; */
                .cinemaName{
                    font-size: 16px;
                    color: #666;
                    width: 100%;
                    text-overflow: ellipsis;
                    white-space: nowrap; 
                    overflow: hidden;
                }
                .cinemaAddress{
                    font-size: 14px;
                    width: 100%;
                    text-overflow: ellipsis;
                    white-space: nowrap; 
                    overflow: hidden;
                }
            }
        }
    }
`