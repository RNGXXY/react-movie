import React, { Component } from 'react'
import { SceneWrap , BoxWrap , SpecificOptions} from './styledComponents'
import { Icon , Header} from '@Commons'
import SelectTab from './selectTab'
import qs from 'qs'
class SceneSelection extends Component{
    constructor(props){
        super(props)
        this.state={
            selectList:[]
        }
    }
    async componentDidMount(){
        let resData = await this.axios({
            url:'/migu/mta-service/data/migu/userShows.jsp',
            method:'post',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
            },
            data:qs.stringify({
                cinemaId: this.props.cinemaId,
                filmId: this.props.filmId,
                count: 10,
            })
        })
        resData.data.dayShows.forEach(item=>{
            item.title = item.showdate
        })
        this.setState({
            selectList:resData.data.dayShows
        })
        
    }
    render(){
        return(
            <SceneWrap>
                <BoxWrap>
                    <Header
                        rightContent={<Icon type={'remove'} />}
                        onClickRight={this.props.onHandleShowScene}
                    >
                        场次选择
                    </Header>
                    <div style={{height:'44px',width:'100%'}}></div>     
                    <div className='selection'>
                        <SpecificOptions>
                            <SelectTab
                                selectList={this.state.selectList}
                                onHandleSceneId={this.props.onHandleSceneId}
                                onHandleShowSelection={this.props.onHandleShowSelection}/>
                        </SpecificOptions>
                        
                    </div>
                </BoxWrap>
            </SceneWrap>
        )
    }
}

export default SceneSelection