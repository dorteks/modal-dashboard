import React from "react";

type Props = {
  src: string;
  name: string;
  status?: string;
};

export const TeamCard = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-32 h-auto">
      <img className=" mb-6 h-20 w-20" src={props.src} alt="avatar" />
      <h2 className="text-xl font-bold text-zinc-500 text-center pb-2  ">
        {props.name}
      </h2>
      <h4 className="text-xl font-thin text-zinc-400 text-center pb-2 ">
        {props.status}
      </h4>
    </div>
  );
};

const Teams = () => {
  return (
    <div className="py-3 px-5 pb-10 bg-white rounded-md">
      <h2 className="py-3 px-5 w-52 mb-10 text-2xl font-semibold">Your team</h2>
      <section className="flex flex-row gap-10">
        <TeamCard src="/assets/invite-user.svg" name="Invite new member" />
        <TeamCard
          name="Ekene"
          status="Viewing Bugs"
          src="/assets/ellipse-1.svg"
        />
        <TeamCard src="/assets/ellipse-2.svg" status="Offline" name="Daniel" />
        <TeamCard
          name="Yasmeenah"
          status="Viewing Task"
          src="/assets/ellipse-3.svg"
        />
        <TeamCard
          name="Toluene"
          status="Viewing Bugs"
          src="/assets/ellipse-4.svg"
        />
        <TeamCard
          name="Ayo"
          status="Not signed in"
          src="/assets/ellipse-6.svg"
        />
      </section>
    </div>
  );
};

export default Teams;
