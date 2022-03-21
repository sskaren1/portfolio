import githubFinder from "./../image/projects/web/githubFinder.png";
import staticJobListings from "./../image/projects/web/staticJobListings.png";
import RickAndMortyAPI from "./../image/projects/web/RickAndMortyAPI.png";
import pokedexAPI from "./../image/projects/web/pokedexAPI.png";
import starwarsAPI from "./../image/projects/web/starwarsAPI.png";

const projectDb = {
  web: [
    {
        website: "https://sskaren1.github.io/GitHub_finder/",
        image: githubFinder,
        title: 'GitHub finder',
        year: 2022,
        tools: ["HTML", "CSS", "Bootstrap", "JS"],
        github: 'https://github.com/sskaren1/GitHub_finder',
        description: "This project works with GitHub API, it was made using HTML, CSS, Bootstrap and JS.",
    },
    {
        website: "https://sskaren1.github.io/static-job-listings/",
        image: staticJobListings,
        title: 'Static job listings',
        year: 2022,
        tools: ["HTML", "CSS", "JS"],
        github: 'https://github.com/sskaren1/static-job-listings',
        description: "This project is Frontend-Mentor challenge, it was made using HTML, CSS and JS.",
    },
    {
        website: "https://sskaren1.github.io/Rick-and-Morty-API/",
        image: RickAndMortyAPI,
        title: 'Rick and Morty API',
        year: 2022,
        tools: ["HTML", "CSS", "JS"],
        github: 'https://github.com/sskaren1/Rick-and-Morty-API',
        description: "This project works with Rick and Morty API, it was made using HTML, CSS and JS.",
    },
    {
        website: "https://sskaren1.github.io/pokedex/",
        image: pokedexAPI,
        title: 'Pokedex',
        year: 2022,
        tools: ["HTML", "SASS", "JS"],
        github: 'https://github.com/sskaren1/pokedex',
        description: "This project works with Poke API, it was made using HTML, SASS and JS",
    },
    {
        website: "https://sskaren1.github.io/starwarsAPI/",
        image: starwarsAPI,
        title: 'Starwars API',
        year: 2022,
        tools: ["HTML", "SASS", "GULP", "JS"],
        github: 'https://github.com/sskaren1/starwarsAPI',
        description: "This project works with StarWars API, it was made using HTML, SASS, GULP and JS",
    },
  ],
};

export default projectDb;