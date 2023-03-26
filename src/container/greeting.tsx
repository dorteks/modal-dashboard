import React from "react";

const Greeting = () => {
  return (
    <React.Fragment>
      <div className="my-16 flex flex-row content-center justify-between ">
        <div className="flex flex-col  gap-4">
          <h2 className="flex flex-row gap-2 text-2xl font-bold ">
            Hey Alex, <img src="/assets/waving-hand.svg" alt="hi" />{" "}
          </h2>
          <h4 className="text-md font-normal text-zinc-500 ">
            Here`&apos;s what&apos;s happening in your workspace
          </h4>
        </div>
        <div className="flex justify-between px-5 py-3 h-14 w-80 bg-slate-300 rounded-lg text-lg">
          <button>Search</button>
          <button className="bg-slate-400 px-5 rounded-md">CMDK</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Greeting;
