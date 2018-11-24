import React,{ PureComponent } from 'react'
import mySwiper from 'swiper'
import connect from '@Connect'

// 功能组件
import { Header , Icon , Search , Swiper} from '@Commons'
// 子组件
import HomeSwiper from './HomeSwiper'
// 样式组件
import { HomeWrapper , HomeCommonSwiper } from './styledComponents' 

import { NoticeBar } from 'antd-mobile';

class HomeContainer extends PureComponent{
    state = {
        commonSwiperData:[],
    }
    async componentDidMount(){
        await this.props.watchMovies_actions.getListAsync()
        this.setState({
            commonSwiperData:this.props.watchMovies.splice(1,2)
        })
        // console.log(this.state.commonSwiperData)
        
    }
    render(){
        let {commonSwiperData} = this.state
        if(!commonSwiperData.length) return '';
        return(
            <HomeWrapper>
                <Header
                    icon={<Icon type={'folder-o'}/>}
                    rightContent={<Icon type={'search'}/>}
                >
                    咪咕影院
                   
                </Header>
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px', color : '#333'} }}>
                    资讯：《憨豆特工》系列睽违7年推出第三集《憨豆特工3》，63岁的“憨豆先生”罗温·艾金森回归大萤幕耍宝搞笑
                </NoticeBar>
                <HomeSwiper/>
                {/* <Search/> */}
                    {this.renderCommonSwiper(commonSwiperData)}
                     
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
                >
                </Swiper>
            </HomeCommonSwiper>
        ))
    }
}

// export default HomeContainer
export default connect(HomeContainer,[{name:'watchMovies',state:['watchMovieList']}])