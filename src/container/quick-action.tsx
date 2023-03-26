import React from "react";

type Props = {
  src: string;
  alt: string;
  text: string;
};

export const Button = (props: Props) => {
  return (
    <button className="flex flex-row gap-3 px-5 pr-6 py-3 text-teal-600 bg-teal-100 rounded-lg hover:bg-teal-600 hover:text-white ">
      <img src={props.src} alt={props.alt} />
      {props.text}
    </button>
  );
};

const QuickAction = () => {
  return (
    <React.Fragment>
      <div className="w-full px-6 py-3 bg-white h-auto rounded-md ">
        <h2 className="py-3 text-2xl mb-6"> Quick Actions</h2>
        <div className="flex flex-row gap-5">
          <button className="px-5 py-3 text-teal-600 bg-teal-100 rounded-lg hover:bg-teal-600 hover:text-white ">
            Create View
          </button>
          <Button
            alt="feedback"
            text=" New Feedback"
            src="/assets/speech-balloon.svg"
          />
          <Button
            alt="initiative"
            text="  New Initiative"
            src="/assets/seedling.svg"
          />
          <Button
            alt="design-task"
            text="New Design task"
            src="/assets/emoji-artist-pallete.svg"
          />
          <Button src="/assets/lady-beetle.svg" alt="bug" text="New Bug" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuickAction;
