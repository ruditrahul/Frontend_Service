import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import "./Session.css";


const Session = () => {
  const [data, setData] = useState({});


  useEffect(() => {
    const requestdata = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // localStorage.getItem("token")
        authorization: "JWT_TOKEN",
      },
      body: JSON.stringify('#'),
    };
    fetch("API_END_POINT", requestdata)
      .then((response) => response.json())
      .then((data) => setData({ data }))
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Card className='card'>
      <CardContent className='card-content'>
      <div className="header">
        <h2>Lorem Ipsum</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
       <div className="middle">
       <div className="avatar">
         <Avatar/>
       </div>
       <div className="session">
       <Typography>Session Status</Typography>
        <Typography>Session Timing</Typography>
       </div>
       
       </div>
       </CardContent>
      <CardActions className="actions">
        <Button variant="contained" color="primary">User Link</Button>
        <h4>₹10,000</h4>
      </CardActions>
      </Card>
  );
};

export default Session;
