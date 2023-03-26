import Body from "@/components/body";
import HeadTitle from "@/container/head";
import SideMenu from "@/components/sidemenu";

const Home = () => {
  return (
    <>
      <HeadTitle
        title="Modal Dashboard"
        href="/assets/heroicons-solid_cube.svg"
      />
      <main className="flex flex-row content-center justify-center max-w-1440px h-auto mx-auto border-8 rounded-sm shadow-md ">
        <section className="basis-1/5 px-6 py-12 text-3xl bg-white">
          <SideMenu />
        </section>
        <section className="flex-grow py-4 px-16  bg-slate-200">
          <Body />
        </section>
      </main>
    </>
  );
};

export default Home;
