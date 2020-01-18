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
            <div className='d-flex flex-column '>
                <div className='rightbar card-header small_display_off'>
                    People You May Know
                    <span className='d-flex width-fit'>
                        <img src="https://art-u2.infcdn.net/articles_uploads/2/2094/Design%20Personal%20Logo%20Online.png" className="friend-suggestions-image">
                        </img>
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