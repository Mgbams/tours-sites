import React, { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // function to fetch data from the given url
  const fetchData = async () => {
    const response = await fetch(url);
    const tourSites = await response.json();
    setData(tourSites);
    setIsLoading(false);
  };

  /*   allows rerendering of components when data is fetched */
  useEffect(() => {
    fetchData();
  }, [url]);

  /* removes a tour when the not interested button is clicked */
  const removeHandler = (id) => {
    const interested = data.filter((response) => response.id !== id);
    setData(interested);
  };

  return { data, isLoading, removeHandler };
};
