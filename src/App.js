import "./App.css";
import Content from "./components/content/Content";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
