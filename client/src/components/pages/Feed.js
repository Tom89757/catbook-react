import React, { Component } from "react";
import { get } from "../../utilities";
import SingleStory from "../modules/SingleStory.js";
// TODO (step4): import NewStory
// TODO (step7): remove SingleStory import, import Card

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
    };
  }

  componentDidMount() {
    get("/api/stories").then((storyObjs) => {
      this.setState({ stories: storyObjs });
    });
  }

  render() {
    return (
      <div>
        <SingleStory creator_name="Matt" content="test" />
      </div>
    );
    // TODO (step3): map the state to SingleStory components
    // TODO (step4): add in the NewStory component
    // TODO (step7): use Card instead of SingleStory
  }
}

export default Feed;
