import React from "react";

// import { mydata } from "../components/mydata";
import NavigationMenu from "../components/navigationMenu";
import Footer from "../components/footer";
import MyCard from "../components/MyCard";
import CapitalizeInput from "../components/widgets/CapitalizeInput";
import widget1 from "../pages/widget1"


const mydata = [
    {
      id: 1,
      imagesrc: "https://source.unsplash.com/random/",
      title: "How to capitalize an input in React",
      content: `HTML (HyperText Markup Language) is the most 
      basic building block of the Web. It defines 
      the meaning and structure of web content.`,
      btnText: "Learn more about HTML",
      destination: "../pages/widgets1"
    },
    {
      id: 2,
      imagesrc:
        "https://pics.freeicons.io/uploads/icons/png/16738931111536080149-512.png",
      title: "Read more/Read Less in React",
      content: `Cascading Style Sheets (CSS) is a stylesheet language used 
      to describe the presentation 
      of a document written in HTML or XML 
      (including XML dialects such as SVG, MathML or XHTML).`,
      btnText: "Learn more about CSS",
      destination: "css"
    },
    {
      id: 3,
      imagesrc:
        "https://pics.freeicons.io/uploads/icons/png/15439815101553233114-512.png",
      title: "How to fetch data in React using useEffect",
      content: `JavaScript (JS) is a lightweight, interpreted, 
      or just-in-time compiled programming language with 
      first-class functions.`,
      btnText: "Learn more about JS",
      destination: "JavaScript"
    },
    {
      id: 4,
      imagesrc: "https://unsplash.com/s/photos/random",
      title: "How to get a random 8 digit number in React",
      content: `HTML (HyperText Markup Language) is the most 
      basic building block of the Web. It defines 
      the meaning and structure of web content.`,
      btnText: "Learn more about Django",
      destination: "Django"
    },
    {
      id: 5,
      imagesrc:
        "https://pics.freeicons.io/uploads/icons/png/16738931111536080149-512.png",
      title: "Get a list of inputs - React",
      content: `Cascading Style Sheets (CSS) is a stylesheet language used 
      to describe the presentation 
      of a document written in HTML or XML 
      (including XML dialects such as SVG, MathML or XHTML).`,
      btnText: "Learn more about CSS",
      destination: "css"
    },
    {
      id: 6,
      imagesrc:
        "https://pics.freeicons.io/uploads/icons/png/15439815101553233114-512.png",
      title: "How to lowercase an input - React",
      content: `JavaScript (JS) is a lightweight, interpreted, 
      or just-in-time compiled programming language with 
      first-class functions.`,
      btnText: "Learn more about JS",
      destination: "html"
    }
  ];


const Home = () => {
    return (
        <div className="page-wrapper">
          
          <main>
            <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "2rem"
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
          
        </div>
      );
};
  

export default Home;