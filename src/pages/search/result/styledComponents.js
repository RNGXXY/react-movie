import styled from 'styled-components'

export const ResultWrapper = styled.div`
    padding:0 10px;
    .resultsList{
            width:100%;
        .resultsItem{
            height:130px;
            width:100%;
            padding: 12px 0;
            border-bottom:1px solid #ebebeb;
            display:flex;
            .imgBox{
                width:20%;
                margin-right:14px;
                img{
                    height:100%;
                    width:100%;
                }
            }
            .filmContent{
                flex:1;
                display:flex;
                flex-direction:column;
                justify-content:space-between;
                color: #666;
                font-size: 10px;
                .filmName{
                    color: #000;
                    font-weight:bold;
                    font-size: 17px;
                }
            }
        }
    }
`