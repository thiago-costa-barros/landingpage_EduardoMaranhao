import "./App.css";
import Footer from "./components/sections/footer";

import Menu from './components/sections/header/menu';
import Banner from "./components/sections/main/banner";
import Depoimentos from "./components/sections/main/depoimentos";
import Jobs from "./components/sections/main/jobs/jobs";
import Portfolio from "./components/sections/main/portfolio";
import Videos from "./components/sections/main/videos/videos";


const App = () => {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <section className="main">
          <div>
            <Banner />
          </div>
          <div>
            <Portfolio />
          </div>
          <div className="videos--container">
            <Videos />
          </div>
          <div className="jobs">
            <Jobs />
          </div>
          <div>
            <Depoimentos />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
