import styled from 'styled-components'

export const MainWrapper = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
`
export const MianTabIcon = styled.div`
    width: .586667rem;
    height: .586667rem;
    background: ${props=>`url(${props.url}) center center /  .56rem .56rem no-repeat`};
`