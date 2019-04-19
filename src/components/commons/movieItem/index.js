import React,{ Component } from 'react'
import { withRouter } from 'react-router-dom'

import {ItemBox} from './styeldComponents'


class MovieItem extends Component{

    render(){
        let {data} = this.props
        return(
            <div className='movieItem'
                onClick={
                    // 路由传参，直接跟在后面，通过withRouter就可以接收到所传的数据
                    ()=>{this.props.history.push('./detail',{
                            cid:data.contentId
                        })}
                    }
            >
                <ItemBox>
                <div className="img-box"
                    
                >
                    <img src={`https://movie.miguvideo.com${data.picAddr}`} alt=""/>

                </div>
                <div className="content">
                    <div className="title ">
                        <p className='public'>{data.filmName}</p>
                    </div>
                    <div className="director worker ">
                        <p className='public'>导演：<span>{data.director}</span></p>
                    </div>
                    <div className="toStar worker ">
                        <p className='public'>{data.actor}</p>
                    </div>
                </div>
                <div className="choose">
                    {
                        this.renderChoose(data)
                    }
                </div>
            </ItemBox>
            </div>
        )
    }

    renderChoose(data){
        if(!data.isPreSale){
            return(
                <img className="buyTicket" src="https://movie.miguvideo.com/publish/i_www/resource/lovev/miguMovie/images/icon/oreder.png" alt=""/>
            )        
        }else{
            if(data.isPreSale==='1') {
                return(
                    <p className="preBuy" >预售</p>
                )
            }
            else {
                return(
                    <p className="wantWatch" >想看</p>
                )
            }
        }
    }
}

export default withRouter(MovieItem)