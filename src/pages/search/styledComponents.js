import styled from 'styled-components'

export const SearchWrapper = styled.div`
    width:100%;
    background:#fff;
`
export const SearchHeaderWrap = styled.div`
    position:fixed;
    width:100%;
    height:45px;
    background:#fff;
`

export const SearchHeader = styled.div`
    height:45px;
    width:100%;
    display:flex;
    padding:8px 10px;
    border-bottom:1px solid gray;
    .searchInput{
        display:flex;
        flex:1;
        background:#f0f0f0;
        border-radius:30px;
        align-items:center;
        .searchIcon{
            width:30px;
            height:100%;
            display:flex;
            align-items:center;
            justify-content:center;
        }
        .input{
            flex:1;
            height:100%;
            border:0;
            outline:none;
            background:#f0f0f0;
        }
    }
    .exit,.enSure{
        height:100%;
        width:15%;
        font-size: 16px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`