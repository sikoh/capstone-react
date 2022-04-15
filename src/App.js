import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationMenu from "./components/navigationMenu";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationMenu />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="/" exact component={Home} />
            <Route path="/about"  component={About} />
            <Route path="/contact"  component={Contact} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
