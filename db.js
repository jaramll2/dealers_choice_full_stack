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
    },
    summary:{
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

const syncAndSeed = async()=>{
    try{
        await Promise.all([
            Book.create({name: 'The Power Wish', author: 'Keiko', summary:`
            Summon the energy of the universe to make your dreams come true with this best-selling guide 
            to a powerful manifestation method by Japan\'s leading astrologer.With Keiko as your astrological coach, 
            you don't merely wait for the universe to fulfill your dreams; you become actively involved in 
            charting a path for your life - and in finding the love, happiness, and success you've always desired.`}),
            Book.create({name: 'Auras', author: 'Eliza Swann', summary:`Auras: The Anatomy of the Aura is a modern 
            illustrated guide to the ancient practice of aura reading. The latest title in The Start Here Guide Series, 
            this is the perfect book to introduce readers to the power and beauty of auras. These layered veils of 
            energy surround all physical things and reflect the state of their internal energy flow. Author and 
            teacher Eliza Swann demystifies the world of auras and brings an ancient tradition into the modern era`}),
            Book.create({name: 'Book of Dreams', author: 'Sylvia Browne', summary:`Sylvia Browne's Book of Dreams is 
            based on 30 years of research, and in it Sylvia looks at different kinds of dreams and reveals their 
            influence on our memories, health and well-being, and how, through our dreams, we can reconnect with our 
            departed loved ones through this altered state of being. Written with clarity and humour, she includes 
            fascinating case studies and exercises to help you understand how dreams are an important link to the 
            spirit world, or The Other Side.

            In this book you will discover how to: Overcome nightmares and recurring dreams; Identify if a dream is 
            prophetic, and what it means; Use dreams to visit and discover more about the spirit world; Learn directed 
            dreaming to improve your happiness and health; Tap the problem-solving power of dreams; And much more`}),
            Book.create({name: 'Dangerous Games to Play in the Dark', author: 'Lucia Peters', summary:`What begins 
            as a test of bravery or a sleepover activity—chanting in front of a mirror, riding an elevator alone, taking 
            pictures in the dark—can become something . . . dangerous. This compendium collects the most spine-chilling 
            games based on urban legends from around the world. Centuries–old games such as Bloody Mary and Light as a 
            Feather, Stiff as a Board are detailed alongside new games from the internet age, like The Answer Man, a 
            sinister voice that whispers secrets to whomever manages to contact him with a cellphone. With step-by-step 
            instructions, historical context, and the stakes for each game, this black handbook is the ideal gift for 
            anyone looking for a late-night thrill—but beware who, or what, may come out to play.`}),
            Book.create({name: 'Alien Encounters and the Paranormal', author: 'Andrew Hennessey', summary:`
            This book is a rare phenomenon in the publishing world. Never before has a book on UFOs, abductions and 
            the paranormal world of ghosts, fairies and demons acted so expertly as an educational tool, guiding the 
            reader in a truly informed and exciting way along a personal journey into the unknown. Always objective 
            but with the added observations of renowned Scottish ufologist Andrew Hennessey's personal experiences and 
            understanding from a very early age Alien Encounters and the Paranormal sets itself apart as a genuine, 
            highly intelligent and heart-stopping account into an extraordinary world. This book acts as a cautionary 
            tale against apathy and disbelief regarding alien encounters, providing at the same time the language, 
            information and history that is required to be mindful and ready for what is taking place now and could 
            possibly happen in the future. This book is for anyone and everyone who has an interest in UFOs and the 
            paranormal, but don't know where to begin, don't' know the language and don't know a Philip Schneider 
            from a Paul Schroeder, but want to know. This book not only presents information, original photographs 
            and recounts both well-known UFO sightings and new ones, it also teaches the terms and broad categories 
            associated with ufology and the paranormal. Everyone who reads this book will become at least an armchair 
            expert, but more importantly an informed citizen and human being. It has been prepared so that every age 
            category from early teens upwards, from the amateur to the professional, can benefit.`}),
            Book.create({name: 'The Dedalus Occult Reader: The Garden of Hermetic Dreams', author: 'Gary Lachman', summary:`
            People have enjoyed stories of magic and the supernatural for ages, but in the late 18th century, tales of 
            the occult became something more than a source of entertainment, or the means of enjoying the thrill of the 
            strange and unknown. Drawing on the tradition of 'rejected knowledge', at the dawn of the modern age, numerous 
            writers found in the occult a powerful antidote to the rising scientification of human experience. In these 
            reports from the dark side, the weird, enigmatic and unexplainable became symbols of the human spirit's 
            resistance to the new rational world. Dedalus Occult Reader brings together for the first time a unique 
            collection of European fiction, offering some of the finest flowers and bizarre blooms from the hermetic 
            gardens of literary occultism.`}),
            Book.create({name: 'An Ideal Husband', author: 'Oscar Wilde', summary:`“An Ideal Husband” is a comedic play 
            by Oscar Wilde. It was first performed in London in 1895. In the play, a man must stop his wife from finding 
            out that he’s built his entire career on selling out political secrets. The play exposes the problems with 
            high society and deals with complex moral themes in a comic way. The play is set in 19th-century London, and 
            the main character is Sir Robert Chiltern. Robert is a popular politician and member of the House of Commons. 
            He does whatever it takes to succeed, and he’s not above blackmail and fraudulent activities. His wife, 
            Gertrude, has no idea that most of his wealth comes from illegal acts.`}),
            Book.create({name: 'Lady Windermere\'s Fan', author: 'Oscar Wilde', summary:`Lady Windermere's Fan, A Play 
            About a Good Woman is a four-act comedy by Oscar Wilde, first performed on Saturday, 20 February 1892, at 
            the St James's Theatre in London. The story concerns Lady Windermere, who suspects that her husband is having 
            an affair with another woman.`}),
            Book.create({name: 'Sense and Sensibility', author: 'Jane Austen', summary:`Sense and Sensibility is a novel 
            by Jane Austen, published in 1811. It was published anonymously; By A Lady appears on the title page where 
            the author's name might have been. It tells the story of the Dashwood sisters, Elinor and Marianne as they 
            come of age.`}),
            Book.create({name: 'Mansfield Park', author: 'Jane Austen', summary:`Mansfield Park is the third published 
            novel by Jane Austen. The novel tells the story of Fanny Price, starting when her overburdened family sends 
            her at the age of ten to live in the household of her wealthy aunt and uncle and following her development 
            into early adulthood.`}),
            Book.create({name: 'The Future of Humanity', author: 'Michio Kaku', summary:`Kaku discusses the future and 
            survival of the human species and discusses topics such as terraforming Mars and interstellar travel. Given 
            that it may take centuries to reach the closest suns and exoplanets, Kaku also explores alternative paths 
            to ensure the survival of humanity, including the possibility of genetic engineering and transferring human 
            consciousness into non-biological machines`}),
            Book.create({name: 'Defining Decade: Why Your Twenties Matter And How To Make The Most Of Them Now', author: 'Meg Jay', summary:`
            Contemporary culture tells us the twentysomething years don't matter. Clinical psychologist Dr Meg Jay 
            argues that this could not be further from the truth. In fact, your twenties are the most defining decade 
            of adulthood. The Defining Decade weaves the latest science of the twentysomething years with real-life 
            stories to show us how work, relationships, personality, social networks, identity and even the brain 
            can change more during this decade than at any other time in adulthood. Smart, compassionate and 
            constructive, The Defining Decade is a practical guide to making the most of the years we cannot afford to 
            miss.`}),
            Book.create({name: 'How To Win Friends & Influence People', author: 'Dale Carnegie', summary:`
            Dale Carnegie’s rock-solid, time-tested advice has carried countless people up the ladder of success in their 
            business and personal lives. One of the most groundbreaking and timeless bestsellers of all time, How to Win 
            Friends & Influence People will teach you: Six ways to make people like you,twelve ways to win people 
            to your way of thinking, nine ways to change people without arousing resentment and much more!`}),
            Book.create({name: 'Serial Killers: The Method and Madness of Monsters', author: 'Peter Vronsky', summary:`
            Serial Killers: The Method and Madness of Monsters is a non-fiction true crime history by Peter Vronsky, 
            a criminal justice historian. It surveys the history of serial homicide, its culture, psychopathology, and 
            investigation from the Roman Empire to the early 2000s`}),
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