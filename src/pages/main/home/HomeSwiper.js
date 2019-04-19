import React,{ PureComponent } from 'react'
import { HomeSwiperWrapper , BgBlur , HomeSwiperImgBox } from './styledComponents'

import { Carousel, WingBlank } from 'antd-mobile'; 

import { connect } from 'murlin-connect'

class HomeSwiper extends PureComponent{
    state = {
        data: this.props.watchMovies.watchMovieList[0],
        imgHeight: 176,
        slideIndex : 0
    }

    // setState（）方法是异步的，因为执行的时候不会马上render，所以把他说成是异步的
    render(){
        let {data} = this.state
        if(!data) return '';

        return(
            <HomeSwiperWrapper >
                <WingBlank className='wingblank'>
                    <Carousel className="space-carousel"
                        frameOverflow="visible"
                        cellSpacing={10}
                        slideWidth={0.55}
                        autoplay
                        infinite
                        dots = {false}
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => this.setState({ slideIndex: index })}
                    >
                        {this.renderSwiperList(data)}
                    </Carousel>
                </WingBlank>
                <BgBlur className='bg-blur'
                    // slideIndex,当前轮播图的下标
                    src={data.list[this.state.slideIndex].imgSrc}
                >
                    {this.state.slideIndex}
                    </BgBlur>
            </HomeSwiperWrapper>
        )
    }

    renderSwiperList(data){
        let { list : movieList} = data
            return movieList.map((val, index) => (
            <HomeSwiperImgBox
                key={index}
                href={val.wapUrl}
                top={ this.state.slideIndex === index  }
            >
                <img
                    src={`https://movie.miguvideo.com/publish/i_www${val.imgSrc}`}
                    alt=""
                    style={{ width: '100% ', height: '100%'}}
                    onLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                    }}
                />
            </HomeSwiperImgBox>
        ))
    }
}

export default connect(HomeSwiper,[{name:'watchMovies',state:['watchMovieList']}])