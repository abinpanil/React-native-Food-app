import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchHandler = async (searchData) => {
    try {
      const responce = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchData,
          location: "san jose",
        },
      });
      setResults(responce.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchHandler("p");
  }, []);

  return [errorMessage, results, searchHandler];
};
