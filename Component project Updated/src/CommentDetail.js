import React from 'react';
import { Comment, CommentAuthor, Icon } from 'semantic-ui-react'

const CommentDetail=({title,active,link,textdem})=>{
    return(
        <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src={link} />
      <Comment.Content>
        <Comment.Author>{title}</Comment.Author>
        <Comment.Metadata>
          <div>{active}</div>
          <div>
            <Icon name='star' />5 Faves
            
          </div>
        </Comment.Metadata>
        <Comment.Text>
        {textdem}
        </Comment.Text>
      </Comment.Content>
    </Comment>
    </Comment.Group>
    );
}
export default CommentDetail;