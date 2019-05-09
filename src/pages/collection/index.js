import React, { Component } from 'react'
import { Img , Icon , Header} from '@Commons'
import {connect} from 'murlin-connect'
import { Result } from 'antd-mobile';
import { CollectionWrap , CollectionList , CollectionItem} from './styledComponents'
const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;
class Collection extends Component{
    constructor(props){
        super(props)
        this.state={
            collectionList:[]
        }
    }
    onRemove=async(contId)=>{
        let resData =await this.axios({
            url:'/cms/collectionList/removeData',
            method:'POST',
            data:{
                userId:this.props.sign.userInfo.userId,
                contId
            }
        })
        if(resData.data.code==200) {
            let newCollectionList = this.state.collectionList
            newCollectionList = newCollectionList.filter(item=>item.contId!==contId)
            this.setState({
                collectionList:newCollectionList
            })
        }
        
    }

     componentDidMount(){
        setTimeout(async()=>{
            let resData =await this.axios(`/cms/collectionList/dataListByUser?userId=${this.props.sign.userInfo.userId}`)
            if(resData.data.data=='[]') resData.data.data=[]
            this.setState({
                collectionList:resData.data.data
            })
        },500)
    }
    render(){
        return(
            <CollectionWrap>
                <Header
                    icon={<Icon type={'arrow-left'} />}
                    onClickLeft={this.props.history.goBack}
                >
                    我的收藏
                </Header>
                <div style={{height:'44px',width:'100%'}}></div>     
                {
                    Object.keys(this.props.sign.userInfo).length > 0 && this.state.collectionList.length>0 && (
                        <CollectionList>
                        {
                            this.state.collectionList.map((item,index)=>(
                                <CollectionItem
                                    key={index}
                                >
                                <div 
                                    className='delectItem'
                                    onClick={(contId)=>{
                                        this.onRemove(item.contId)
                                    }}
                                    >
                                    <Icon type={'remove'} />
                                </div>
                                    <div className='imgBox'>
                                        <Img src={item.imgSrcV}/>
                                    </div>
                                    <div className='filmContent'>
                                        <p className='filmName'>{item.movieName}</p>
                                        <p className='filmDirector'>{item.detailType}</p>
                                        <p className='filmCountry'>{item.area}</p>
                                    </div>
                                </CollectionItem>
                            ))
                        }
                        </CollectionList>
                    )
                }
                {
                        Object.keys(this.props.sign.userInfo).length == 0 && (
                            <Result
                            img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
                            // title="请登录先"
                            buttonText='请登录先'
                            // message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
                            onButtonClick = {()=>this.props.history.push('/sign')}
                            />
                        )
                    }
                {
                    Object.keys(this.props.sign.userInfo).length > 0 && this.state.collectionList.length==0 && <Result
                    img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
                    title="么得收藏"
                    // buttonText='么得收藏'
                    // message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
                    // onButtonClick = {()=>this.props.history.push('/sign')}
                    />
                }
                
            </CollectionWrap>
        )
    }
}

export default connect(Collection,[{name:'sign',state:['userInfo']}])