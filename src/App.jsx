import LatestTitle from "./components/LatestTitle";
import ViewLine from "./components/ViewLine";
import Card from "./components/cards/Card";
import CardDefault from "./components/cards/CardDefault";
import OverlayCard from "./components/cards/OverlayCard";
import SmallCard from "./components/cards/SmallCard";

function App() {
  return (
    <>
      <div className="container">
        <div className="row g-2 mt-5">
          <div className="col-12 col-md-12 col-lg-6 col-xl-6 order-1">
            <OverlayCard />
            <div className="row mt-3">
              <div className="col-12 col-md-6">
                <Card />
              </div>
              <div className="col-12 col-md-6">
                <Card />
              </div>
              <div className="col-12 col-md-6">
                <Card />
              </div>
              <div className="col-12 col-md-6">
                <Card />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 order-3 order-lg-2">
            <div className="rounded-2 bg-white">
              <LatestTitle />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <div style={{ padding: "2px" }} className="text-center fs-6">
                <a href="/bangladesh" className="text-danger">
                  আরও পড়ুন
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 order-2 order-lg-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className="row g-2 mt-2">
          <div className="col-12">
           <ViewLine title="বাংলাদেশ" link="#" />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CardDefault />
            <Card />
            <Card />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CardDefault />
            <Card />
            <Card />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CardDefault />
            <Card />
            <Card />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CardDefault />
            <Card />
            <Card />
          </div>
        </div>

        <div className="row g-2 mt-2">
          <div className="col-12 col-lg-6">
          <ViewLine title="আন্তর্জাতিক" link="#" />

            <div className="row g-2">
              <div className="col-12 col-md-6">
                <CardDefault />
                <Card />
                <Card />
                <Card />
              </div>
              <div className="col-12 col-md-6">
                <div className="rounded-2 bg-white">
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                  <div style={{ padding: "3px" }} className="text-center fs-6">
                    <a href="/bangladesh" className="text-danger">
                      আরও পড়ুন
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
             <ViewLine title="খেলাধুলা" link="#" />

            <div className="row g-2">
              <div className="col-12 col-md-6">
                <CardDefault />
                <Card />
                <Card />
                <Card />
              </div>
              <div className="col-12 col-md-6">
                <div className="rounded-2 bg-white">
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                  <div style={{ padding: "3px" }} className="text-center fs-6">
                    <a href="/bangladesh" className="text-danger">
                      আরও পড়ুন
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
