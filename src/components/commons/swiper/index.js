import React,{ PureComponent , Fragment } from 'react'
import mySwiper from 'swiper'
import { SwiperWrapper , SwiperTitle , SwiperList} from './styledComponents'
import {withRouter} from 'react-router-dom'
class Swiper extends PureComponent{ 
    componentDidMount(){
        // 直接把配置传过来
        let config = this.props.swiperConfig
        new mySwiper('.swiper-common-bigbox', config
        // {
        //     slidesPerView : 3,
        //     spaceBetween : 20,
        //     freeMode : true,
        //     freeModeMomentumBounceRatio : 3,
        // }
        )
        // console.log(this.props)
      
    }

    toDetail(id){
        this.props.history.push('./detail',{
            cid:id
        })
    }

    render(){
        let list = this.props.swiperData
        if (!list.length) return ''
        return(
            <Fragment>
                <SwiperWrapper>
                    <SwiperTitle>
                        { this.props.swiperTitle }
                    </SwiperTitle>
                    <SwiperList>
                        <div className="swiper-container swiper-common-bigbox">
                            <div className="swiper-wrapper">
                                {this.renderSwieprItem(list)}
                            </div>
                        </div>
                    </SwiperList>
                </SwiperWrapper>
            </Fragment>
        )
    }

    renderSwieprItem(list){
        return list.map((item , index)=>(
            <div className="swiper-slide swiper-common-item"
                    key={(item.SRC_CONT_ID || item.starid) || '' + index}
                    onClick = {()=>{this.toDetail(item.SRC_CONT_ID)}}
                >
                <div className="swiper-common-img-box">
                {
                    (()=>{
                        return /^\/publish/.test(item.imgSrc || item.bigimg)  
                        ? <img src = {`https://movie.miguvideo.com${item.imgSrc || item.bigimg}`} alt=""/>
                        : <img src = {`https://movie.miguvideo.com/publish/i_www${item.imgSrc || item.bigimg}`} alt=""/>
                    })()
                }
                    
                </div>
                {/* swiper下面的文字 */}
                { this.renderFont(item) }
            </div>
        ))
    }

    renderFont(item){   
        if(item.bigimg) return ''
        return(
            <Fragment>
                <div className="swiper-content swiper-content-grey">
                    {item.name}
                </div>
                <div className="swiper-content swiper-content-light-grey">
                    {item.LONG_NAME}
                    {item.player ? (item.player==1 ? '导演' : '主演') : '' }
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Swiper)