import React,{Component} from 'react'
import { withRouter } from 'react-router-dom';
import { SearchHeaderWrap , SearchWrapper , SearchHeader } from './styledComponents'
// 子组建
import Recommend from './recommend/recommend'
import SearchResults from './result/result'
import qs from 'qs'


class SearchContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            searchContent:'',
            searchResults:[]
        }
    }
    // 受控组件修改value值通过onchange事件
    onChange=()=>{
        this.setState({
            searchContent:this.input.value
        })
    }

    // 删除
    onRemove=()=>{
        this.setState({
            searchContent:''
        }) 
    }

    // 搜索
    onPress=async()=>{
        let resData = await this.axios({
            url:'/migu/publish/i_www/resource/lovev/miguMovie/data/searchResultData2.jsp',
            method:'post',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
            },
            data:qs.stringify({
                searchVal:this.state.searchContent
            })
        })
        this.setState({
            searchResults:resData.data
        })
    }

    // 退出
    onExit = ()=>{
        this.props.history.goBack()
    }

    render(){
        return (
            <SearchWrapper>
                <SearchHeaderWrap>
                    <SearchHeader>
                        <div className='searchInput'>
                            <div className='searchIcon'>
                                <i className='fa fa-search '></i>
                            </div>
                            <input ref={el=>this.input=el} type='text' className='input' placeholder='搜影片' value={this.state.searchContent} onChange={this.onChange} />
                            <div className='searchIcon'>
                                {
                                    this.state.searchContent.length>0 && <i className='fa fa-remove' onClick={this.onRemove}></i>
                                }
                            </div>
                            
                        </div>
                        {
                            this.state.searchContent.length<=0 && <div className='exit' onClick={this.onExit}>取消</div>
                        }
                        {
                            this.state.searchContent.length>0 && <div className='enSure' onClick={this.onPress}>搜索</div>
                        }
                    </SearchHeader>
                </SearchHeaderWrap>
                <div style={{height:'45px',width:'100%'}}></div>
                
                {
                    this.state.searchResults.length>0 && <SearchResults searchResults={this.state.searchResults}/>
                }
                <Recommend/>
            </SearchWrapper>
        )
    }
}

export default withRouter(SearchContainer)