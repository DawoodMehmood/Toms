import React from "react";

const About = () => {
  return (
    <div>
      <div className="relative">
        <div className=" w-1/2 p-8 mx-12">
          {/* Image div */}
          <img
            src="https://www.vrggrl.com/cdn/shop/files/Dan_Nat_94c5f376-2a4c-4cd3-b7fa-7ea9c1e01dc2.jpg?v=1709773392&width=1070"
            alt="About"
            className="w-full"
          />
        </div>
        <div className="absolute flex justify-end left-0 right-0 top-1/4 -z-10 bottom-0 bg-banner p-8">
          {/* Text div */}
          <div className="w-1/2 p-24">
            <h1 className="text-6xl font-extrabold ">OUR STORY</h1>
            <br />
            <p className="text-gray-600">
              VRG GRL is a glimpse into the minds of its creators. We feel
              through creativity and speak through colour. Behind our pieces you
              will find thoughtful silhouettes designed to fit with ease, hand
              painted prints and fabrics you'll want to live in. We are
              passionate about inspiring women to find their style and feel
              confident. Our clothing is our second skin and we see the
              importance of being a brand that allows people to express who they
              are, through what they wear.
            </p>
            <br />
            <p className="serif">DANIELLA & NATALIA</p>
          </div>
        </div>
      </div>
      <div className="my-12 text-center">
        <h1 className="text-6xl font-extrabold ">OUR MISSION</h1>
        <br />
        <p className="small-size">
          Inspire creativity and confidence through style.
        </p>
        <br />
        <img
          src="//www.vrggrl.com/cdn/shop/files/BW_1236_b8089444-9438-4c8d-bb3f-272637e8a9f4.jpg?v=1709777458&amp;width=3840"
          alt="mission img"
          className="w-full"
        />
      </div>
      <div className="my-24 mx-40 text-center">
        <h1 className="text-6xl font-extrabold ">OUR VALUES</h1>
        <div className="grid grid-cols-5 gap-12 my-5">
          <div className="flex items-center flex-col">
            <img
              src="https://www.vrggrl.com/cdn/shop/files/INSPIRE_INDIVIDUAL.png?v=1709681388&width=300"
              alt="vision img"
              className="w-1/2"
            />
            <p>INSPIRING CREATIVITY & STYLE</p>
          </div>
          <div className="flex items-center flex-col">
            <img
              src="https://www.vrggrl.com/cdn/shop/files/INSPIRE_INDIVIDUAL.png?v=1709681388&width=300"
              alt="vision img"
              className="w-1/2"
            />
            <p>INSPIRING CREATIVITY & STYLE</p>
          </div>
          <div className="flex items-center flex-col">
            <img
              src="https://www.vrggrl.com/cdn/shop/files/INSPIRE_INDIVIDUAL.png?v=1709681388&width=300"
              alt="vision img"
              className="w-1/2"
            />
            <p>INSPIRING CREATIVITY & STYLE</p>
          </div>
          <div className="flex items-center flex-col">
            <img
              src="https://www.vrggrl.com/cdn/shop/files/INSPIRE_INDIVIDUAL.png?v=1709681388&width=300"
              alt="vision img"
              className="w-1/2"
            />
            <p>INSPIRING CREATIVITY & STYLE</p>
          </div>
          <div className="flex items-center flex-col">
            <img
              src="https://www.vrggrl.com/cdn/shop/files/INSPIRE_INDIVIDUAL.png?v=1709681388&width=300"
              alt="vision img"
              className="w-1/2"
            />
            <p>INSPIRING CREATIVITY & STYLE</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-end mx-12 py-12">
          <h1 className="text-4xl font-bold ">SUSTAINABILITY</h1>
          <br />
          <p className="small-size">
            Our collective mission is to inspire creativity & confidence,
            empowering young women everywhere to feel like the best version of
            themselves. As a business, we recognise the role we play in the
            fashion economy and understand there is work to be done to make a
            conscious impact on our planet and wider community.
            <br />
            <br />
            We don’t have all the answers, but we do have the resources and
            power to make a positive change; and the ability to commit to
            ongoing change as we learn and discover new things.
          </p>
          <br />
          <button className="w-fit px-8 py-4 text-white bg-pantone hover:bg-darkPantone">
            LEARN MORE
          </button>
        </div>
        <img src="https://www.vrggrl.com/cdn/shop/files/BW_1213_57dc2467-5585-4c48-9a62-9a91b9ec8a1a.jpg?v=1709777457&width=750" />
      </div>
      <div className="grid grid-cols-2">
        <img src="https://www.vrggrl.com/cdn/shop/files/Dan_Nat_2.jpg?v=1709773477&width=750" />
        <div className="flex flex-col justify-end mx-12 py-12">
          <h1 className="text-4xl font-bold ">GIVING BACK 10%</h1>
          <br />
          <p className="small-size">
            Since VRG GRL started, our founders Daniella & Natalia have made it
            their priority to give back and support people in need. We’ve been
            donating 10% of our profits to causes we love since our inception,
            and we’re proud to continue doing this in 2023 and beyond.
          </p>
          <br />
          <button className="w-fit px-8 py-4 text-white bg-pantone hover:bg-darkPantone">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
