import React from "react";

// import { mydata } from "../components/mydata";
import NavigationMenu from "../components/navigationMenu";
import Footer from "../components/footer";
import MyCard from "../components/MyCard";
import CapitalizeInput from "../components/widgets/CapitalizeInput";
import widget1 from "../pages/widget1"
import pic from "../components/images/coding.jpeg"


const mydata = [
    {
      id: 1,
      imagesrc: "https://source.unsplash.com/random/200px/?coding",
      title: "How to capitalize an input in React",
      content: `HTML (HyperText Markup Language) is the most 
      basic building block of the Web. It defines 
      the meaning and structure of web content.`,
      btnText: "Learn more",
      destination: "widget/1"
    },
    {
      id: 2,
      imagesrc: "https://source.unsplash.com/random/200px/?computer",
      title: "Read more/Read Less in React",
      content: `Cascading Style Sheets (CSS) is a stylesheet language used 
      to describe the presentation 
      of a document written in HTML or XML 
      (including XML dialects such as SVG, MathML or XHTML).`,
      btnText: "Learn more",
      destination: "widget/2"
    },
    {
      id: 3,
      imagesrc:"https://source.unsplash.com/random/200px/?programming",
      title: "How to fetch data in React using useEffect",
      content: `JavaScript (JS) is a lightweight, interpreted, 
      or just-in-time compiled programming language with 
      first-class functions.`,
      btnText: "Learn more",
      destination: "widget/3"
    },
    {
      id: 4,
      imagesrc: "https://source.unsplash.com/random/200px/?monitor",
      title: "How to get a random 8 digit number in React",
      content: `HTML (HyperText Markup Language) is the most 
      basic building block of the Web. It defines 
      the meaning and structure of web content.`,
      btnText: "Learn more",
      destination: "widget/4"
    },
    {
      id: 5,
      imagesrc: "https://source.unsplash.com/random/200px/?laptop",
      title: "Get a list of inputs - React",
      content: `Cascading Style Sheets (CSS) is a stylesheet language used 
      to describe the presentation 
      of a document written in HTML or XML 
      (including XML dialects such as SVG, MathML or XHTML).`,
      btnText: "Learn more",
      destination: "widget/5"
    },
    {
      id: 6,
      imagesrc: "https://source.unsplash.com/random/200px/?calculator",
      title: "How to lowercase an input - React",
      content: `JavaScript (JS) is a lightweight, interpreted, 
      or just-in-time compiled programming language with 
      first-class functions.`,
      btnText: "Learn more",
      destination: "widget/6"
    },
    {
      id: 7,
      imagesrc: "https://source.unsplash.com/random/200px/?monitor",
      title: "How to get a random 8 digit number in React",
      content: `HTML (HyperText Markup Language) is the most 
      basic building block of the Web. It defines 
      the meaning and structure of web content.`,
      btnText: "Learn more",
      destination: "widget/7"
    },
    {
      id: 8,
      imagesrc: "https://source.unsplash.com/random/200px/?laptop",
      title: "Get a list of inputs - React",
      content: `Cascading Style Sheets (CSS) is a stylesheet language used 
      to describe the presentation 
      of a document written in HTML or XML 
      (including XML dialects such as SVG, MathML or XHTML).`,
      btnText: "Learn more",
      destination: "weather"
    },
    {
      id: 9,
      imagesrc: "https://source.unsplash.com/random/200px/?calculator",
      title: "How to lowercase an input - React",
      content: `JavaScript (JS) is a lightweight, interpreted, 
      or just-in-time compiled programming language with 
      first-class functions.`,
      btnText: "Learn more",
      destination: "swapi"
    }
  ];


const Home = () => {
    return (
        <div className="page-wrapper-home">
            <main>
              <div
              style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "8rem"
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
          <Footer/ >
        </div>
      );
};
  

export default Home;