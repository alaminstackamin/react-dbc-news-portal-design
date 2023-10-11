import Card from "./components/cards/Card";
import CardDefault from "./components/cards/CardDefault";
import OverlayCard from "./components/cards/OverlayCard";
import SmallCard from "./components/cards/SmallCard";

function App() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CardDefault />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CardDefault />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CardDefault />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CardDefault />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Card />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Card />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Card />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Card />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <OverlayCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <SmallCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
