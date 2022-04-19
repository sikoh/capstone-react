import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationMenu from "./components/navigationMenu";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Widget1 from "./pages/widget1";
import Widget2 from "./pages/widget2";
import Widget3 from "./pages/widget3";
import Widget4 from "./pages/widget4";
import Widget5 from "./pages/widget5";
import Widget6 from "./pages/widget6";
import Widget7 from "./pages/widget7";
import Weather from "./pages/wether";
import Swapi from "./pages/swapi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavigationMenu />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="widget/1" element={<Widget1 />} />
            <Route path="widget/2" element={<Widget2 />} />
            <Route path="widget/3" element={<Widget3 />} />
            <Route path="widget/4" element={<Widget4 />} />
            <Route path="widget/5" element={<Widget5 />} />
            <Route path="widget/6" element={<Widget6 />} />
            <Route path="widget/7" element={<Widget7 />} />
            <Route path="weather" element={<Weather />} />
            <Route path="swapi" element={<Swapi />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
