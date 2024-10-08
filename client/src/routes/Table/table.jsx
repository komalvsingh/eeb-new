import * as React from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.css";

const makeStyle = (type) => {
  if (type === "buy") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (type === "rent") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    // Fetch data from MongoDB
    axios
      .get("http://localhost:8800/api/posts/") // Replace with your actual API endpoint
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="Table">
      <h3>Recent Posts</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">City</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {posts.map((post) => (
              <TableRow
                key={post._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {post.title}
                </TableCell>
                <TableCell align="left">
                  <img src={post.images[0]} alt={post.title} width="50" />
                </TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(post.type)}>
                    {post.type}
                  </span>
                </TableCell>
                <TableCell align="left">{post.price}</TableCell>
                <TableCell align="left">{post.city}</TableCell>
                <TableCell align="left" className="Details">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
