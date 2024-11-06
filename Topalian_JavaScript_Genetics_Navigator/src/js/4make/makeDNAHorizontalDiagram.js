// makeDNAHorizontalDiagram.js

// make and display gene sequence
function makeDNAHorizontalDiagram(geneName)
{
    // find gene data by name
    let gene = null;

    for (let i = 0; i < genes.length; i++)
    {
        if (genes[i].name === geneName)
        {
            gene = genes[i];
            break;
        }
    }

    if (!gene)
    {
        console.error('Gene not found!');
        return;
    }

    // get panel element
    let panelBottom = ge('panelBottom');

    // clear any previous content
    panelBottom.innerHTML = '';

    // make a container for gene sequence
    let geneContainer = ce('div');
    geneContainer.style.overflowX = 'scroll';
    geneContainer.style.whiteSpace = 'nowrap';
    geneContainer.style.padding = '10px';
    geneContainer.style.border = '1px solid rgb(204, 204, 204)';

    // make nucleotide sequence display
    for (let i = 0; i < gene.sequence.length; i++)
    {
        // current nucleotide
        let nucleotide = gene.sequence[i];

        // make a span for each nucleotide
        let nucleotideSpan = ce('span');
        nucleotideSpan.textContent = nucleotide;
        nucleotideSpan.className = 'nucleotideSpan';
        nucleotideSpan.style.width = '15px';
        nucleotideSpan.style.height = '30px';

        nucleotideSpan.onmouseover = function()
        {
            hoverSound2();
        };

        // color code nucleotides
        if (nucleotide === 'A')
        {
            nucleotideSpan.style.backgroundColor = 'green';
        }
        else if (nucleotide === 'T')
        {
            nucleotideSpan.style.backgroundColor = 'red';
        }
        else if (nucleotide === 'G')
        {
            nucleotideSpan.style.backgroundColor = 'blue';
        }
        else if (nucleotide === 'C')
        {
            nucleotideSpan.style.backgroundColor = 'yellow';
        }
        else
        {
            nucleotideSpan.style.backgroundColor = 'rgb(100, 100, 100)';
            // for unknown characters
        }

        geneContainer.append(nucleotideSpan);
    }

    //-//

    // make mutation markers
    for (let j = 0; j < gene.mutations.length; j++)
    {
        let mutationMarker = ce('span');
        mutationMarker.textContent = gene.mutations[j];
        mutationMarker.className = 'mutationMarker';
        mutationMarker.style.backgroundColor = 'rgb(0, 50, 50)';
        mutationMarker.style.padding = '2px 5px';
        mutationMarker.style.marginLeft = '10px';
        mutationMarker.style.border = 'solid 1px rgb(200, 200, 200)';
        mutationMarker.style.borderRadius = '8px';
        mutationMarker.style.cursor = 'pointer';
        mutationMarker.title = 'Mutation: ' + gene.mutations[j];

        mutationMarker.onmouseover = function()
        {
            hoverSound2();
        };

        geneContainer.append(mutationMarker);
    }

    panelBottom.append(geneContainer);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

