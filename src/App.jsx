import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=''>
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
