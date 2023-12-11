import React, { useEffect, useState } from "react";
import SingleBookPage from "../pages/SingleBookPage";
import { useParams } from "react-router";
import { covers } from "../components/constants";
const SingleBookLayout = () => {
  const { book } = useParams();
  // console.log(book);
  const [cover, setcover] = useState({});

  useEffect(() => {
    setcover(
      covers.filter((bookcover) => {
        return book == bookcover.title;
      })
    );
    console.log(cover);
  }, [covers]);

  return <SingleBookPage bookdetails={cover[0]}></SingleBookPage>;
};

export default SingleBookLayout;
