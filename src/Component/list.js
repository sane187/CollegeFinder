import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@mui/material";
import MouseSharpIcon from "@mui/icons-material/MouseSharp";
import "./list.css";
const CollegeList = ({ value }) => {
  const link = value["web_pages"][0];
  return (
    <Card className="card">
      <CardContent>
        <Typography paddingBottom={0.5}>{value.name}</Typography>
        <Typography fontWeight={700} paddingBottom={0.5}>
          State: {value["state-province"]}
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        <Button
          className="card-button"
          variant="contained"
          startIcon={<MouseSharpIcon />}
          onClick={() => console.log(value["web_pages"][0])}
          href={link}
        >
          Click to visit
        </Button>
      </CardActions>
    </Card>
  );
};

export default CollegeList;
