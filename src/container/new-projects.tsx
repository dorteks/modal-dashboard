import {
  User,
  Crown1,
  UserAdd,
  EyeSlash,
  ArrowDown2,
  MessageText1,
} from "iconsax-react";
import React from "react";

type Props = {
  src: string;
  task: string;
  buttonTag: string;
  buttonText: string;
};

export const TaskCard = (props: Props) => {
  return (
    <div className="flex  bg-white p-6 rounded-md justify-between ">
      <div className="flex flex-row gap-5">
        <button className="flex flex-row py-1 px-2 pr-5 gap-3 rounded-md bg-zinc-200 ">
          <img src={props.src} alt="logo" />
          {props.buttonTag}
        </button>
        <h2 className="text-xl">{props.task}</h2>
      </div>

      <div className="flex flex-row gap-5 items-center">
        <button className="py-1 px-5 w-24 bg-zinc-300 text-base rounded-md">
          {props.buttonText}
        </button>
        <div className="flex flex-row gap-4">
          <MessageText1 size="20" color="#929598" />
          <Crown1 size="20" color="#929598" />
          <UserAdd size="20" color="#929598" />
          <User size="20" color="#929598" />
        </div>
      </div>
    </div>
  );
};

const Newprojects = () => {
  return (
    <div className=" flex flex-col mt-12 ">
      <section className="flex flex-row items-center gap-12 mb-6">
        <h2 className="text-2xl">Recently created</h2>
        <h2 className="flex flex-row items-center text-xl text-zinc-400 gap-2">
          All assignee <ArrowDown2 size="20" color="#929598" />
        </h2>
        <h3 className="flex flex-row items-center text-xl text-zinc-400 gap-2">
          <EyeSlash size="24" color="#929598" /> 6 hidden properties
          <ArrowDown2 size="20" color="#929598" />
        </h3>
      </section>

      <section className="flex flex-col gap-5">
        <TaskCard
          buttonTag=" CYC-82"
          buttonText="Design"
          task="Improve dark mode"
          src="/assets/emoji-artist-pallete.svg"
        />

        <TaskCard
          buttonText="Front"
          buttonTag=" CYC-81"
          task="Improve dark mode"
          src="/assets/seedling.svg"
        />

        <TaskCard
          buttonTag=" CYC-80"
          buttonText="Mobile"
          src="/assets/mobile-phone.svg"
          task="Add option to edit document on IOS"
        />

        <TaskCard
          buttonTag=" CYC-79"
          buttonText="Product"
          src="/assets/gem-stone.svg"
          task="Improve UX of bulk action"
        />

        <TaskCard
          buttonText="Back"
          buttonTag=" CYC-82"
          src="/assets/laptop.svg"
          task="Stay logged in after closing the browser"
        />
      </section>
    </div>
  );
};

export default Newprojects;
