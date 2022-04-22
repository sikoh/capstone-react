import React from "react";

// import { mydata } from "../components/mydata";

import Footer from "../components/footer";
import MyCard from "../components/MyCard";

const mydata = [
  {
    id: 1,
    imagesrc: "https://source.unsplash.com/random/500px/?coding",
    title: "Capitalize an input",
    content: `To see the functionality click the button below`,
    btnText: "Learn more",
    destination: "widget/1",
  },
  {
    id: 2,
    imagesrc: "https://source.unsplash.com/random/500px/?computer",
    title: "Read more/Read Less",
    content: `To see the functionality click the button below`,
    btnText: "Learn more",
    destination: "widget/2",
  },
  {
    id: 3,
    imagesrc: "https://source.unsplash.com/random/500X500/?programming",
    title: "Pick RGB color for your project",
    content: `To see the functionality click the button below`,
    btnText: "Learn more",
    destination: "widget/3",
  },
  {
    id: 4,
    imagesrc: "https://source.unsplash.com/random/500X500/?desk",
    title: "Get a random 8 digit number",
    content: `To see the functionality click the button below`,
    btnText: "Learn more",
    destination: "widget/4",
  },
  {
    id: 5,
    imagesrc: "https://source.unsplash.com/random/500X500/?laptop",
    title: "Get an input in JSON form",
    content: `To see the functionality click the button below`,
    btnText: "Learn more",
    destination: "widget/5",
  },
  {
    id: 6,
    imagesrc: "https://source.unsplash.com/random/500X500/?calculator",
    title: "Make a list of tasks",
    content: `To see the functionality click the button below`,
    btnText: "Learn more",
    destination: "widget/6",
  },
  {
    id: 7,
    imagesrc: "https://source.unsplash.com/random/500X500/?monitor",
    title: "Lowercase user input",
    content: `To see the functionality click the button below`,
    btnText: "Learn more",
    destination: "widget/7",
  },
  {
    id: 8,
    imagesrc: "https://source.unsplash.com/random/500X500/?laptop",
    title: "Weather APP",
    content: `Check out the weather in your area`,
    btnText: "Learn more",
    destination: "weather",
  },
  {
    id: 9,
    imagesrc: "https://source.unsplash.com/random/500X500/?calculator",
    title: "Star Wars explorer",
    content: `Do you like Star Wars ..... check this out!`,
    btnText: "Learn more",
    destination: "swapi",
  },
];

const Home = () => {
  return (
    <div className="page-wrapper-home">
      <main>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "8rem",
          }}
        >
          {mydata.map((item) => (
            <MyCard
              key={item.id}
              item={item.imagesrc}
              title={item.title}
              content={item.content}
              button={item.btnText}
              destination={item.destination}
            ></MyCard>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
