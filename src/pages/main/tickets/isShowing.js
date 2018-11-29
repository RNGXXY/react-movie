import React,{ PureComponent } from 'react'
import {connect} from 'murlin-connect'
import { MovieItem } from '@Commons'


class isShowing extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            isShowingList:[],
            // flag:false
        }
    }
    // componentWillMount(){
    //     this.setState({
    //         flag:true
    //     })
    // }
    async componentDidMount(){
        // if(!this.state.isShowingList.length){
            await this.props.watchMovies_actions.getIsShowing()
            this.setState({
                isShowingList:this.props.watchMovies.isShowingList.movies
            })
        // }
        // else{
        //     return false
        // }
    }
    // componentWillUnmount(){
    //     this.setState({
    //         flag:false
    //     })
    // }
    render(){
        let { isShowingList } = this.state
        if(!isShowingList.length) return '';
        return(
            <div style={{width:'100%'}}>
                {
                    this.renderIsShowing(isShowingList)
                }
            </div>
        )
    }

    renderIsShowing(isShowingList){
        return isShowingList.map(item=>(
            <MovieItem 
                key={item.contentId}
                data={item}
            /> 
        ))
    }
}

export default connect(isShowing,[{name:'watchMovies',state:'isShowingList'}])