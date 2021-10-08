import React, { useState, useEffect } from "react";
import { ListItemAvatar, Avatar, ListItem, Card, ListItemText } from '@mui/material'
import infosService from "../services/infosService"
import moment from "moment"

const Info = () => {
  const [info, setInfo] = useState([])
 
  useEffect (() => {
    infosService
    .getMainInfo()
    .then(response => {
      setInfo(response.data)
    })
  }, [])
  
    const updated_date = moment(info.updated_at, "YYYY-MM-DD").fromNow()
    const created_date = moment(info.created_at, "YYYY-MM-DD").fromNow()

    return (
    <div>
      <div>
        <h2>{info.name}</h2>
        <Card style={{ backgroundColor: "lightgrey" }}>
          <p>{info.bio}</p>
        </Card>
        <h4>My profiles:&nbsp;
          <a href={info.html_url}>Github</a>&nbsp;&nbsp;
          <a href="https://www.linkedin.com/in/riikka-kukka">LinkedIn</a></h4>
      </div>
      <p/>
      <div>
        <h3>Github review</h3> 
          <Card>
          <ListItem alignItems="center">
            <ListItemText>@{info.login}</ListItemText>
            <ListItemAvatar><Avatar src={info.avatar_url} alt="avatar"/></ListItemAvatar>
          </ListItem>
            <ListItemText>
              created {created_date}, last update {updated_date}
            </ListItemText>
          </Card>
      </div>
    </div>
    )
  }

  export default Info;