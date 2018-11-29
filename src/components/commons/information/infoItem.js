import React, { Component } from 'react'

import {Icon} from '@Commons'
import { 
    InfoItemWrapper 
} from './styledComponents'
class InfoItem extends Component{
    render(){
        let { data } = this.props
        return(
            <InfoItemWrapper>
                <a className='news-click' href="javascript:;">
                    <div className="news-con">
                        <div className="news-name">
                            {data.name}
                        </div>
                        <div className="news-pic">
                            <img src={`http://movie.miguvideo.com${data.imgSrcH}`} alt=""/>
                        </div>
                    </div>
                </a>
                <div className="news-origin">
                    <p className='pull-left'>来源：时光网</p>
                    <p className='pull-right'><Icon type={'thumbs-o-up'}/><span>0</span></p>
                </div>
            </InfoItemWrapper>
        )
    }
}

export default InfoItem