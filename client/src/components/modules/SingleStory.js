import React from "react";

// TODO (step2): import Card.css
import "../modules/Card.css"

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
const SingleStory = (props) => {
  return (
    <div className="Card-story">
      {/* TODO (step2): use JSX and props to render story creator and content */}
      <span className="u-bold">{props.creator_name}</span>
      <p className="Card-storyContent">{props.content}</p>
    </div>
  );
};

export default SingleStory;
