import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom';
import {connect} from 'murlin-connect'
import { DetailWrapper , DetailHeader , DetailBody , DetailContent , DetailFooter} from './styledComponents'
import { Img , Icon , Swiper} from '@Commons'
class DetailContainer extends PureComponent{  
    constructor(){
        super()
        this.state={
            detailList:{}
        }
    }

    // 挂载数据
    componentDidMount(){
        this.props.detail_actions.geRecommendlData()
        let { cid } = this.props.location.state
        this.getDetailListAsync(cid)
    }

    // 发送请求获取数据
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

    render(){
        let { detailList } = this.state
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
                    <div className='footer-left footer-flex'>
                        <Icon type={'star-o'}/>
                        <span className='foot-title'>收藏</span>
                    </div>
                    <div className='footer-center footer-flex'>
                        <Icon type={'pencil-square-o'}/>
                        <span className='foot-title'>写影评</span>
                    </div>
                    <div className='footer-right footer-flex'>
                        <span className='foot-title'>选座购票</span>
                    </div>
                </DetailFooter>
            </DetailWrapper>
        )
    }
}   

export default withRouter(connect(DetailContainer,[{name:'detail',state:['recommendList']}]))