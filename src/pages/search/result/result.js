
import React, { Component } from 'react'
import { ResultWrapper } from './styledComponents'
import { Img } from '@Commons'
import { withRouter } from 'react-router-dom';
class SearchResults extends Component{
    render(){
        return(
            <ResultWrapper>
                <ul className='resultsList'>
                {
                    this.props.searchResults.map((item,index)=>(
                        <li 
                            key={index} 
                            className='resultsItem'
                            onClick={()=>{
                                this.props.history.push('./detail',{
                                    cid:item.contId
                                })
                            }}
                            >
                            <div className='imgBox'>
                                <Img src={item.imgSrcV}/>
                            </div>
                            <div className='filmContent'>
                                <p className='filmName'>{item.name}</p>
                                <p className='filmDirector'>
                                    {
                                        item.mediaActor.map((aa,bb)=><span key={bb}>{aa},</span>)
                                    }
                                </p>
                                <p className='filmCountry'>{item.area}</p>
                            </div>
                        </li>
                    ))
                }
                </ul>
            </ResultWrapper>
        )
    }
}

export default withRouter(SearchResults)