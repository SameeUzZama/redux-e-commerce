import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import HomeChild from "./HomeChild";

const Home = () => {
  const [product, setProduct] = useState([]);

  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setProduct(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <Box>
      <Grid container>
        {product.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <HomeChild item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Home;
