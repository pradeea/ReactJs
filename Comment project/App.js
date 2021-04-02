import React from 'react'
import { Comment, CommentAuthor, Icon } from 'semantic-ui-react'
import faker from 'faker';

const CommentExampleMetadata = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
      <Comment.Content>
        <Comment.Author>Stevie Feliciano</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
          <div>
            <Icon name='star' />5 Faves
          </div>
        </Comment.Metadata>
        <Comment.Text>
          Hey guys, I hope this example comment is helping you read this
          documentation.
        </Comment.Text>
      </Comment.Content>
    </Comment>
    
      <Comment>
        <Comment.Avatar as='b' src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"/>
        <Comment.Content>
          <Comment.Author>PRADEEP</Comment.Author>
          <Comment.Metadata>
            <div>a day ago</div>
          </Comment.Metadata>
          <Comment.Text>
            YA i think u are right
            </Comment.Text>
            <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
        </Comment.Content>
      

          <Comment.Group>
          <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>RAHUL N </Comment.Author>
                <Comment.Metadata>
                  <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text>even im thinking same :)</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
            </Comment.Group>
            <Comment.Group>
          <Comment>
              <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>RAMANUJAM</Comment.Author>
                <Comment.Metadata>
                  <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text>IAM FROM TCS LET ME GO AND RELAX GUYS!! :)</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
            </Comment.Group>
        </Comment>
      
    

      <Comment>
      <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
            <Comment.Content>
                <CommentAuthor>MARK ZUCKERBERG</CommentAuthor>
                <Comment.Metadata>
                        <div>about an day ago</div>
                </Comment.Metadata>
                <Comment.Text>
                        well it is an absolute previlage for me!.
                </Comment.Text>
            </Comment.Content>
      </Comment>
  </Comment.Group>

)

export default CommentExampleMetadata
