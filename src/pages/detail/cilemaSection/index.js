import React, { Component } from 'react'
import { Icon , Header} from '@Commons'
import{ CinemaWrap , CinemaList} from './styledComponents'
import qs from 'qs'
class CinemaSection extends Component{
    constructor(props){
        super(props)
        this.state={
            cinemaList:[]
        }
    }

    onPress = (id,name)=>{
        this.props.onHandleCinemaId(id,name)
        this.props.onHandleShowScene()
    }

    async componentDidMount(){
        let filmShowData = await this.axios({
            url:'/migu/mta-service/data/migu/filmShowdates.jsp',
            method:'POST',
            header:{
                'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
            },
            data:qs.stringify({
                cityCode: 4862,
                filmId: this.props.filmId,
                regionCode: ''
            })
        })
        let resData = await this.axios({
            url:'/migu/mta-service/data/migu/validCinemaes.jsp',
            method:'POST',
            header:{
                'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
            },
            data:qs.stringify({
                cityCode: 4862,
                filmId: this.props.filmId,
                showDate: filmShowData.data.showdates[0],
                orderType: 1,
                regionCode: '',
                longitude: '',
                latitude: ''
            })
        })
        this.setState({
            cinemaList:resData.data.cinemaes.slice(0,9)
        })
    }
    render(){
        return(
            <CinemaWrap isShowScene={this.props.isShowScene}>
                <Header
                    rightContent={<Icon type={'remove'} />}
                    onClickRight={this.props.onHandleShowCinema}
                >
                    影院选择
                </Header>
                <div style={{height:'44px',width:'100%'}}></div>   
                {
                    this.state.cinemaList.length>0 && (
                        <CinemaList>
                            {
                                this.state.cinemaList.map(item=>(
                                    <li key={item.cinemaId} className='cinemaItem' onClick={()=>{this.onPress(item.cinemaId,item.cinemaName)}}>
                                        <p className='clinemaName'>{item.cinemaName}</p>
                                        <p className='cinemaAddress'>{item.cinemaAdd}</p>
                                    </li>
                                ))
                            }
                        </CinemaList>
                    )
                }
            </CinemaWrap>
        )
    }
}

export default CinemaSection