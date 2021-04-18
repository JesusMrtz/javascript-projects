const movies = [{
        name: "Mago de oz",
        year: 1996
    },
    {
        name: "Titanic",
        year: 1996
    },
    {
        name: "Soul",
        year: 2019
    },
    {
        name: "Onk bak",
        year: 2003
    },
    {
        name: "Chucky",
        year: 2004
    }
];

for (let { name, year }
    of movies) {
    console.log(name);
    console.log(year);
}