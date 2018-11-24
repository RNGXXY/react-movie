import React,{ PureComponent , Fragment } from 'react'
import mySwiper from 'swiper'
import { SwiperWrapper , SwiperTitle , SwiperList} from './styledComponents'

class Swiper extends PureComponent{ 
    componentDidMount(){
        new mySwiper('.swiper-container', {

            slidesPerView : 3,
            spaceBetween : 20,
           
        })
      
    }
    render(){
        let list = this.props.swiperData
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
                    key={item.SRC_CONT_ID + index}
                >
                <div className="swiper-common-img-box">
                    <img src = {`https://movie.miguvideo.com/publish/i_www${item.imgSrc}`} alt=""/>
                </div>
                <div className="swiper-content swiper-content-grey">
                    {item.name}
                </div>
                <div className="swiper-content swiper-content-light-grey">
                    {item.LONG_NAME}
                </div>
            </div>
        ))
    }
}

export default Swiper