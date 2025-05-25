function randomize() {
    let randomnumbers = []
    const persons = parseInt(document.getElementById("persons").value);
    const teams = parseInt(document.getElementById("teams").value);

    while (randomnumbers.length < persons) {
        const random = Math.random();
        const result = Math.floor(random*persons+1);
        if (!randomnumbers.includes(result)){
            randomnumbers.push(result)
        }
    }
   
    const finalteams = Array.from({length: teams}, () => []);
    let i = 0

    while (i < randomnumbers.length){
        finalteams[i % teams].push(randomnumbers[i]);
        i++;
    }

    document.getElementById("result").innerHTML = finalteams.map(
        (team, index) => `Team ${index + 1}: ${team.join(", ")}`
    ).join("<br>");
}