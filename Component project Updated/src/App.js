import React,{Fragment} from 'react'

import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {

  return(
        <React.Fragment>
  
            <CommentDetail 
            title={"ana"}
            link={"https://react.semantic-ui.com/images/avatar/small/stevie.jpg"}
             active={"2 days ago"}
             textdem={"Hey guys, I hope this example comment is helping you read this documentation"}
             
             
             />
            <CommentDetail 
            title={"pradeep"}
            link={"https://react.semantic-ui.com/images/avatar/small/matt.jpg"}
            active={"a day ago"}
            textdem={"ya im very excited and looking forward to work more"}
            
            />
            <CommentDetail 
            title={"rahul"}
            link={"https://react.semantic-ui.com/images/avatar/small/jenny.jpg"}
            active={"35 minutes ago"}
            textdem={"even im excited and it helps me for my CEO dream"}
            />
            <CommentDetail 
            title={"MARK"}
            link={"https://react.semantic-ui.com/images/avatar/small/joe.jpg"}
            active={"15 minutes ago"}
            textdem={"this is really cool"}
            />
        </React.Fragment>
  //     <Comment>
  //       <Comment.Avatar as='b' src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"/>
  //       <Comment.Content>
  //         <Comment.Author>PRADEEP</Comment.Author>
  //         <Comment.Metadata>
  //           <div>a day ago</div>
  //         </Comment.Metadata>
  //         <Comment.Text>
  //           YA i think u are right
  //           </Comment.Text>
  //           <Comment.Actions>
  //         <Comment.Action>Reply</Comment.Action>
  //       </Comment.Actions>
  //       </Comment.Content>
      

  //         <Comment.Group>
  //         <Comment>
  //             <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
  //             <Comment.Content>
  //               <Comment.Author as='a'>RAHUL N </Comment.Author>
  //               <Comment.Metadata>
  //                 <div>Just now</div>
  //               </Comment.Metadata>
  //               <Comment.Text>even im thinking same :)</Comment.Text>
  //               <Comment.Actions>
  //                 <Comment.Action>Reply</Comment.Action>
  //               </Comment.Actions>
  //             </Comment.Content>
  //           </Comment>
  //           </Comment.Group>
  //           <Comment.Group>
  //         <Comment>
  //             <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
  //             <Comment.Content>
  //               <Comment.Author as='a'>RAMANUJAM</Comment.Author>
  //               <Comment.Metadata>
  //                 <div>Just now</div>
  //               </Comment.Metadata>
  //               <Comment.Text>IAM FROM TCS LET ME GO AND RELAX GUYS!! :)</Comment.Text>
  //               <Comment.Actions>
  //                 <Comment.Action>Reply</Comment.Action>
  //               </Comment.Actions>
  //             </Comment.Content>
  //           </Comment>
  //           </Comment.Group>
  //       </Comment>
      
    

  //     <Comment>
  //     <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
  //           <Comment.Content>
  //               <CommentAuthor>MARK ZUCKERBERG</CommentAuthor>
  //               <Comment.Metadata>
  //                       <div>about an day ago</div>
  //               </Comment.Metadata>
  //               <Comment.Text>
  //                       well it is an absolute previlage for me!.
  //               </Comment.Text>
  //           </Comment.Content>
  //     </Comment>
  // </Comment.Group>

);
  }
export default App;
