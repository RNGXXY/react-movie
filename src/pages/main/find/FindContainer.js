import React,{ PureComponent } from 'react'

import { PullToRefresh, ListView } from 'antd-mobile';
import { inject_unmount } from '@Libs/decorator'
// 样式组件
import { FindWrapper , FindContent} from './styledComponents'
// 自定义组件
import { Info , Header  , Icon } from '@Commons'

const qs = require('querystring');
@inject_unmount
class FindContainer extends PureComponent{
    
    constructor(){
        super()
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state={
            informationData:[],
            dataSource,
            refreshing: true,// 判断是不是正在刷新的开关
            isLoading: true,// 判断是不是正在加载的开发
            hasMore: true,
            height: document.documentElement.clientHeight,// 屏幕高度
        }
        this.datasource = []    //替身数据,资讯数据
        this.pageSize = 2
        this.pageNum = 1
    }

    async componentDidMount(){
        await this.getDataAsync() 
        this.handleData()
    }

    // 获取资讯页的所有数据
    getDataAsync(){
        return this.axios({
            url:'/migu/publish/i_www/resource/lovev/miguMovie/data/find_index.jsp',
            method:'post',
        }).then(res=>{
            if(res.status === 200){
                let allData = res.data
                // this.getInfos()
                this.setState({
                    informationData:allData
                })
            }
        })
    }

    // 获取资讯的数据
    getInfos(){
        let { informationData } = this.state
        let infoData = this.getItemsByPage(informationData[3].list)
        // 在替身数据后连接每次获取到的新的数据
        this.datasource =  this.datasource.concat(infoData)
        // 获取之后增加要请求的页面数
        this.pageNum ++; 
    }

    // 每次刷新或加载请求不同的数据
    getItemsByPage(data){   
        let start = (this.pageNum-1)*this.pageSize
        let end = start + this.pageSize
        // 每次取两条
        return data.slice(start,end)
    }

     // 获取数据后，更改真正的数据源，并且操作开关
    handleData(){
            this.getInfos()
             setTimeout(()=>{
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.datasource),
                refreshing: false,
                isLoading: false
            })
        },500)
    }
    
    // 上啦加载的逻辑
    onEndReached = () => { 
        if (this.state.isLoading || !this.state.hasMore) {
          return;
        }
        this.setState({ isLoading: true });
        this.handleData()
    };

    // 上啦加载的逻辑
    onEndReached = () => { 
        if (this.state.isLoading || !this.state.hasMore) {
          return;
        }
        this.setState({ isLoading: true });
        this.handleData()
    };

    renderItem(rowData, sectionID, rowID){
        return(
            <Info key = {rowID} data={rowData}/>
        )
    }

    render(){
        return(
            
            <FindWrapper className='find'>
                <Header  rightContent={<Icon type={'search'}/>} >
                    发现
                </Header>
                <FindContent>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderFooter={() => (<div style={{ padding: '15px 0px', textAlign: 'center' }}>
                            {this.state.isLoading ? '正在加载...' : (!this.state.hasMore && '没有更多了')}
                        </div>)}
                        renderRow={(rowData, sectionID, rowID) => this.renderItem(rowData, sectionID, rowID)}
                        useBodyScroll={false}
                        pullToRefresh={<PullToRefresh
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                            indicator = {{
                                activate: '放手就刷新', // 已经扯出来
                                deactivate: '下拉去刷新', // 没有拉出来
                                release: '请稍等...', //  开始转
                                finish: '已经加载了新的数据' // 完成
                            }}
                        />}
                        onEndReached={this.onEndReached}
                        pageSize={1}    //按需每次显示的条数
                    />
                </FindContent>
            </FindWrapper>
        )
    }
}

export default FindContainer