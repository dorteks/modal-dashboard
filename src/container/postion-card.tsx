import React from "react";
import { Add } from "iconsax-react";

type Props = {
  src: string;
  alt: string;
  title: string;
  subTitle: string;
  img1src: string;
  img2src: string;
  img3src: string;
  img4src?: string;
  img5src?: string;
};

export const Card = (props: Props) => {
  return (
    <div className="px-5 my-8 py-5 w-60 bg-white rounded-lg">
      <h4 className="flex flex-row gap-3 py-3 text-xl">
        <img src={props.src} alt={props.alt} />
        {props.title}
      </h4>
      <h4 className="text-md text-slate-500 mb-8  ">{props.subTitle}</h4>
      <div className="flex flex-row mb-5">
        <img className="absolute z-0 " src={props.img1src} alt="avatar" />
        <img className="absolute z-10 mx-6 " src={props.img2src} alt="avatar" />
        <img className="absolute z-20 mx-12" src={props.img3src} alt="avatar" />
        {/* <img className="absolute z-30 mx-xl" src={props.img4src} alt="avatar" /> */}
        {/* <img className="absolute z-40 mx-24" src={props.img5src} alt="avatar" /> */}
      </div>
      <img />
    </div>
  );
};

const PostionCard = () => {
  return (
    <React.Fragment>
      <div className="my-12">
        <Add
          size="32"
          color="#E5E7E9"
          className="grid justify-items-end bg-zinc-400 rounded-md "
        />
        <section className="flex flex-row   gap-7">
          <Card
            src="/assets/yellow-flower.svg"
            alt="front-end"
            title="Front-end"
            subTitle="The cool guys board"
            img1src="/assets/ellipse-1.svg"
            img2src="/assets/ellipse-2.svg"
            img3src="/assets/ellipse-3.svg"
            img4src="/assets/ellipse-4.svg"
            img5src="/assets/ellipse-5.svg"
          />

          <Card
            src="/assets/emoji-artist-pallete.svg"
            alt="design"
            title="Design"
            subTitle="The cool guys board"
            img1src="/assets/ellipse-1.svg"
            img2src="/assets/ellipse-2.svg"
            img3src="/assets/ellipse-3.svg"
          />

          <Card
            src="/assets/emoji-world-map.svg"
            alt="map"
            title="Roadmap"
            subTitle="Upcoming tasks"
            img1src="/assets/ellipse-1.svg"
            img2src="/assets/ellipse-2.svg"
            img3src="/assets/ellipse-3.svg"
          />

          <Card
            src="/assets/lady-beetle.svg"
            alt="backend"
            title="Back-end"
            subTitle="Upcoming tasks"
            img1src="/assets/ellipse-1.svg"
            img2src="/assets/ellipse-2.svg"
            img3src="/assets/ellipse-3.svg"
          />
        </section>
      </div>
    </React.Fragment>
  );
};

export default PostionCard;
