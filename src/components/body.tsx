import React from "react";
import Teams from "@/container/teams";
import Greeting from "@/container/greeting";
import QuickAction from "@/container/quick-action";
import PostionCard from "@/container/postion-card";
import Newprojects from "@/container/new-projects";

const Body = () => {
  return (
    <React.Fragment>
      <Greeting />
      <QuickAction />
      <PostionCard />
      <Teams />
      <Newprojects />
    </React.Fragment>
  );
};

export default Body;
