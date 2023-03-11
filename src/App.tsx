import "./index.css";
import { NftsDisplayPage } from "./features/nfts";
import Modal from "react-modal";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-10 bg-black py-20 px-10">
      <h1 className="text-xl text-white">Altura Frontend Test</h1>
      <NftsDisplayPage />
    </div>
  );
}

export default App;
