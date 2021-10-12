import React, { useState, useEffect } from "react";
import { Button, TextField, Card, Stack } from '@mui/material';
import commentService from "../services/commentService";

  
  const Comment = () => {
    const [newComment, setNewComment] = useState([])
    const [comments, setComments] = useState([])
    
    const commentObject = {
      content: newComment
    } 

    const addComment = (event) => { 
      event.preventDefault()

        commentService
        .postComment(commentObject) 
        .then(response => {
          setComments(comments.concat(response.data))
        })
        setNewComment('')
      }

        useEffect(() => {
        commentService
        .getComments()
        .then(response => {
          setComments(response.data)
      })
    }, [])
  
    const handleChange = (event) => {
      setNewComment(event.target.value)
    }
      return (
      <div>
        <h2> Comments </h2> 
        <p>Please leave a comment to let me know you were here:</p> 
        <TextField
        onSubmit={addComment}
        value={newComment}
        onChange={handleChange}/>

        <br/><Button onClick={addComment} type="submit">Submit</Button>
          <Card style={{ backgroundColor: "lightgrey"}}>

            <br/> {[...comments].reverse().map(comment => 
            <Stack key={comment.content} textAlign="center" fontSize="14px">
            <p>{comment.content}</p>
            </Stack>)}
          </Card>
      </div>
      )
  }

  export default Comment;