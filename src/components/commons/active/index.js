import React,{ PureComponent , Fragment } from 'react'
import mySwiper from 'swiper'
import { ActiveWrapper , ActiveTitle , ActiveList , ActiveImg} from './styledComponents'

class Active extends PureComponent{ 
    componentDidMount(){
        new mySwiper('.active-box', {
            scrollbar: {
                el: '.active-scrollbar',
                hide: true,
              },
        })
      
    }
    render(){
        let {list} = this.props.swiperData
        return(
            <ActiveWrapper>
                <ActiveTitle>
                    { this.props.swiperTitle }
                </ActiveTitle>
                <ActiveList>
                    <div className="swiper-container active-box">
                        <div className="swiper-wrapper">
                            {/* <div className="swiper-slide">
                                <ActiveImg>
                                    <img src="" alt=""/>
                                </ActiveImg>
                            </div> */}
                            {
                                (()=>{
                                    return list.map((item , index)=>(
                                        <div className="swiper-slide"
                                            key={item.SRC_CONT_ID + index}
                                        >
                                           
                                            <img height='100%' src = {`https://movie.miguvideo.com/publish/i_www${item.imgSrc}`} alt=""/>
                                            
                                        </div>
                                    ))
                                })()
                            }
                        </div>
                        <div className="swiper-scrollbar active-scrollbar"></div>
                    </div>
                </ActiveList>
            </ActiveWrapper>
        )
    }

    // renderSwieprItem(list){
    //     return list.map((item , index)=>(
    //         <div className="swiper-slide swiper-common-item"
    //                 key={item.SRC_CONT_ID + index}
    //             >
    //             <div className="swiper-common-img-box">
    //                 <img src = {`https://movie.miguvideo.com/publish/i_www${item.imgSrc}`} alt=""/>
    //             </div>
    //         </div>
    //     ))
    // }
}

export default Active