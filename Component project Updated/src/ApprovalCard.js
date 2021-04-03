import React from "react";
import { Button, Card } from 'semantic-ui-react'


const ApproveCard=(props)=>{
    return(
        <Card.Group>
        <Card>
          <Card.Content>{props.children}</Card.Content>
          
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
        // <div className="uicard">
        //     <div className="content">Are you sure?</div>
        //     <div className="ExtraContent">
        //         <div className="uibuttons">
        //             <div classname="ui basic green button">Agree</div>
        //             <div classname="ui basic red button">Reject</div>
        //         </div>   
        //     </div>

        // </div>
    );
}
export default ApproveCard;
