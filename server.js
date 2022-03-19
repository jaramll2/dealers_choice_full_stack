const { db, Book, syncAndSeed } = require('./db');
const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));


//ROUTES
app.get('/api/books', async(req,res,next)=>{
    try{
        const books = await Book.findAll();
        res.send(books);
    }
    catch(err){
        next(err);
    }
});

app.delete('/api/books/:id',async(req,res,next)=>{
    try{
        const book = await Book.findByPk(req.params.id);
        await book.destroy();
        res.sendStatus(204);
        
    }
    catch(err){
        next(err);
    }
});

const start = async ()=>{
    try{
        await db.sync();
        await syncAndSeed();

        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on ${port}`));
    }
    catch(err){
        console.log(err);
    }
};

start();