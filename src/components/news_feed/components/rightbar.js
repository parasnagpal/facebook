import React from 'react'

class Bar extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div className='d-flex flex-column'>
                <div className='rightbar card-header'>
                    People You May Know
                </div>
            </div>
        );
    }
}

export default Bar; 