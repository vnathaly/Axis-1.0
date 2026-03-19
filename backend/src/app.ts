import express from 'express';
import cors from 'cors'

// Create Express application
const app = express();
app.use(cors());

app.get('/test', (req, res)=> {
    res.json({message:  "Request received"})
})

export default app;
