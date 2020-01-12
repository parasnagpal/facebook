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
                    <span className='d-flex width-fit'>
                        <div className='border-top suggestions'>
                            <div>Paras Nagpal</div>
                            <div>Recommended for you</div>
                        </div>
                        <button>Add Friend</button>
                    </span>
                </div>
                
            </div>
        );
    }
}

export default Bar; 