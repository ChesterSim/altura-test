import { FC } from "react";
import { Nft } from "../../types";

interface NftCardProps extends Nft {
  onClick: () => void;
}

export const NftCard: FC<NftCardProps> = ({ image_url, name, onClick }) => {
  return (
    <div
      className="duration-250 flex cursor-pointer flex-col gap-2 overflow-hidden rounded-lg border-x-2 border-y-2 border-gray-800 border-y-gray-800 px-2 py-4 transition hover:scale-110"
      onClick={onClick}
    >
      <div className="flex max-h-40 justify-center">
        <img
          className="h-40 w-40 rounded-md object-cover"
          src={image_url}
          alt={`${name} image`}
        />
      </div>
      <hr className="my-2 border-gray-800" />
      <div className="px-2 text-sm text-white">{name}</div>
    </div>
  );
};
