import React, { Component } from 'react'

import { change_time } from '@Libs/decorator' 
import InfoItem from './infoItem'
import { 
    InfoListWrapper ,
    InfoListTitle,
    InfoListTime,
    InfoListList
} from './styledComponents'

// 引入装饰器对这个类进行修改
// 修改内容:为这个类的原型上添加了一个修改时间格式的方法
@change_time
class InfoList extends Component{
    renderItem(data){
        return data.map(item=>(
            <InfoItem 
                data = {item}
                key={item.SRC_CONT_ID}
            />
        ))
    }
    render(){
        let {data} = this.props
        return(
            <InfoListWrapper>
                <InfoListTime>{this.changeTime(data.name)}</InfoListTime>
                <InfoListTitle>{data.picList[0].name}</InfoListTitle>
                <InfoListList>
                    {this.renderItem(data.picList[0].list)}
                </InfoListList>
            </InfoListWrapper>
        )
    }
}

export default InfoList