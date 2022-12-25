import { Component } from "react";
import HeroSection from "../Components/heroSection";
import Cards from "../Components/card";
class Dashboard extends Component {
  render() {
    return (
      <>
        <div>
          <HeroSection />
          <Cards />
        </div>
      </>
    );
  }
}

export default Dashboard;
