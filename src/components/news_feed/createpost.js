import React from 'react'


class Comp extends React.Component{
    constructor(){
        
    }
     render(){ return(
        <div class="card post">
          <div class="card-header">
             Create Post
          </div>
          <div class="card-body">
          <input type='text' placeholder='Write Something here...' />
         </div>
        </div>
    );}
};
export default Comp