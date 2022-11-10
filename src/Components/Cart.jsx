import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Remove } from "../Redux/actions/action";
import { Selected } from "../Redux/actions/action";
import "./Styles/Style.css";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.carts);

  const selected = (e) => {
    dispatch(Selected(e));
  };

  const remove = (id) => {
    dispatch(Remove(id));
  };

  return (
    <Box>
      <Box>
        {cartItems.length === 0 ? (
          <Grid>
            <h1>Your Cart is Empty</h1>
          </Grid>
        ) : (
          <Grid
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            {cartItems.map((item, key) => {
              return (
                <Grid
                  sx={{ display: "flex", flexWrap: "wrap" }}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={key}
                >
                  <Card sx={{ minWidth: 280, m: 5 }}>
                    <img height="280" width="100%" src={item.image} alt="img" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title.substr(0, 10) + "..."}
                      </Typography>
                      <Typography sx={{ textAlign: "center" }}>
                        $ : {item.price}
                      </Typography>
                      <Typography>
                        Category : {item.category.substr(0, 10) + "..."}
                      </Typography>
                      <Typography color="text.secondary">
                        Description : {item.description.substr(0, 5) + "..."}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                      <Button
                        className="Buttons"
                        sx={{ backgroundColor: "orange", fontWeight: 600 }}
                        variant="contained"
                        size="small"
                        onClick={() => remove(item.id)}
                      >
                        Remove from cart
                      </Button>
                      <Link
                        to="/redux-e-commerce/details"
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          className="Buttons"
                          sx={{ backgroundColor: "orange", fontWeight: 600 }}
                          variant="contained"
                          size="small"
                          onClick={() => selected(item)}
                        >
                          details
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
