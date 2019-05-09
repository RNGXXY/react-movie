import React,{ PureComponent } from 'react'
import { connect } from 'murlin-connect'
import BScroll from 'better-scroll'
import { withRouter } from 'react-router-dom';

// 功能组件
import { Header , Icon  , Swiper , Active} from '@Commons' 
// 子组件
import HomeSwiper from './HomeSwiper'
// 样式组件
import { HomeWrapper , HomeCommonSwiper , HomeActive } from './styledComponents' 

import { NoticeBar } from 'antd-mobile';
 
class HomeContainer extends PureComponent{
    constructor () {
        super()
        this.scroll = {
            tool: null
        }
        this.state = {
            commonSwiperData:[],
            activeData:[]
        }
    }
    
    async componentDidMount(){
        await this.props.watchMovies_actions.getListAsync()
        let {watchMovieList} =  this.props.watchMovies
        this.setState({
            commonSwiperData:watchMovieList.splice(1,watchMovieList.length-2),
            activeData:watchMovieList[watchMovieList.length-1]
        })
        this.scroll.tool = new BScroll(this.el, {
            pullUpLoad: {
                threshold: 50
            },
            click: true
        })
        
    }

    


    render(){
        let {commonSwiperData} = this.state
        if(!commonSwiperData.length) return '';
        
        return(
            <HomeWrapper ref={el=>this.el=el}>
                
                <div className='homeBetter' >
                <Header
                    icon={<Icon type={'folder-o'}/>}
                    rightContent={<Icon type={'search'}/>}
                    onClickRight={()=>{this.props.history.push('./search')}}
                >
                    影说网
                   
                </Header>
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px', color : '#333'} }}>
                    资讯：《憨豆特工》系列睽违7年推出第三集《憨豆特工3》，63岁的“憨豆先生”罗温·艾金森回归大萤幕耍宝搞笑
                </NoticeBar>
                <HomeSwiper/>
                {/* <Search/> */}
                {/* 正在售票的swiper，不止一个 */}
                {this.renderCommonSwiper(commonSwiperData)}
                {/* 活动的swiper */}
                <HomeActive>
                    <Active 
                        swiperTitle={this.state.activeData.name}
                        swiperData = { this.state.activeData } 
                    />
                </HomeActive>
                </div>
            </HomeWrapper>
            
        )
    }

    renderCommonSwiper(commonSwiperData){
        return commonSwiperData.map(item=>(
            <HomeCommonSwiper
                key = {item.REDREICT_ID}
            >
                <Swiper
                    swiperTitle={item.name}
                    swiperData = { item.list } 
                    swiperConfig = {{
                        slidesPerView : 3,
                        spaceBetween : 20,
                        freeMode : true,
                        freeModeMomentumBounceRatio : 3,
                    }}
                >
                </Swiper>
            </HomeCommonSwiper>
        ))
    }
}

// export default HomeContainer
export default withRouter(connect(HomeContainer,[{name:'watchMovies',state:['watchMovieList']}]))