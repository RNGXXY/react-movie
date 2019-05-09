import React, { Component } from 'react'
import { RecommendWrapper } from './styledComponents'


export default class Recommend extends Component{
    constructor(props){
        super(props)
        this.state={
            hotList:['复仇者联盟4：终极之战','陈晓','反贪风暴','过春天','如影随心','王景春','飞驰人生','绿皮书','小偷家族','郭涛'
            ]
        }
    }
    render(){
        return(
            <RecommendWrapper>
                <div className='hotTitle'>
                    热门搜索
                </div>
                <ul className='hotList'>
                    {
                        this.state.hotList.map((item,index)=>(
                            <li key={index} className='hotItem'>{index+1}.{item}</li>
                            ))
                    }
                </ul>
            </RecommendWrapper>
        )
    }
}
