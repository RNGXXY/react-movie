import React,{ PureComponent } from 'react'
import { MovieItem } from '@Commons'

import {connect} from 'murlin-connect'
import { PullToRefresh, ListView } from 'antd-mobile';
import { inject_unmount } from '@Libs/decorator'
const qs = require('querystring');

@inject_unmount
class SoonShowing extends PureComponent{
    constructor(){
        super()
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state={
            soonShowingList:[],
           
        }
        this.datasource=[]  //数据源，全部数据
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
            if (!this.datasource.length) this.datasource = res.data.movies 
            this.setItems()
            this.pageNum ++;     
        })

    }

       
    setItems(){
        let start = (this.pageNum -1 ) *  this.pageSize
        let end  = start +  this.pageSize
        let soonShowingList = [...this.state.soonShowingList,...this.datasource.slice(start,end)]
        this.setState({soonShowingList})
    }

    componentDidMount(){
        this.getItemsAsync()
         // 因为子组件的DidMount会比父组件的DidMount先执行，所以利用setTimeout 0 将逻辑放入异步队列
         setTimeout(() => {
            let { tool } = this.props.scroll
            tool.on('pullingUp', async () => {
                if ( this.datasource.length < this.pageNum * this.pageSize ) return false
                // 在这个项目中，不需要每次上啦获取数据了
                this.setItems()
                this.pageNum ++;
                tool.finishPullUp()
            })
        }, 0)  
    }

    componentDidUpdate (props, state) {
        if ( this.state.soonShowingList !== state.soonShowingList ) {
            this.props.scroll.tool.refresh()
        }
    }

    renderSoonShowing(soonShowingList){
        return soonShowingList.map(item=>(
            <MovieItem 
                key={item.contentId}
                data={item}
            /> 
        ))
    }

    render(){
        let {soonShowingList} = this.state
        
        if(!soonShowingList.length) return ''
        return(
            <div style={{width:'100%'}}>

                {
                    this.renderSoonShowing(soonShowingList)
                }
            </div>
        )
    }
}

export default SoonShowing