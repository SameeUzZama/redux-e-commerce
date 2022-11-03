import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const HomeChild = ({ item }) => {
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
          <CardActions>
            <Button size="small">add to cart</Button>
            <Button size="small">details</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default HomeChild;
