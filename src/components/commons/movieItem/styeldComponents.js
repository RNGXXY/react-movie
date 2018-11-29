import styled from 'styled-components';

export const ItemBox = styled.div`
    height:127px;
    padding: 12px 12px;
    border-bottom: 1px solid #e7e7e7;
    display : flex ;
    justify-content:spance-between;
    align-items:center;
    .img-box{
        width:66px;
        height:100%;
        img{
            width:100%;
            height:100%;
        }
    }
    .content{
        flex:1 1;
        padding:10px;
        height:100%;
        display : flex ;
        flex-direction:column;
        justify-content:spance-between;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        .title{
            flex:1 1;
            
            color: #666;
            font-size: 16px;
        }
        .worker{
            height:20px;
            line-height: 20px;
            width:100%;
            justify-content:spance-between;
            overflow: hidden;
            text-overflow:ellipsis;
        }

    }
    .choose{
        width:46px;
        height:26px;
        position:relative;
        z-index:10;
        img{
            width:100%;
            height:100%;
        }
        p{
            width:100%;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            border-radius: 5px;
        }
        .preBuy{
            color: rgb(107,188,203);
            border: 1px solid rgb(107,188,233);
        }
        .wantWatch{
            border: 1px solid rgb(247, 68, 68) ;
            color: rgb(247, 68, 68) ;
        }
    }
`