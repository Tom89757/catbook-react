import React, { useState } from "react";
import { post } from "../../utilities";

import "./NewPostInput.css";

/**
 * New Post is a parent component for all input components
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {string} storyId optional prop, used for comments
 * @param {({storyId, value}) => void} onSubmit: (function) triggered when this post is submitted, takes {storyId, value} as parameters
 */
const NewPostInput = (props) => {
  const [value, setValue] = useState("");

  // called whenever the user types in the new post input box
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // called when the user hits "Submit" for a new post
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(value);
    setValue("");
  };

  return (
    <div className="u-flex">
      <input
        type="text"
        placeholder={props.defaultText}
        value={value}
        onChange={handleChange}
        className="NewPostInput-input"
      />
      <button
        type="submit"
        className="NewPostInput-button u-pointer"
        value="Submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

/**
 * New Story is a New Post component for stories
 */
const NewStory = (props) => {
  // TODO (step4): implement addStory
  const addStory = (value) => {
    const body = { content: value};
    post("/api/story", body).then((story) => {
      props.addNewStory(story);
    });
  }
  // TODO (step4): implement render
  return <NewPostInput defaultText="New Story" onSubmit={addStory} />;
};


/**
 * New Comment is a New Post component for comments
 *
 * Proptypes
 * @param {string} storyId to add comment to
 */
const NewComment = (props) => {
  const addComment = (value) => {
    // TODO (step8): implement addComment (refer to NewStory)
    const body = { parent: props.storyId, content: value};
    post("/api/comment", body).then((comment) => {
      props.addNewComment(comment);
    })
  };

  // TODO (step8): implement render (refer to NewStory)
  return <NewPostInput defaultText="New Comment" onSubmit={addComment}/>;
};

export { NewComment, NewStory };
