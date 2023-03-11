import { FC, useState } from "react";
import { Input } from "../../components/Input";
import { NftCollage } from "./NftCollage";

export const NftsDisplayPage: FC = () => {
  const [address, setAddress] = useState("");

  return (
    <div className="flex w-full max-w-screen-xl flex-col gap-4">
      <div className="text-gray-100">Search NFTs of wallet address:</div>
      <Input value={address} onChange={(e) => setAddress(e.target.value)} />
      <br />
      <NftCollage address={address} />
    </div>
  );
};
