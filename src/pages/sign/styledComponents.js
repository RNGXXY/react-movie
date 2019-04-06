import styled from 'styled-components'

export const SignWrapper = styled.div`
  height:100%;
  width:100%;
  padding-top:44px;
`
export const SignLogo = styled.div`
  height:260px;
  width:100%;
  display:flex;
  justify-content:center;
  align-content:center;
  background:#fff;
  justify-content:center;
  img{
    height:100%;
    width:60%;
  }
`

export const SignForm = styled.div`
  height:200px;
  width:100%;
  display: flex;
  background:#fff;
  flex-direction:column;
  justify-content:space-between;
  form{
    display: flex;
    position:relative;
    flex-direction:column;
    margin-top: 0.3rem;
    padding: 0 0.5rem;
    input{
      height:50px;
      border:none;
      border-bottom:1px solid;
      border-color:gray;
      font-size:16px;
      color: #31363E;
      padding:0 10px;
    }
  }
`

export const SignBtn = styled.div`
  width:100%;
  height:44px;
  background:skyblue;
  border-radius:22px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#fff;
  font-size:20px;
`
export const SendCode = styled.div`
  position:absolute;
  bottom:0;
  right:20px;
  width:28%;
  height:40px;
  background:skyblue;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#fff;
  font-size:14px;
`