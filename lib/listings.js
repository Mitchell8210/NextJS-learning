import axios from "axios";

export const getListings = () => {
  const listings = axios
    .get("https://rent-art-stuff-backend.herokuapp.com/listings/home")
    .then((resp) => resp.data);
  return listings;
};

export const getSingleListing = (id) => {
  const listing = axios
    .get(`https://rent-art-stuff-backend.herokuapp.com/listings/single/${id}`)
    .then((resp) => resp.data);
  return listing;
};
