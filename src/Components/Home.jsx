import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import HomeChild from "./HomeChild";
import { useSelector } from "react-redux";

export const Home = ({ search }) => {
  const [product, setProduct] = useState([]);
  // const stateProducts = useSelector((state) => state.cartReducer.carts);
  // console.log("aaaaaaaaaa", stateProducts);

  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setProduct(result.data);
    // console.log("aaaa", result);
  };

  useEffect(() => {
    getApi();
  }, []);

  // useEffect(() => {
  //   const filtered = stateProducts.filter((item) =>
  //     item.title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setProduct(filtered);
  // }, [search]);

  return (
    <Box>
      <Grid container>
        {product.map((item, key) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
              <HomeChild item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Home;
