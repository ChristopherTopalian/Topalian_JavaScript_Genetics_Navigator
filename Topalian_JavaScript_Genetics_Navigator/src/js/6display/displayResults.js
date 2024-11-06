// displayResults.js

function displayResults(filteredGenes)
{
    let resultsDiv = ge('results');

    resultsDiv.innerHTML = '';

    if (filteredGenes.length === 0)
    {
        resultsDiv.innerHTML = 'No results found.';
        return;
    }

    for (let i = 0; i < filteredGenes.length; i++)
    {
        let geneDiv = ce('div');
        geneDiv.className = 'result';
        resultsDiv.append(geneDiv);

        //-//

        let geneNameDiv = ce('div');
        geneNameDiv.innerHTML = 'Name: ' + '<b>' + filteredGenes[i].name + '</b>';
        geneDiv.append(geneNameDiv);

        //-//

        let geneFunctionDiv = ce('div');
        geneFunctionDiv.textContent = 'Function: ' + filteredGenes[i].function;
        geneDiv.append(geneFunctionDiv);

        //-//

        let geneChromosomeDiv = ce('div');
        geneChromosomeDiv.textContent = 'Chromosome: ' + filteredGenes[i].chromosome;
        geneDiv.append(geneChromosomeDiv);

        //-//

        let geneMutationsDiv = ce('div');
        geneMutationsDiv.textContent = 'Mutations: ' + filteredGenes[i].mutations.join(', ');
        geneDiv.append(geneMutationsDiv);

        //-//

        let geneSequenceDiv = ce('div');
        geneSequenceDiv.textContent = 'Sequence: ' + filteredGenes[i].sequence.substring(0, 10) + '...';
        geneDiv.append(geneSequenceDiv);
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

