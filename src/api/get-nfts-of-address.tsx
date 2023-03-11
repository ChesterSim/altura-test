import { FC } from "react";
import axios from "axios";

const OPENSEA_API = "https://api.opensea.io/api/v1";

export const getNftsOfAddress = async (address: string) => {
  const res = await axios.get(`${OPENSEA_API}/assets?owner=${address}`);

  return res.data;
};
