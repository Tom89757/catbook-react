import React from "react";
import SingleComment from "./SingleComment";
// TODO (step9): import SingleComment and NewComment
import { NewComment } from "./NewPostInput";

/**
 * @typedef ContentObject
 * @property {string} _id of story/comment
 * @property {string} creator_name
 * @property {string} content of the story/comment
 */

/**
 * Component that holds all the comments for a story
 *
 * Proptypes
 * @param {ContentObject[]} comments
 * @param {ContentObject} story
 */
const CommentsBlock = (props) => {
  // TODO (step9): implement render
  return (
  <div className="Card-commentSection">
    <div className="story-comments">
      {props.comments.map((comment) => (
        <SingleComment 
          key={`SingleComment_${comment._id}`}
          _id={comment._id}
          creator_name={comment.creator_name}
          content={comment.content}
        />
      ))}
      <NewComment storyId={props.storyId} addNewComment={props.addNewComment}/>
    </div>
  </div>
  );
};

export default CommentsBlock;
