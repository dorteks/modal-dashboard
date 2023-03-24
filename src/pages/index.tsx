import HeadTitle from "@/components/head";

const Home = () => {
  return (
    <>
      <HeadTitle
        title="Modal Dashboard"
        href="/assets/heroicons-solid_cube.svg"
      />
      <main className="flex flex-row content-center justify-center max-w-1440px h-auto mx-auto border-8 rounded-sm shadow-md ">
        <div className="  basis-1/5 px-6 py-12 text-3xl bg-white">
          <h2>Sidebar</h2>
          <h2>Sidebar</h2>
        </div>
        <div className="flex-grow bg-slate-200 text-3xl text-green-500 font-bold underline ">
          <h2>Main body</h2>
          <h2>Main body</h2>
        </div>
      </main>
    </>
  );
};

export default Home;
