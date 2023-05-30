import React, { useEffect, useState } from "react";
import { get } from "../../utilities";
// TODO (step6): import SingleStory
import SingleStory from "./SingleStory.js";
// TODO (step7): import SingleComment
import SingleComment from "./SingleComment.js";
// TODO (step8): import NewComment
// import { NewComment } from "./NewPostInput";
// TODO (step9): import CommentsBlock
import CommentsBlock from "./CommentsBlock";

import "./Card.css";

/**
 * Card is a component for displaying content like stories
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
const Card = (props) => {
  // TODO (step6): define state to hold comments (refer to Feed)
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // TODO (step6): implement a GET call to retrieve comments,
    // and assign it to state
    get("/api/comment", { parent: props._id }).then((commentObjs) => {
      setComments(commentObjs);
    });
  }, []);

  // and render the comments from state (with JSON.stringify)
  // from state using a map (refer to Feed)
  // TODO (step7): map comments from state into SingleComment
  // components (refer to Feed)

  // TODO (step6): render a SingleStory using props,
  // TODO (step8): add in the NewComment component (refer to Feed)
  // TODO (step9): use CommentsBlock

  const addNewComment = (commentObj) => {
    setComments(comments.concat([commentObj]));
  };

  return (
    <div className="Card-container">
      <SingleStory _id={props._id} creator_name={props.creator_name} content={props.content} />
      <CommentsBlock storyId={props._id} comments={comments} addNewComment={addNewComment} />
    </div>
  );
};

export default Card;
