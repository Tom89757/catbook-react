import React, { useEffect, useState } from "react";
import { get } from "../../utilities";
// TODO (step2): import SingleStory
// import SingleStory from "../modules/SingleStory";
// TODO (step4): import NewStory
import Card from "../modules/Card.js";
import { NewStory } from "../modules/NewPostInput.js";
// TODO (step6): remove SingleStory import, import Card

const Feed = () => {
  // TODO (step1): define state to hold stories
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // TODO (step1): implement a GET call to retrieve stories,
    // and assign it to state
    document.title = "News Feed";
    get("/api/stories").then((storyObjs) => {
      let reversedStoryObjs = storyObjs.reverse();
      setStories(reversedStoryObjs);
    });
  }, []);

  const addNewStory = (storyObj) => {
    setStories([storyObj].concat(stories));
  }

  let storiesList = null;
  const hasStories = stories.length !== 0;
  if (hasStories) {
    storiesList = stories.map((storyObj) => (
      <Card 
        key={`Card_${storyObj._id}`}
        _id={storyObj._id} 
        creator_name={storyObj.creator_name} 
        content={storyObj.content} 
      />
    ));
  } else {
    storiesList = <div>No stories!</div>;
  }

  // TODO (step1): render the raw stories data from state
  // return <div>{JSON.stringify(stories)}</div>;
  // TODO (step2): render a SingleStory with hardcoded props
  // TODO (step3): map the state to SingleStory components
  // TODO (step4): add in the NewStory component
  // TODO (step6): use Card instead of SingleStory
  return (
    <div>
      <NewStory addNewStory={addNewStory}/>
      {storiesList}
    </div>
  );
};

export default Feed;
