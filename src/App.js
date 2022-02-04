import "./App.css";
import { VinylAmountProvider } from "./contexts/vinylAmountContext";
import { VinylItem } from "./components/VinylItem";

const data = [
  {
    id: 1,
    image:
      "https://i.discogs.com/WWgjQ3DIi8rFpbuMr9LYnE6xDCROuPaM7Tn_Z_vLwo8/rs:fit/g:sm/q:90/h:593/w:593/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTU0/NTY3ODMtMTM5NDk0/MDMxMi01MTY3Lmpw/ZWc.jpeg",
    artist: "Tycho",
    title: "Awake",
    price: 20,
  },
  {
    id: 2,
    image:
      "https://i.discogs.com/Oi0Y48nzWokTLVqceX5zsi_PuMYctkOW2_PBRVGStQY/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWltYWdlcy9SLTEw/NTkzMzYtMTE4ODkw/MTgwMC5qcGVn.jpeg",
    artist: "Apparat",
    title: "Walls",
    price: 40,
  },
];

function App() {
  return (
    <VinylAmountProvider>
      <div className="App">
        <header className="App-header">
          <h2>VinylStore</h2>
          <div data-testid="app-container">
            {data.map((item) => (
              <div key={item.id}>
                <VinylItem data={item} />
              </div>
            ))}
          </div>
        </header>
      </div>
    </VinylAmountProvider>
  );
}

export default App;
