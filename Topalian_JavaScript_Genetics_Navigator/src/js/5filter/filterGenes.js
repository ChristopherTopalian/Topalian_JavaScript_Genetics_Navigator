// filterGenes.js

function filterGenes(whichArray)
{
    let searchValue = ge('searchGene').value.toLowerCase();

    let filteredGenes = [];

    for (let i = 0; i < whichArray.length; i++)
    {
        if (whichArray[i].name.toLowerCase().includes(searchValue))
        {
            filteredGenes.push(whichArray[i]);
        }
    }

    displayResults(filteredGenes);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

