import {
  Add,
  Book,
  Home2,
  ArrowDown3,
  InfoCircle,
  DirectInbox,
  SearchNormal1,
} from "iconsax-react";
import React from "react";

const SideMenu = () => {
  return (
    <React.Fragment>
      <div className="mb-8 flex flex-row content-center justify-between ">
        <div className="flex flex-row gap-4 font-normal text-center text-2xl">
          <img src="/assets/heroicons-solid_cube.svg" alt="logo" />
          <h2 className="py-2">Cube</h2>
        </div>
        <div className="flex flex-row content-center gap-12 ">
          <img src="/assets/alert-icon.svg" alt="alert icon" />
          <img src="/assets/profile-avatar.svg" alt="profile" />
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-3">
        <div className="py-3 px-5 flex flex-row gap-4 text-xl  text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <Home2 size="32" color="#929598" fill="#929598" />
          <h2>Home</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <DirectInbox size="32" color="#929598" fill="#929598" />
          <h2>Inbox</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md ">
          <SearchNormal1 size="32" color="#929598" fill="#929598" />
          <h2>Search</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <Add size="32" color="#1DA09E" className="bg-teal-300 rounded-md " />
          <h2>New Feedback</h2>
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-3">
        <div className="py-3 px-5 flex flex-row gap-4 text-xl  text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <ArrowDown3 size="32" color="#929598" fill="#929598" />
          <h2>Main boards</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <img src="/assets/emoji-world-map.svg" alt="roadmap" />
          <h2>Roadmap</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md ">
          <img src="/assets/icon-notepad.svg" alt="realease-note" />
          <h2>Release Note</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <Add size="32" color="#E5E7E9" className="bg-zinc-400 rounded-md" />
          <h2>Add New</h2>
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-3">
        <div className="py-3 px-5 flex flex-row gap-4 text-xl  text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <ArrowDown3 size="32" color="#929598" fill="#929598" />
          <h2>Design boards</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <img src="/assets/emoji-artist-pallete.svg" alt="design-system" />
          <h2>Design System</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md ">
          <img src="/assets/emoji-hibiscus.svg" alt="cube-design-system" />
          <h2>Cube Design System</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md ">
          <img src="/assets/emoji-rocket.svg" alt="cube-2.0" />
          <h2>Cube 2.0</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <Add size="32" color="#E5E7E9" className="bg-zinc-400 rounded-md" />
          <h2>Add New</h2>
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-3">
        <div className="py-3 px-5 flex flex-row gap-4 text-xl  text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <ArrowDown3 size="32" color="#929598" fill="#929598" />
          <h2>Developer</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <img src="/assets/yellow-flower.svg" alt="front-end" />
          <h2>Front-end</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md ">
          <img src="/assets/discord-logo.svg" alt="back-end" />
          <h2>Back-end</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md ">
          <img src="/assets/icon-bug.svg" alt="bugs" />
          <h2>Bugs</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <Add size="32" color="#E5E7E9" className="bg-zinc-400 rounded-md" />
          <h2>Add New</h2>
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-3">
        <div className="py-3 px-5 flex flex-row gap-4 text-xl  text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <ArrowDown3 size="32" color="#929598" fill="#929598" />
          <h2>Other views</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <img src="/assets/emoji-direct-hit.svg" alt="target" />
          <h2>Target</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <Add size="32" color="#E5E7E9" className="bg-zinc-400 rounded-md" />
          <h2>Add New</h2>
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-3">
        <div className="py-3 px-5 flex flex-row gap-4 text-xl  text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <Book size="32" color="#929598" fill="#929598" />
          <h2>Learning Center</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <InfoCircle size="32" color="#929598" fill="#929598" />
          <h2>Contact Support</h2>
        </div>
        <div className="py-3 px-5 flex flex-row gap-4 text-xl text-gray-400 hover:text-white hover:bg-teal-500 rounded-md">
          <Add size="32" color="#E5E7E9" className="bg-zinc-400 rounded-md" />
          <h2>Invite new member</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideMenu;
