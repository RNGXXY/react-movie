import React,{ Component } from 'react'
import { wrapperAnimate }  from '@Hoc'
import { TicketTabContent } from './styledComponents'
class TicketCinemas extends Component{

    render(){
        return(
            <TicketTabContent>
                TicketCinemas
            </TicketTabContent>
        )
    }
}

export default wrapperAnimate(TicketCinemas)