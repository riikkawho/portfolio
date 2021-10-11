import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListItemButton, ListItemText, Card } from "@mui/material";
import infosService from '../services/infosService'
import moment from "moment";

const RepoDetails = (props) => {
    const [showRepo, setShowRepo] = useState()
    const [repoInfo, setRepoInfo] = useState([])
    const [subInfo, setSubInfo] = useState([])

    const onClickRepo = (index) => {
        showRepo === index
        ? setShowRepo()
        : setShowRepo(index)
      
        axios
        .get(`https://api.github.com/repos/riikkawho/${subInfo[index].name}/contents`)
        .then(response => {
           setRepoInfo(response.data)
        }) 
      }
      
      useEffect(() => {
       infosService
         .getSubInfo()
         .then(response => {
           setSubInfo(response.data)
         })
     }, [])

    return (
      <div>
        <h4>Repositories</h4>
        {subInfo.map((repo, index) => 
          showRepo === index
          ? <Card>
            <ListItemButton key={repo.name} onClick={() => onClickRepo(index)}>
            <ListItemText primary={repo.name} secondary={`Contains ${repoInfo.length} items, last commit was ${moment(repo.pushed_at, "YYYY-MM-DD").fromNow()}, written in ${repo.language}`}/>
            </ListItemButton>
            </Card>
    
          : <Card>
            <ListItemButton key={repo.name} onClick={() => onClickRepo(index)}>
            <ListItemText primary={repo.name} />
            </ListItemButton>
            </Card>)}
        </div>
    )
  }

export default RepoDetails