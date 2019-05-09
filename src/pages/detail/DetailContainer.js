import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom';
import {connect} from 'murlin-connect'
import { DetailWrapper , DetailHeader , DetailBody , DetailContent , DetailFooter} from './styledComponents'
import { Img , Icon , Swiper} from '@Commons'
// 子组件
import SeatSelection from './seatSelection/index'
import SceneSelection from './sceneSelection/index'
import CilemaSelection from './cilemaSection/index'

class DetailContainer extends PureComponent{  
    constructor(){
        super()
        this.state={
            detailList:{},
            isShowSelsection:false, // 作为选择展示
            isCollection:false, 
            isShowScene:false,  // 场次选择展示
            isShowCilema:false, // 影院选择展示
            sceneId:'',         // 场次ID
            sceneTime:'',       // 场次时间
            cinemaHall:'',      // 影厅名称
            cinemaId:'',        // 影院Id
            cinemaName:'',      // 影院名称
        }
    }

    // 挂载数据
    componentDidMount(){
        this.props.detail_actions.geRecommendlData()
        let { cid } = this.props.location.state
        this.getDetailListAsync(cid)
    }

    // 发送请求获取详情信息数据
    getDetailListAsync(cid){
        this.axios({
            url:'/migu/publish/i_www/resource/lovev/miguMovie/detail/detail_data.jsp',
            params:{
                cid: cid
            }
        }).then(res=>{
            if(res.status === 200){
                this.setState({
                    detailList:res.data[0]
                })
            }
        }).catch(err=>{
            return false
        })
    }
    
    // 点击显示选座 
    onHandleShowSelection = ()=>{
        this.setState({
            isShowSelsection:!this.state.isShowSelsection
        })
    }

    // 点击显示场次选择 
    onHandleShowScene = ()=>{
        this.setState({
            isShowScene:!this.state.isShowScene
        })
    }

    // 点击显示影院选择 
    onHandleShowCinema = ()=>{
        this.setState({
            isShowCilema:!this.state.isShowCilema
        })
    }

    // 场次Id
    onHandleSceneId = (id,time,hall)=>{
        this.setState({
            sceneId:id,
            sceneTime:time,
            cinemaHall:hall
        })
    }

    // 影院Id
    onHandleCinemaId = (id,name)=>{
        this.setState({
            cinemaId:id,
            cinemaName:name
        })
    }

    // 点击收藏
    onHandleCollection = ()=>{
        if(!Object.keys(this.props.sign.userInfo).length){
            this.props.history.push('/sign')
            return false
        }
        let data = {
            userId:this.props.sign.userInfo.userId,
            userName:this.props.sign.userInfo.userName,
            contId:this.state.detailList.contId,
            imgSrcV:this.state.detailList.imgSrc,
            movieName:this.state.detailList.name,
            detailType:this.state.detailList.DetailType,
            area:this.state.detailList.region,
        }
        this.axios({
            url:'/cms/collectionList/addData',
            method:'POST',
            data
        })
        this.setState({
            isCollection:true
        })
    }

    render(){
        // 详情数据，通过axios得到的
        let { detailList } = this.state
        // 推荐影片数据，通过connect得到的
        let { recommendList } = this.props.detail

        if(!Object.keys(detailList).length || !recommendList.length) return ''

        return(
            <DetailWrapper>
                <DetailContent>
                    <DetailHeader className="detail-head">
                        <div className='goBack'
                            onClick={()=>{this.props.history.goBack()}}
                        >
                            <Icon type={'arrow-circle-left'}/>
                        </div>
                        <div className="detail-pic-wrap">
                            <Img src={detailList.imgSrc1}/>
                            <div className="shadow-box-one"></div>
                        </div>
                        <div className="detail-head-info">
                            <div className="head-info-top">
                                <div className="info-img-box">
                                    <Img src={detailList.imgSrc}/>
                                </div>
                                <div className="info-list">
                                    <div className="info-name">
                                        {detailList.name}
                                    </div>
                                    <div className="info-score">
                                        {
                                            (()=>{
                                                let count = Math.ceil(Number(detailList.score)/2)
                                                let arr = []
                                                for(let i=0;i<count;i++){
                                                    arr.push(i)
                                                }
                                                return arr.map((item,index)=>(
                                                    <Icon key={index} type={'star'} />
                                                ))
                                            })()
                                        }
                                    {detailList.score}
                                    </div>
                                    <div className="info-type">
                                        {detailList.DetailType}
                                    </div>
                                    <div className="info-region">
                                        {detailList.region}
                                    </div>
                                    <div className="info-time">
                                        {detailList.time} 
                                    </div>
                                </div>
                            </div>
                            <div className="head-info-describe">
                                <p>
                                {detailList.describe}
                                </p>
                            </div>
                            <div className="text-center">
                                <Icon type={'angle-down'}/>
                            </div>
                        </div>
                        
                    </DetailHeader>
                    <DetailBody>
                        <div className="performers">
                            <Swiper
                                swiperTitle={'演职人员'}
                                swiperData = { detailList.personnel } 
                                swiperConfig = {{
                                    slidesPerView : 4,
                                    spaceBetween : 2,
                                    freeMode : true,
                                    freeModeMomentumBounceRatio : 3,
                                }}
                            />
                        </div>
                        <div className="videos-stills">
                            <Swiper
                                swiperTitle={'视频和剧照'}
                                swiperData = { detailList.poster } 
                                swiperConfig = {{
                                    slidesPerView : 4,
                                    spaceBetween : 2,
                                    freeMode : true,
                                    freeModeMomentumBounceRatio : 3,
                                }}
                            />
                        </div>
                        <div className="recommend">
                            <Swiper
                                swiperTitle={'推荐影片'}
                                swiperData = { recommendList } 
                                swiperConfig = {{
                                    slidesPerView : 4,
                                    spaceBetween : 2,
                                    freeMode : true,
                                    freeModeMomentumBounceRatio : 3,
                                }}
                            />
                        </div>
                    </DetailBody>
                </DetailContent>
                <DetailFooter>
                    <div 
                        className='footer-left footer-flex'
                        onClick={this.onHandleCollection}
                        style={{color:this.state.isCollection?'rgb(247, 68, 68)':'#000'}}
                        >
                        <Icon type={'star-o'} />
                        <span className='foot-title'>收藏</span>
                    </div>
                    <div className='footer-center footer-flex'>
                        {/* <Icon type={'pencil-square-o'}/>
                        <span className='foot-title'></span> */}
                    </div>
                    <div 
                        onClick={this.onHandleShowCinema}
                        className='footer-right footer-flex'>
                        <span className='foot-title'>选座购票</span>
                    </div>
                </DetailFooter>
                {
                    this.state.isShowCilema && 
                    <CilemaSelection 
                        isShowScene = {this.state.isShowScene}
                        filmId={detailList.filmId}
                        onHandleCinemaId = {this.onHandleCinemaId}
                        onHandleShowScene = {this.onHandleShowScene}
                        onHandleShowCinema = {this.onHandleShowCinema}
                    />
                }
                {
                    this.state.isShowScene && 
                    <SceneSelection 
                        cinemaId={this.state.cinemaId}
                        filmId={detailList.filmId}
                        onHandleShowScene = {this.onHandleShowScene}
                        onHandleSceneId = {this.onHandleSceneId}
                        onHandleShowSelection={this.onHandleShowSelection}
                    />
                }
                {
                    this.state.isShowSelsection && (
                        <SeatSelection 
                            movieId = {this.props.location.state.cid}
                            sceneId = {this.state.sceneId}
                                
                            sceneTime={this.state.sceneTime}       
                            cinemaHall={this.state.cinemaHall}      
                            cinemaId={this.state.cinemaId}        
                            cinemaName={this.state.cinemaName}      
                            fileName={detailList.name}

                            imageUrl={detailList.imgSrc}
                            onHandleShowSelection={this.onHandleShowSelection}
                        />  
                    )
                }
            </DetailWrapper>
        )
    }
}   

// 详情数据通过withrouter得到id，再通过axios去请求，推荐影片因为是公用的，使用redux存放在store中
export default withRouter(connect(DetailContainer,[{name:'detail',state:['recommendList']},{name:'sign',state:['userInfo']}]))