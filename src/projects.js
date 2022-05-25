import cocktailImage from '../src/assets/images/projects/cocktail-db.png';
import colorGenerator from '../src/assets/images/projects/color-generator.png';
import stockImage from '../src/assets/images/projects/stock-image.png';
export const projects = [

    {
        name : 'Search Stock Images',
        image: stockImage,
        url : 'https://warm-dragon-6d027c.netlify.app/',
        repo_url : 'https://github.com/tismenetski/react-stock-images',
        technologies : 'React, Unspalsh API, HTML, CSS',
        description : [
            'Search for beautiful free images',
            'Infinite Scroll'
        ]
    },
    {
        name : 'Cocktail DB',
        image: cocktailImage,
        url : 'https://dainty-lolly-6a7648.netlify.app',
        repo_url : 'https://github.com/tismenetski/react-cocktailDB-api',
        technologies : 'React, REST API, HTML, CSS',
        description : [
            'Responsive',
            'Built With Hooks and functional components',
            'Live search results as you type',
        ]
    },
    {
        name : 'Color Generator',
        image: colorGenerator,
        url : 'https://resilient-zabaione-9d81ec.netlify.app/',
        repo_url : 'https://github.com/tismenetski/react-color-generator',
        technologies : 'React, Values js, HTML, CSS',
        description : [
                'Generate color palette from a single color',
                'Great tool for designing'
        ]
    },


]