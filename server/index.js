const express = require('express')
const dotenv = require('dotenv').config();
const cors = require('cors');
const { randomBytes } = require ('crypto');

const app = express();

app.use(express.json());
app.use(cors())

// ------------ POSTS SERVICE ---------

const posts = {
}

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts',(req, res) => {
    //Create ID (iu5879f7sd)
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;
    posts[id] = {
        id,
        title
    }
    res.status(200).send(posts[id]);
});

// ------------ COMMENTS SERVICE ---------

const commentsByPostId = {
}

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;
  
    const comments = commentsByPostId[req.params.id] || [];
  
    comments.push({ id: commentId, content });
  
    commentsByPostId[req.params.id] = comments;
  
    res.status(200).send(comments);
});

// ---------------------------------------

app.listen(process.env.PORT, function () {
    console.log("Server listening on port", process.env.PORT,)
})
