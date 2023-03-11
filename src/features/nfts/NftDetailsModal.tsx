import { FC } from "react";
import Modal from "react-modal";
import { Nft } from "../../types";

Modal.setAppElement("#root");

const EXPLORER_URL = "https://etherscan.io/address";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "600px",
    background: "black",
    borderRadius: "8px",
    borderColor: "rgb(209 213 219)",
    maxHeight: "90%",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

interface NftDetailsModalProps extends Nft {
  onClose: () => void;
}

const Trait: FC<{ trait_type: string; value: string }> = ({
  trait_type,
  value,
}) => {
  return (
    <div className="flex w-full justify-between gap-4 rounded-md border-2 p-2 text-xs text-gray-100">
      <div className="text-gray-400">{trait_type}</div>
      <div className="text-right">{value}</div>
    </div>
  );
};

export const NftDetailsModal: FC<NftDetailsModalProps> = ({
  image_url,
  traits,
  name,
  onClose,
  permalink,
  asset_contract,
}) => {
  function renderTraits() {
    return traits.map((trait) => <Trait {...trait} />);
  }

  return (
    <Modal isOpen={true} style={customStyles} onRequestClose={onClose}>
      <div className="scrollbar-hide flex w-full flex-col items-center justify-center gap-4">
        <div className="text-xl font-bold text-gray-100">{name}</div>
        <img className="w-60" src={image_url} alt={`${name} image`} />
        <div className="flex w-full flex-col gap-2">{renderTraits()}</div>
        <div className="flex w-full gap-4">
          <a
            href={permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-md bg-blue-500 p-2 text-center text-white"
          >
            Opensea
          </a>
          <a
            className="flex-1 rounded-md bg-white p-2 text-center text-blue-900"
            href={`${EXPLORER_URL}/${asset_contract.address}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Etherscan
          </a>
        </div>
      </div>
    </Modal>
  );
};
