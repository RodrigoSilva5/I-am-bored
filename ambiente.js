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
            document.getElementById('btn-2').href = 'mbti/indications/reading.html';
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