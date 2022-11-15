import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import HomeChild from "./HomeChild";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../Redux/actions/action";

export const Home = ({ search }) => {
  const [product, setProduct] = useState([]);
  const stateProducts = useSelector((state) => state.cartReducer.products);
  const dispatch = useDispatch();

  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    stateProducts.length <= 0 && dispatch(Product(result.data));
    setProduct(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    const filtered = stateProducts.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setProduct(filtered);
  }, [search]);

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
