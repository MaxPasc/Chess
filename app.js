const joueurs = [
    {"name":"joueurs1", "age":32, "rank":2850},
    {"name":"joueurs2", "age":19, "rank":2800},
    {"name":"joueurs3", "age":30, "rank":2700},
    {"name":"joueurs4", "age":40, "rank":2700},
    {"name":"joueurs5", "age":29, "rank":2700},
    {"name":"joueurs6", "age":19, "rank":2600},
    {"name":"joueurs7", "age":32, "rank":2600},
    {"name":"joueurs8", "age":40, "rank":2600},
    ];
// console.log(joueurs);
function findChampions(joueurs) {
    let champions = [];

    for (const joueur1 of joueurs) {
        let isChampion = true;
        for (const joueur2 of joueurs) {
            if (joueur1 != joueur2 && ((joueur2.rank > joueur1.rank && joueur2.age <= joueur1.age)
            ||(joueur1.rank <= joueur2.rank && joueur2.age < joueur1.age))) {
                isChampion = false;
                break;
            }
        }
        if (isChampion) {
            champions.push(joueur1);
        }
    }
    return champions;
}

console.log(findChampions(joueurs));