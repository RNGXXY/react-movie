import React,{ PureComponent } from 'react'
import { MovieItem } from '@Commons'

import {connect} from 'murlin-connect'
import { PullToRefresh, ListView } from 'antd-mobile';
import { inject_unmount } from '@Libs/decorator'
const qs = require('querystring');

@inject_unmount
class soonShowing extends PureComponent{
    constructor(){
        super()
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.datasource = [] // 替身数据，因为dataSource数据不能加入新数据
        this.state={
            soonShowingList:[],
            dataSource, // 数据源
            refreshing: true,// 判断是不是正在刷新的开关
            isLoading: true,// 判断是不是正在加载的开发
            hasMore: true,
            height: document.documentElement.clientHeight,// 屏幕高度
        }
        this.pageSize = 10 // 控制每页多少
        this.pageNum  = 1 // 控制页数
    }

    getItemsAsync(){
        return this.axios({
            url:'/migu/publish/i_www/resource/lovev/miguMovie/data/indexFilmComing_data.jsp',
            method:'post',
            data:qs.stringify({
                cityCode: 4751
            })
        }).then(res=>{
            // if (!this.datasource.length) this.datasource = res.data.movies 
            // this.getItemsByPage()
            // this.pageNum ++;
             // 获取到对应页数的数据
             let data = this.getItemsByPage(res.data.movies)
             this.pageNum ++; // 获取之后增加页面
             this.datasource = [...this.datasource, ...data] // 给替身添加数据
             // 如果没有数据了
             if ( this.datasource.length >= res.data.movies.length ) {
                 this.setState({ hasMore: false })
             }  
             return data                 
        })

    }

    getItemsByPage(data){
        let start = (this.pageNum -1 ) *  this.pageSize
        let end  = start +  this.pageSize
        return data.slice(start, end)
    }

    handleData () { // 获取数据后，更改真正的数据源，并且操作开关
        setTimeout(async () => {
            let data = await this.getItemsAsync()
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.datasource),
                refreshing: false,
                isLoading: false
            })
        }, 2000)      
    }
    onRefresh = () => { // 下拉刷新的逻辑
        this.setState({ refreshing: true, isLoading: true })
        // 因为是下拉属性，相当于要重新获取数据，重置页数...
        this.pageNum = 0
        if (!this.state.hasMore) this.setState({ hasMore: true })
        this.handleData()

    }; 
    onEndReached = (event) => { // 上啦加载的逻辑
        console.log('onEndReached')
        if (this.state.isLoading || !this.state.hasMore) {
          return;
        }
        this.setState({ isLoading: true });
        this.handleData()
    };
    componentDidMount () { // 初始化的话就去获取一波数据
        this.handleData()
    }

    renderItem(rowData, sectionID, rowID){
        return(
            <div>
                <h1>sdsadsa</h1>
                <MovieItem key = {rowID} data={rowData}/>
            </div>
        )
    }

    render(){
        console.log(111)
        return(
            <div style={{width:'100%'}}>
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
                    pageSize={5}    //按需每次显示的条数
                />
            </div>
        )
    }
}

export default connect(soonShowing,[{name:'watchMovies',state:'isShowingList'}])