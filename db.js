const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_full_stack',{force: true});


const Book = db.define('books',{
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }, 
    author:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

const syncAndSeed = async()=>{
    try{
        await Promise.all([
            Book.create({name: 'The Power Wish', author: 'Keiko'}),
            Book.create({name: 'Auras', author: 'Eliza Swann'}),
            Book.create({name: 'Book of Dreams', author: 'Sylvia Browne'}),
            Book.create({name: 'Dangerous Games to Play in the Dark', author: 'Lucia Peters'}),
            Book.create({name: 'Alien Encounters and the Paranormal', author: 'Andrew Hennessey'}),
            Book.create({name: 'The Dedalus Occult Reader: The Garden of Hermetic Dreams', author: 'Gary Lachman '}),
            Book.create({name: 'An Ideal Husband', author: 'Oscar Wilde'}),
            Book.create({name: 'Lady Windermere\'s Fan', author: 'Oscar Wilde'}),
            Book.create({name: 'Sense and Sensibility', author: 'Jane Austen'}),
            Book.create({name: 'Mansfield Park', author: 'Jane Austen'}),
            Book.create({name: 'The Future of Humanity', author: 'Michio Kaku'}),
            Book.create({name: 'Defining Decade: Why Your Twenties Matter And How To Make The Most Of Them Now', author: 'Meg Jay'}),
            Book.create({name: 'How To Win Friends & Influence People', author: 'Dale Carnegie'}),
            Book.create({name: 'Serial Killers: The Method and Madness of Monsters', author: 'Peter Vronsky'}),
        ]);
    }
    catch(err){
        console.log(err);
    }
}

module.exports={
    db, 
    Book,
    syncAndSeed
}