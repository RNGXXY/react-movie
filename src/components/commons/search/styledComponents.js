import styled from 'styled-components'

export const SearchContainer = styled.div`
    padding: 8px 10px;
    display:flex;
    font-size: 16px;
    justify-content:space-between;
    align-items:center;
`

export const SearchContent = styled.div`
    height:28px;
    width: 85%;
    background:#f0f0f0;
    border-radius: 30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .search-input{
        flex:1 1;
    }
    .search-icon{
        width:34px;
        padding:0 10px;
    }
`

export const SearchInput = styled.input`
    border:none;
    outLine:none;
    width:100%;
    height:100%;
    background:#f0f0f0;
`