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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Styles/Style.css";

export const Details = () => {
  const selectedItem = useSelector((state) => state.cartReducer.selected);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid sx={{ justifyContent: "center", width: 800 }}>
          {selectedItem.map((item, key) => {
            return (
              <Card sx={{ minWidth: 280, m: 5 }} key={key}>
                <img height="300" width="30%" src={item.image} alt="img" />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    sx={{ color: "blue" }}
                  >
                    Title: {item.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ textAlign: "justify", color: "red" }}
                  >
                    $ : {item.price}
                  </Typography>
                  <Typography variant="h5" sx={{ textAlign: "justify" }}>
                    <strong>Category :</strong>
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: "justify",
                        textDecoration: "underline",
                        pl: 20,
                      }}
                    >
                      {item.category}
                    </Typography>
                  </Typography>
                  <Typography
                    color="text.secondary"
                    variant="h5"
                    sx={{ textAlign: "justify" }}
                  >
                    <strong>Description :</strong>
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: "justify",
                        pl: 20,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Link
                    to="/redux-e-commerce"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      className="Buttons"
                      variant="contained"
                      size="small"
                      sx={{
                        width: "50%",
                        height: 40,
                        backgroundColor: "orange",
                        fontWeight: 600,
                      }}
                    >
                      Back
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Details;
