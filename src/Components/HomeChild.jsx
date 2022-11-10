import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { Add } from "../Redux/actions/action";
import { Selected } from "../Redux/actions/action";
import { Link } from "react-router-dom";
import "./Styles/Style.css";

const HomeChild = ({ item }) => {
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(Add(e));
  };

  const selected = (e) => {
    dispatch(Selected(e));
  };

  return (
    <Box>
      <Box>
        <Card sx={{ minWidth: 280, m: 5 }}>
          <img height="300" width="100%" src={item.image} alt="img" />
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
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              className="Buttons"
              variant="contained"
              size="small"
              onClick={() => send(item)}
              sx={{ backgroundColor: "orange", fontWeight: 600 }}
            >
              add to cart
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
      </Box>
    </Box>
  );
};

export default HomeChild;
