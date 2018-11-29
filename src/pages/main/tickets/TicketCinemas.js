import React,{ Component } from 'react'
import { wrapperAnimate }  from '@Hoc'
import { TicketTabContent , CinemasHeader , CinemasList } from './styledComponents'
import { Icon } from '@Commons'
import { inject_unmount } from '@Libs/decorator'
import {connect} from 'murlin-connect'
const qs = require('querystring');



// function inject_unmount (target) {
//     // 改装componentWillUnmount，在组件销毁时做记录，给setState用
//     let next  = target.prototype.componentWillUnmount;
//     target.prototype.componentWillUnmount = function(){
//         if(next) next.call(this,...arguments);
//         this.unmount = true 
//     }
//     // 对setState改装，setState查看当前组件是否被销毁，自动执行
//     let setState =  target.prototype.setState;
//     target.prototype.setState = function(){
//         console.log(222)
//         if (this.unmount) return ; 
//         setState.call(this,...arguments)
//     }
// }

@inject_unmount
class TicketCinemas extends Component{ 
    constructor(props){
        super(props)
        this.state={
            cinemasList:[]  //要显示的数据
        }
        this.datasource=[]  //数据源，全部数据
        this.pageNum = 1    //每次显示的页数
        this.pageSize = 10  //每次显示多少
    }

    
    setItems(){
        let start = (this.pageNum -1 ) *  this.pageSize
        let end  = start +  this.pageSize
        let cinemasList = [...this.state.cinemasList,...this.datasource.slice(start,end)]
        this.setState({cinemasList})
    }

    getItemsAsync(){
        return this.axios({
            url:'/migu/mta-service/data/migu/validCinemaes.jsp',
            method:'post',
            data:qs.stringify({
                cityCode: 4751,
                orderType: 1,
                longitude: '',
                latitude: ''
            })
        }).then(res=>{
            if (!this.datasource.length) this.datasource = res.data.cinemaes 
            this.setItems()
            this.pageNum ++;
        })

    }

    componentDidMount(){
        this.getItemsAsync()
         // 因为子组件的DidMount会比父组件的DidMount先执行，所以利用setTimeout 0 将逻辑放入异步队列
         setTimeout(() => {
            let { tool } = this.props.scroll
            tool.on('pullingUp', async () => {
                if ( this.datasource.length < this.pageNum * this.pageSize ) return false
                console.log('获取数据', this.pageNum)
                // 在这个项目中，不需要每次上啦获取数据了
                this.setItems()
                this.pageNum ++;
                tool.finishPullUp()
            })
        }, 0)  
    }

    componentDidUpdate (props, state) {
        if ( this.state.cinemasList !== state.cinemasList ) {
            this.props.scroll.tool.refresh()
        }
    }

    render(){
        let {cinemasList} = this.state
        
        if(!cinemasList.length) return ''
        return(
            <TicketTabContent className='cinemas'>
                {/* 影院头部 */}
                <CinemasHeader>
                    <div className="navbarCon">
                        <p className='navbar-active'>附件</p>
                    </div>
                    <div className="nav-list">
                        <Icon type={'chevron-circle-down'}/>
                    </div>
                </CinemasHeader>
                {/* 影院列表 */}
                <CinemasList>
                    <ul className="cinemaList">
                        {this.renderCinemaItem(cinemasList)}
                    </ul>
                </CinemasList>
            </TicketTabContent>
        )
    }

    renderCinemaItem(cinemasList){
        return cinemasList.map(item=>(
            <li className="cinemaItem"
                key={item.cinemaId}
            >
                <div className="cinemaContent">
                    <div className="cinemaName">
                        {item.cinemaName}
                    </div>
                    <div className="cinemaAddress">
                        {item.cinemaAdd}
                    </div>
                </div>
            </li>
        ))
    }
}

export default connect(wrapperAnimate(TicketCinemas),[{name:'watchMovies'}])