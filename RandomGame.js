var randomnumber

function game() {
    maxnumber = document.getElementById("maxnumber").value
    randomnumber = Math.random();
    randomnumber = Math.floor(randomnumber*maxnumber+1);
    text1 = "Your random number has been generated, you can start guessing!"
    document.getElementById("text1").innerHTML = text1;

    document.getElementById("description").style.display = "none"; 
    document.getElementById("text0").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("maxnumber").style.display = "none";
    document.getElementById("guess").style.display = "block";
    document.getElementById("guessbutton").style.display = "block";
}

const guessednumbers = [];
var username, maxnumber
var guesscount = 0;

function userguess() {
    guess = document.getElementById("guess").value

    if (guess==randomnumber) {
        guessednumbers.push(guess)
        guesscount = guesscount + 1
        rightanswer = "You guessed right, the random number was "+randomnumber+".<br><p>It took you "+guesscount+" tries.</p>"
        document.getElementById("result").innerHTML = rightanswer;

        document.getElementById("text1").style.display = "none";
        document.getElementById("guess").style.display = "none";
        document.getElementById("guessednumberscontainer").style.display = "none";
        document.getElementById("guessbutton").style.display = "none";
        document.getElementById("usernameinfo").style.display = "block";
        document.getElementById("username").style.display = "block";
        document.getElementById("savebutton").style.display = "block";
    }
    else if (guess>randomnumber) {
        lower = "The random number is lower. Try again!"
        document.getElementById("result").innerHTML = lower;
        guessednumbers.push(guess)
        document.getElementById("guessednumberscontainer").style.display = "block";
        guesscount = guesscount + 1
    }
    else if (guess<randomnumber) {
        higher = "The random number is higher. Try again!"
        document.getElementById("result").innerHTML = higher;
        guessednumbers.push(guess)
        document.getElementById("guessednumberscontainer").style.display = "block";
        guesscount = guesscount + 1
    }
    else {
        error = "You have to enter a valid number!"
        document.getElementById("result").innerHTML = error;
    }

    document.getElementById("guessednumbers").innerHTML = guessednumbers;
    document.getElementById("guess").value = ""
    document.getElementById("guesscount").innerHTML = guesscount;
}

function savescore() {
    document.getElementById("scoreboard").style.display = "block";
    const username = document.getElementById("username").value;
    
    if (!username) {
        alert("Please enter a valid name");
        return;
    }

    const scorePath = "scores/" + maxnumber;
    const scoresRef = ref(database, scorePath);

    get(scoresRef).then((snapshot) => {
        const scores = snapshot.val() || {};
        let existingKey = null;

        for (let key in scores) {
            if (scores[key].name.toLowerCase() === username.toLowerCase()) {
                existingKey = key;
                break;
            }
        }

        data = {
                name: username,
                score: guesscount,
                range: maxnumber
            }

        if (!existingKey) {
            push(scoresRef, data);
            } 
        
        else if (scores[existingKey].score > guesscount) {
            const updates = {};
            updates['/scores/' + maxnumber + '/' + existingKey] = data;
            update(ref(database), updates);
        } 
            
        else {
            alert("Your previous score was better or equal, so we didn't save your current score"); 
        }

    });

    var delayInMilliseconds = 1000;
    setTimeout(() => {
        get(scoresRef).then((snapshot) => {
            const updatedscores = snapshot.val();
            let output = "<h3>🏆 Scoreboard</h3>";

            if (updatedscores) {
                const sorted = Object.values(updatedscores).sort((a, b) => a.score - b.score);
                sorted.forEach(entry => {
                    output += `${entry.name}: ${entry.score}<br>`;
                });
            } 
            
            else {
                output += "Noch keine Scores!";
            }
            
            document.getElementById("scoreboard").innerHTML = output;
        });
    }, delayInMilliseconds);
}
