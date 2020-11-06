let persoon = {
    voornaam : prompt("Wat is je naam?"),
    achternaam : prompt("Wat is je achternaam?"),
    leeftijd : prompt("Wat is je leeftijd?"),
    woonplaats : prompt("Waar woon je?"),
};
console.log (persoon);
if(persoon.leeftijd==16) {
    document.body.style.backgroundColor = "orange"
    
} else {
    document.body.style.backgroundColor = "purple"
}

    if(persoon.leeftijd==17) {
        document.body.style.backgroundColor = "blue"
    } else{
        document.body.style.backgroundColor = "purple"
    }
        if (persoon.leeftijd==18) {
            document.body.style.backgroundColor = "gold"
        } else {
            document.body.style.backgroundColor = "purple"
        }
            if (persoon.leeftijd==19) {
                document.body.style.backgroundColor = "green"
            } else {
                document.body.style.backgroundColor = "purple"
            }