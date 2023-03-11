export interface Nft {
  id: number;
  name: string;
  image_url: string;
  permalink: string;
  traits: { trait_type: string; value: string }[];
  rarity_data: { rank: number };
  asset_contract: { address: string };
}
