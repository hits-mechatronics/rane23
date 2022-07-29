import type { NextPage } from "next";
import Head from "next/head";
import CountDown from "../components/CountDown";
import NavSpot from "../components/NavSpot";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RANE`23</title>
      </Head>
      <div className="select-none h-screen w-screen flex flex-col justify-center items-center gap-16">
        <div className="flex gap-20">
          <NavSpot content="about" />
          <NavSpot content="focus areas" />
          <NavSpot content="sponsors" />
          <NavSpot content="speakers" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-permarker text-9xl">RANE`23</h1>
          <div className="font-excali text-xl flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#ffffff"
            >
              <path d="M12 3c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm10.881-2.501c0-1.492-.739-2.83-1.902-3.748l.741-.752c1.395 1.101 2.28 2.706 2.28 4.5s-.885 3.4-2.28 4.501l-.741-.753c1.163-.917 1.902-2.256 1.902-3.748zm-3.381 2.249l.74.751c.931-.733 1.521-1.804 1.521-3 0-1.195-.59-2.267-1.521-3l-.74.751c.697.551 1.141 1.354 1.141 2.249s-.444 1.699-1.141 2.249zm-16.479 1.499l-.741.753c-1.395-1.101-2.28-2.707-2.28-4.501s.885-3.399 2.28-4.5l.741.752c-1.163.918-1.902 2.256-1.902 3.748s.739 2.831 1.902 3.748zm.338-3.748c0-.896.443-1.698 1.141-2.249l-.74-.751c-.931.733-1.521 1.805-1.521 3 0 1.196.59 2.267 1.521 3l.74-.751c-.697-.55-1.141-1.353-1.141-2.249z" />
            </svg>
            <>:</>
            <a href="https://goo.gl/maps/XNHSSBvNAsPxC1ma7" target="_empty">
              Hindustan Institute of Technology and Science
            </a>
            <h3 className="text-3xl">|</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-8v-9h2v7h6v2z" />
            </svg>
            <>:</>
            <a href="https://www.google.com/calendar/about/" target="_empty">
              30th March - 1st April 2023
            </a>
          </div>
        </div>
        <div className="flex gap-20">
          <NavSpot content="schedule" />
          <NavSpot content="committee" />
          <NavSpot content="registration" />
          <NavSpot content="guidelines" />
        </div>
        <CountDown timestamp={1659008634} />
      </div>
    </>
  );
};

export default Home;
