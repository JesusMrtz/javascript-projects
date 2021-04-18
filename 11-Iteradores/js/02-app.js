const objJesus = {
    name: "Jesus",
    lastname: "Martinez",
    birthdate: 1996,
    position: "Software development",
    company: "Bolsa rosa"
};

for (let jesus in objJesus) {
    console.log(`${jesus}: ${objJesus[jesus]}`);
}