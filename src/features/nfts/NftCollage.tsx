import { FC, useEffect, useState } from "react";
import { getNftsOfAddress } from "../../api/get-nfts-of-address";
import { Nft } from "../../types";
import { NftCard } from "./NftCard";
import { NftDetailsModal } from "./NftDetailsModal";

interface NftCollageProps {
  address: string;
}

export const NftCollage: FC<NftCollageProps> = ({ address }) => {
  const [nfts, setNfts] = useState<Nft[]>([]);
  const [selectedNft, setSelectedNft] = useState<Nft | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (address === "") {
      setNfts([]);
      return;
    }

    setLoading(true);
    fetchNfts(address)
      .then((assets) => setNfts(assets))
      .catch(() => setNfts([]))
      .finally(() => setLoading(false));
  }, [address]);

  async function fetchNfts(address: string) {
    const data = await getNftsOfAddress(address);
    return data.assets;
  }

  function renderNfts() {
    return nfts.map((nft) => (
      <NftCard {...nft} onClick={() => setSelectedNft(nft)} />
    ));
  }

  function renderSelectedNft() {
    return selectedNft ? (
      <NftDetailsModal {...selectedNft} onClose={() => setSelectedNft(null)} />
    ) : null;
  }

  return (
    <div className="grid w-full grid-cols-2 gap-6 text-white sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {loading
        ? "Loading..."
        : nfts.length === 0
        ? "No NFTs found!"
        : renderNfts()}
      {renderSelectedNft()}
    </div>
  );
};
