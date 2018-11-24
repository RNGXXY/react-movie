import React,{ Component } from 'react'

// 样式组件
import { SearchContainer,SearchContent,SearchInput } from './styledComponents'  

import { Icon } from '@Commons'
class Search extends Component{

    render(){
        return(
            <SearchContainer>
                <SearchContent>
                    <div className='search-icon'><Icon  type={'search'}/></div>
                    <div className='search-input'>
                        <SearchInput placeholder='ssssss'/>
                    </div>
                    <div className='search-icon'><Icon  type={'times-circle-o'}/></div>
                </SearchContent>
                <p>取消</p>
            </SearchContainer>
        )
    }
}

export default Search