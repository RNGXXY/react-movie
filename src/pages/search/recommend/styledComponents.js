import styled from 'styled-components'

export const RecommendWrapper = styled.div`
    font-size: 14px;
    color: #666;
    width:100%;
    .hotTitle{
        height: 50px;
        padding:0 20px;
        display:flex;
        align-items:center;
        border-bottom: 1px solid #ebebeb;
        font-weight:bold;
    }
    .hotList{
        width:100%;
        display:flex;
        flex-wrap:wrap;
    }
    .hotItem{
        height: 50px;
        width:50%;
        padding:0 20px;
        display:flex;
        align-items:center;
        border-bottom: 1px solid #ebebeb;
    }
`