function showtxt(){/*this function you be showing a small text with description of the type */
    const mbtisel = document.getElementById('mbti-types')
    mbti = mbtisel.value //global variable dont judged me a try hard to mantain  scope but...
    let box = document.getElementById('txtbox')
    // Returns a random integer from 0 to 2:
    // const nrandom = Math.floor(Math.random()*3)
    const nrandom = 0

    switch(mbti){ 
        case 'INTJ' : /*INTJ*/
            box.innerHTML = "An Architect (INTJ) is a person with the Introverted, Intuitive, Thinking, and Judging personality traits. These thoughtful tacticians love perfecting the details of life, applying creativity and rationality to everything they do. Their inner world is often a private, complex one <strong>this is the most cool</strong>";
            if(nrandom === 0){
            //read a book
            document.getElementById('btn-2').href = './indications/reading.html';
            }else if (nrandom === 1){
            //photography
            document.getElementById('pagtype').href = 'mbti/indications/photography.html';


            }else {
            //other indication

            }
        break;

        case 'INTP' : /*INTP*/
        box.innerHTML = "A Logician (INTP) is someone with the Introverted, Intuitive, Thinking, and Prospecting personality traits. These flexible thinkers enjoy taking an unconventional approach to many aspects of life. They often seek out unlikely paths, mixing willingness to experiment with personal creativity.";
        if(nrandom === 0){

        }else if (nrandom === 1){

        }else{

        }
    break;

        case 'ENTJ' : /*ENTJ*/
            box.innerHTML = "A Commander (ENTJ) is someone with the Extraverted, Intuitive, Thinking, and Judging personality traits. They are decisive people who love momentum and accomplishment. They gather information to construct their creative visions but rarely hesitate for long before acting on them";
            if(nrandom === 0){
                //other indication
                }else if (nrandom === 1){
                //photography
    
    
                }else{

                 //read a book
                document.getElementById('pagtype').href = 'mbti/indications/reading.html';
                }
            break;

        break;

        case 'ENTP' : /*ENTP*/
        box.innerHTML = "A Debater (ENTP) is a person with the Extraverted, Intuitive, Thinking, and Prospecting personality traits. They tend to be bold and creative, deconstructing and rebuilding ideas with great mental agility. They pursue their goals vigorously despite any resistance they might encounter.        ";
        if(nrandom === 0){

        }else if (nrandom === 1){

        }else{

        }
    break;
/*------------*/
        case 'INFJ' : /*INFJ*/
            box.innerHTML = "An Advocate (INFJ) is someone with the Introverted, Intuitive, Feeling, and Judging personality traits. They tend to approach life with deep thoughtfulness and imagination. Their inner vision, personal values, and a quiet, principled version of humanism guide them in all things.";
            if(nrandom === 0){

            }else if (nrandom === 1){
                //photography
                document.getElementById('pagtype').href = 'mbti/indications/photography.html';

            }else{
    
            }
        break;

        case 'INFP' : /*INFP*/
        box.innerHTML = "A Mediator (INFP) is someone who possesses the Introverted, Intuitive, Feeling, and Prospecting personality traits. These rare personality types tend to be quiet, open-minded, and imaginative, and they apply a caring and creative approach to everything they do, <strong>this is the most beatifull in the universe</strong>";
        if(nrandom === 0){
            //photography
            document.getElementById('pagtype').href = 'mbti/indications/photography.html';

        }else if (nrandom === 1){

        }else{

        }
    break;

        case 'ENFJ' : /*ENFJ*/
            box.innerHTML = "A Mediator (INFP) is someone who possesses the Introverted, Intuitive, Feeling, and Prospecting personality traits. These rare personality types tend to be quiet, open-minded, and imaginative, and they apply a caring and creative approach to everything they do";
            if(nrandom === 0){

            }else if (nrandom === 1){
    
            }else{
    
            }
        break;

        case 'ENFP' : /*ENFP*/
        box.innerHTML = "A Campaigner (ENFP) is someone with the Extraverted, Intuitive, Feeling, and Prospecting personality traits. These people tend to embrace big ideas and actions that reflect their sense of hope and goodwill toward others. Their vibrant energy can flow in many directions.        ";
        if(nrandom === 0){

        }else if (nrandom === 1){

        }else{

        }
    break;
/*------------*/
        case 'ISTJ' : /*ISTJ*/
            box.innerHTML = "A Logistician (ISTJ) is someone with the Introverted, Observant, Thinking, and Judging personality traits. These people tend to be reserved yet willful, with a rational outlook on life. They compose their actions carefully and carry them out with methodical purpose.";
            if(nrandom === 0){
                //read a book
                document.getElementById('pagtype').href = 'mbti/indications/reading.html';
                }else if (nrandom === 1){
                //photography
    
    
                }else {
                //other indication
    
                }

        break;

        case 'ISFJ' : /*ISFJ*/
        box.innerHTML = "A Defender (ISFJ) is someone with the Introverted, Observant, Feeling, and Judging personality traits. These people tend to be warm and unassuming in their own steady way. They’re efficient and responsible, giving careful attention to practical details in their daily lives.        ";
        if(nrandom === 0){

        }else if (nrandom === 1){

        }else{

        }    break;

        case 'ESTJ' : /*ESTJ*/
            box.innerHTML = "An Executive (ESTJ) is someone with the Extraverted, Observant, Thinking, and Judging personality traits. They possess great fortitude, emphatically following their own sensible judgment. They often serve as a stabilizing force among others, able to offer solid direction amid adversity.";
            if(nrandom === 0){

            }else if (nrandom === 1){
    
            }else{
    
            }
        break;

        case 'ESFJ' : /*ESFJ*/
        box.innerHTML = "A Consul (ESFJ) is a person with the Extraverted, Observant, Feeling, and Judging personality traits. They are attentive and people-focused, and they enjoy taking part in their social community. Their achievements are guided by decisive values, and they willingly offer guidance to others.        ";
        if(nrandom === 0){

        }else if (nrandom === 1){

        }else{

        }
    break;
    /*------------*/

        case 'ISTP' : /*ISTP*/
            box.innerHTML = "A Virtuoso (ISTP) is someone with the Introverted, Observant, Thinking, and Prospecting personality traits. They tend to have an individualistic mindset, pursuing goals without needing much external connection. They engage in life with inquisitiveness and personal skill, varying their approach as needed.";
            if(nrandom === 0){

            }else if (nrandom === 1){
    
            }else{
    
            }
        break;

        case 'ISFP' : /*ISFP*/
        box.innerHTML = "An Adventurer (ISFP) is a person with the Introverted, Observant, Feeling, and Prospecting personality traits. They tend to have open minds, approaching life, new experiences, and people with grounded warmth. Their ability to stay in the moment helps them uncover exciting potentials.        ";
        if(nrandom === 0){

        }else if (nrandom === 1){

        }else{

        }
    break;

        case 'ESTP' : /*ESTP*/
            box.innerHTML = "An Entrepreneur (ESTP) is someone with the Extraverted, Observant, Thinking, and Prospecting personality traits. They tend to be energetic and action-oriented, deftly navigating whatever is in front of them. They love uncovering life’s opportunities, whether socializing with others or in more personal pursuits.            ";
            if(nrandom === 0){

            }else if (nrandom === 1){
    
            }else{
    
            }
        break;

        case 'ESFP' : /*ESFP*/
        box.innerHTML = "An Entertainer (ESFP) is a person with the Extraverted, Observant, Feeling, and Prospecting personality traits. These people love vibrant experiences, engaging in life eagerly and taking pleasure in discovering the unknown. They can be very social, often encouraging others into shared activities.        ";
        if(nrandom === 0){

        }else if (nrandom === 1){

        }else{

        }
    break;
    }


}

function randombook(){ //this function will select a book random in base the genre choosen

   document.querySelector('div#matter-div-read').style.height = '1300px' //grow background

    const genrebook = document.querySelector('select#booksel').value
    const txtbookdesc = document.querySelector('p#bookrecommendation')
    const numrandom = Math.floor(Math.random() * 3); //this function will randomize a number 0 & 2

    switch(genrebook){
        case 'crime':
                if(numrandom === 0){
                    txtbookdesc.innerHTML = (`<h1> Blacktop Wasteland
                    by S.A. Cosby</h1> <p> Beauregard "Bug" Montage: husband, father, honest car mechanic. But he was once known - from North Carolina to the beaches of Florida - as the best getaway driver on the East Coast. Just like his father, who disappeared many years ago.</p>  <p>After a series of financial calamities (worsened by the racial prejudices of the small town he lives in) Bug reluctantly takes part in a daring diamond heist to solve his money troubles - and to go straight once and for all. However, when it goes horrifically wrong, he´s sucked into a grimy underworld which threatens everything, and everyone, he holds dear </p>  `)
                }else if(numrandom === 1){
                    txtbookdesc.innerHTML = (`<h1> The Hound of the Baskervilles by Arthur Conan Doyle</h1><em>classic</em> <p>Sir Charles Baskerville is dead. His body was discovered on the grounds of his Devonshire estate, face frozen in fright, not far from the footprints of a large beast. The cause of death has been determined to be a heart attack, but family legend tells another tale, and Detective Sherlock Holmes is determined to uncover the truth.

                    So whodunit on the foggy moors of Baskerville Hall? In one of literature’s greatest original page-turners, the answer is a classic.
                    
                    AmazonClassics brings you timeless works from the masters of storytelling. Ideal for anyone who wants to read a great work for the first time or rediscover an old favorite, these new editions open the door to literature’s most unforgettable characters and beloved worlds.
                     </p>`)
                }
                else{                    txtbookdesc.innerHTML = (`<h1>Helter Skelter by Curt Gentry and Vincent Bugliosi </h1> <p> Fear is a major theme in this book, mainly because the book is about murder. Helter Skelter centers around the fear of the victims. There are many parts where the book is explaining the murders from one of the killer's perspective, and they often talk about the fear in those that they murdered.
                     </p>`)
                }

        break;
        case 'fantasy':
            
                             // Returns a random integer from 0 to 2:
           const numrandom2 = Math.floor(Math.random() * 3);
           if(numrandom2 === 0){
           txtbookdesc.innerHTML = (`<h1>My Life in the Bush of Ghosts</h1>
           <h2>Novel by Amos Tutuola</h2><p>My Life in the Bush of Ghosts, Amos Tutuola's second novel, was first published in 1954. It tells the tale of a small boy who wanders into the heart of a fantastical African forest, the dwelling place of innumerable wild, grotesque and terrifying beings. He is captured by ghosts, buried alive and wrapped up in spider webs, but after several years he marries and accepts his new existence. With the appearance of the television-handed ghostess, however, comes a possible route of escape. 'Tutuola ... has the immediate intuition of a creative artist working by spell and incantation.' V. S. Pritchett, New Statesman</p>`)

           }else if(numrandom2 === 1){
           txtbookdesc.innerHTML = (`<h1>Le Morte d'Arthur
           <h2>Book by Thomas Malory</h2></h1><p>Le Morte D'Arthur is one of Barnes & Noble's leatherbound classics. Each volume features authoritative texts by the world's greatest authors in an exquisitely designed bonded-leather binding, with distinctive gilt edging and an attractive silk-ribbon bookmark. Decorative, durable and collectible, these books offer hours of pleasure to readers young and old and are an indispensable cornerstone for every home library.</p>`)

           }else {
           txtbookdesc.innerHTML = (`<h1>One Thousand and One Nights</h1><p>One Thousand and One Nights is a collection of Middle Eastern folk tales compiled in Arabic during the Islamic Golden Age. It is often known in English as the Arabian Nights, from the first English-language edition, which rendered the title as The Arabian Nights' Entertainment.</p>`)

           }             
        break;
        case 'romance':
                const numrandom3 = Math.floor(Math.random() * 3 );
                if (numrandom3 === 0 ){
                    txtbookdesc.innerHTML = (`<h1>Pride and Prejudice </h1>
                    <h2>
                    by Jane Austen,
                    Anna Quindlen </h2>
                    <p>Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work "her own darling child" and its vivacious heroine, Elizabeth Bennet, "as delightful a creature as ever appeared in print." The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.</p>

                    `)
                }else if( numrandom3 === 1){
                    txtbookdesc.innerHTML = (`<h1>Gone with the Wind</h1>
                    <h2>By Margaret Mitchel</h2>
                    <p>Scarlett O'Hara, the beautiful, spoiled daughter of a well-to-do Georgia plantation owner, must use every means at her disposal to claw her way out of the poverty she finds herself in after Sherman's March to the Sea.</p>
`)

                }else {
                    txtbookdesc.innerHTML = (`<h1>Memoirs of a Geisha </h1>
                    <h2>By Arthur Golden</h2>
                    <p>A literary sensation and runaway bestseller, this brilliant debut novel presents with seamless authenticity and exquisite lyricism the true confessions of one of Japan's most celebrated geisha.

                    In Memoirs of a Geisha, we enter a world where appearances are paramount; where a girl's virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable. </p>
`)

                }
        break;
        case 'science fiction':
            const numrandom4 = Math.floor(Math.random() * 3 );
            // const numrandom4 = 2
            if (numrandom4 === 0 ){
                txtbookdesc.innerHTML = (`<h1>Ubik</h1>
                <h2>By Philip K. Dick</h2>
                <h3>i am alive you are dead</h3>
                <p><strong>you really need try PKD this guy is crazy like a genius</strong></p>
                <p>Glen Runciter is dead. Or is everybody else? Someone died in an explosion orchestrated by Runciter's business competitors. And, indeed, it's the kingly Runciter whose funeral is scheduled in Des Moines. But in the meantime, his mourning employees are receiving bewildering — and sometimes scatological — messages from their boss. And the world around them is warping in ways that suggest that their own time is running out. Or already has.

                Philip K. Dick's searing metaphysical comedy of death and salvation (the latter available in a convenient aerosol spray) is a tour de force of paranoiac menace and unfettered slapstick, in which the departed give business advice, shop for their next incarnation, and run the continual risk of dying yet again.</p>
`)
            }else if( numrandom4 === 1){
                txtbookdesc.innerHTML = (`<h1>Neuromancer </h1>
                <h2>by William Gibson</h2>
                <h3>this is one of my personal recommendation i really love this history</h3>
                <p>Neuromancer is a cyberpunk, science fiction masterpiece—a classic that ranks with 1984 and Brave New World as one of the twentieth century’s most potent visions of the future.

                The Matrix is a world within the world, a global consensus-hallucination, the representation of every byte of data in cyberspace...
                
                Henry Dorsett Case was the sharpest data-thief in the business, until vengeful former employees crippled his nervous system. But now a new and very mysterious employer recruits him for a last-chance run. The target: an unthinkably powerful artificial intelligence orbiting Earth in service of the sinister Tessier-Ashpool business clan. With a dead man riding shotgun and Molly, mirror-eyed street-samurai, to watch his back, Case embarks on an adventure that ups the ante on an entire genre of fiction.</p>
`)

            }else {
                txtbookdesc.innerHTML = (`<h1>Dune </h1>
                <h2> by Frank Herbert
                </h2>
                <h3>ok a i am not a fanboy but.... give a chance to this, please 🥺 </h3>
                <p>Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...

                When House Atreides is betrayed, the destruction of Paul’s family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad’Dib, he will bring to fruition humankind’s most ancient and unattainable dream.</p>
`)

            }

        break;
        case 'western':
            const numrandom5 = Math.floor(Math.random() * 3 );
            if (numrandom5 === 0 ){
                txtbookdesc.innerHTML = (`<h1>No Country for Old Men</h1>
                <h2> by Cormac McCarthy
                </h2>
                <p>In his blistering new novel, Cormac McCarthy returns to the Texas-Mexico border, the setting of his famed Border Trilogy. The time is our own, when rustlers have given way to drug-runners and small towns have become free-fire zones.

                One day, Llewellyn Moss finds a pickup truck surrounded by a bodyguard of dead men. A load of heroin and two million dollars in cash are still in the back. When Moss takes the money, he sets off a chain reaction of catastrophic violence that not even the law–in the person of aging, disillusioned Sheriff Bell–can contain.
                
                As Moss tries to evade his pursuers–in particular a mysterious mastermind who flips coins for human lives–McCarthy simultaneously strips down the American crime novel and broadens its concerns to encompass themes as ancient as the Bible and as bloodily contemporary as this morning’s headlines.
                No Country for Old Men is a triumph. </p>
`)
            }else if( numrandom5 === 1){
                txtbookdesc.innerHTML = (`<h1>Riders of the Purple Sage </h1>
                <h2>by Zane Grey,
                William R. Handley</h2>
                <p>Told by a master storyteller who, according to critic Russell Nye, “combined adventure, action, violence, crisis, conflict, sentimentalism, and sex in an extremely shrewd mixture,” Riders of the Purple Sage is a classic of the Western genre. It is the story of Lassiter, a gunslinging avenger in black, who shows up in a remote Utah town just in time to save the young and beautiful rancher Jane Withersteen from having to marry a Mormon elder against her will. Lassiter is on his own quest, one that ends when he discovers a secret grave on Jane’s grounds. “[Zane Grey’s] popularity was neither accidental nor undeserved,” wrote Nye. “Few popular novelists have possessed such a grasp of what the public wanted and few have developed Grey’s skill at supplying it.”</p>
`)

            }else {
                txtbookdesc.innerHTML = (`<h1>The Sisters Brothers </h1>
                <h2> by Patrick deWitt
                </h2>
                <p>Hermann Kermit Warm is going to die. The enigmatic and powerful man known only as the Commodore has ordered it, and his henchmen, Eli and Charlie Sisters, will make sure of it. Though Eli doesn't share his brother's appetite for whiskey and killing, he's never known anything else. But their prey isn't an easy mark, and on the road from Oregon City to Warm's gold-mining claim outside Sacramento, Eli begins to question what he does for a living - and whom he does it for.

                With The Sisters Brothers, Patrick deWitt pays homage to the classic Western, transforming it into an unforgettable comic tour de force. Filled with a remarkable cast of characters - losers, cheaters, and ne'er-do-wells from all stripes of life - and told by a complex and compelling narrator, it is a violent, lustful odyssey through the underworld of the 1850s frontier that beautifully captures the humor, melancholy, and grit of the Old West, and two brothers bound by blood, violence, and love.</p>
`)

            }

        break;
        case 'inspirational':
            const numrandom6 = Math.floor(Math.random() * 3 );
            if (numrandom6 === 0 ){
                txtbookdesc.innerHTML = (`<h1>Les Misérables </h1>
                <h2>by Victor Hugo, </h2>
                <p>Victor Hugo's tale of injustice, heroism and love follows the fortunes of Jean Valjean, an escaped convict determined to put his criminal past behind him. But his attempts to become a respected member of the community are constantly put under threat: by his own conscience, when, owing to a case of mistaken identity, another man is arrested in his place; and by the relentless investigations of the dogged Inspector Javert. It is not simply for himself that Valjean must stay free, however, for he has sworn to protect the baby daughter of Fantine, driven to prostitution by poverty.</p>
`)
            }else if( numrandom6 === 1){
                txtbookdesc.innerHTML = (`<h1>The Art of Happiness </h1>
                <h2> by Dalai Lama XIV,
                Howard C. Cutler
                </h2>
                <p>Nearly every time you see him, he's laughing, or at least smiling. And he makes everyone else around him feel like smiling. He's the Dalai Lama, the spiritual and temporal leader of Tibet, a Nobel Prize winner, and an increasingly popular speaker and statesman. What's more, he'll tell you that happiness is the purpose of life, and that "the very motion of our life is towards happiness." How to get there has always been the question. He's tried to answer it before, but he's never had the help of a psychiatrist to get the message across in a context we can easily understand. Through conversations, stories, and meditations, the Dalai Lama shows us how to defeat day-to-day anxiety, insecurity, anger, and discouragement. Together with Dr. Cutler, he explores many facets of everyday life, including relationships, loss, and the pursuit of wealth, to illustrate how to ride through life's obstacles on a deep and abiding source of inner peace.</p>
`)

            }else {
                txtbookdesc.innerHTML = (`<h1>The Alchemist </h1>
                <h2>by Paulo Coelho</h2>
                <p>Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different, and far more satisfying, listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams.</p>
`)

            }

        break;
            case 'historical fiction':
                const numrandom7 = Math.floor(Math.random() * 3 );
                if(numrandom7 === 0){
                    txtbookdesc.innerHTML = (`<h1>I, Claudius</h1>
                    <h2> by Robert Graves
                    </h2>
                    <p>Into the 'autobiography' of Clau-Clau-Claudius, the pitiful stammerer who was destined to become Emperor in spite of himself, Graves packs the everlasting intrigues, the depravity, the bloody purges and mounting cruelty of the reigns of Augustus and Tiberius, soon to culminate in the deified insanity of Caligula.

                    I, Claudius and its sequel, Claudius the God, are among the most celebrated, as well the most gripping historical novels ever written.</p>   `)

                }else if(numrandom7 === 1) {
                    txtbookdesc.innerHTML = (`<h1>The Name of the Rose</h1>
                    <h2>by Umberto Eco</h2>
                    <p>The year is 1327. Benedictines in a wealthy Italian abbey are suspected of heresy, and Brother William of Baskerville arrives to investigate. When his delicate mission is suddenly overshadowed by seven bizarre deaths, Brother William turns detective. His tools are the logic of Aristotle, the theology of Aquinas, the empirical insights of Roger Bacon—all sharpened to a glistening edge by wry humor and a ferocious curiosity. He collects evidence, deciphers secret symbols and coded manuscripts, and digs into the eerie labyrinth of the abbey, where “the most interesting things happen at night.”</p>   `)
                }else{
                    txtbookdesc.innerHTML = (`<h1>The Book Thief </h1>
                    <h2>by Markus Zusak</h2>
                    <p>It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will be busier still.

                    By her brother's graveside, Liesel's life is changed when she picks up a single object, partially hidden in the snow. It is The Gravedigger's Handbook, left behind there by accident, and it is her first act of book thievery. So begins a love affair with books and words, as Liesel, with the help of her accordian-playing foster father, learns to read. Soon she is stealing books from Nazi book-burnings, the mayor's wife's library, wherever there are books to be found.
                    
                    But these are dangerous times. When Liesel's foster family hides a Jew in their basement, Liesel's world is both opened up, and closed down.
                    
                    In superbly crafted writing that burns with intensity, award-winning author Markus Zusak has given us one of the most enduring stories of our time.</p>   `)

                }

                break;
    }

}
