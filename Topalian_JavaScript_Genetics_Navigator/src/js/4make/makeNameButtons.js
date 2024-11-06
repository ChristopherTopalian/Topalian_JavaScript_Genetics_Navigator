// makeNameButtons.js

function makeNameButtons()
{
    let subDiv = ce('div');
    subDiv.id = 'subDivLeft';
    subDiv.title = 'subDiv';
    ge('panelLeft').append(subDiv);

    //-//

    // label Names Only
    subDiv.append(makeLabel(subDiv, 'Names Only'));

    //-//

    let namesContainer = ce('div');
    namesContainer.id = 'namesContainer';
    namesContainer.title = 'namesContainer';
    namesContainer.style.overflowY = 'scroll';
    namesContainer.style.border = 'solid 1px rgb(100, 100, 100)';
    namesContainer.style.borderRadius = '8px';
    namesContainer.style.display = 'flex';
    namesContainer.style.flexDirection = 'column';
    subDiv.append(namesContainer);

    //-//

    let nameButton = ce('button');
    nameButton.id = 'nameButton';
    nameButton.title = 'nameButton';
    nameButton.textContent = 'Name';
    nameButton.onmouseover = function()
    {
        hoverSound();
    };
    nameButton.onclick = function()
    {
        clickSound();

        // sort by name in ascending order
        genes.sort(function(a, b)
        {
            return a.name.localeCompare(b.name);
        });

        if (ge('tempDiv'))
        {
            ge('tempDiv').remove();
        }

        let tempDiv = ce('div');
        tempDiv.id = 'tempDiv';
        tempDiv.title = 'tempDiv';
        tempDiv.style.overFlowY = 'scroll';
        tempDiv.style.height = '200px';
        ge('panelLeft').append(tempDiv);

        //-//

        for (let x = 0; x < genes.length; x++)
        {
            let buttonHere = ce('button');
            buttonHere.textContent = genes[x].name;
            buttonHere.id = genes[x].name;
            buttonHere.title = genes[x].name;
            buttonHere.onmouseover = function()
            {
                hoverSound();
            };
            buttonHere.onclick = function()
            {
                clickSound();

                makeDNAHorizontalDiagram(genes[x].name);

                makeDNAVerticalDiagram(genes[x].sequence);

                ge('results').innerHTML =
                'Name: ' + genes[x].name + '<br>' +
                'Sequence: ' + genes[x].sequence + '<br>' +
                'Function: ' + genes[x].function + '<br>' +
                'Mutations: ' + genes[x].mutations.join(', ') + '<br>' +
                'Chromosome: ' + genes[x].chromosome + '<br>';

                // search box value update
                ge('searchGene').value = genes[x].name;
            };
            tempDiv.append(buttonHere);
        }
    };
    ge('namesContainer').append(nameButton);

    //-//

    let reverseButton = ce('button');
    reverseButton.id = 'reverseButton';
    reverseButton.title = 'reverseButton';
    reverseButton.textContent = 'Reverse';
    reverseButton.onmouseover = function()
    {
        hoverSound();
    };
    reverseButton.onclick = function()
    {
        clickSound();

        genes.reverse();

        if (ge('tempDiv'))
        {
            ge('tempDiv').remove();
        }

        let tempDiv = ce('div');
        tempDiv.id = 'tempDiv';
        tempDiv.title = 'tempDiv';
        ge('panelLeft').append(tempDiv);

        for(let x = 0; x < genes.length; x++)
        {
            let buttonHere = ce('button');
            buttonHere.textContent = genes[x].name;
            buttonHere.title = genes[x].name;
            buttonHere.onmouseover = function()
            {
                hoverSound();
            };
            buttonHere.onclick = function()
            {
                clickSound();

                makeDNAHorizontalDiagram(genes[x].name);

                makeDNAVerticalDiagram(genes[x].sequence);

                ge('results').innerHTML =
                'Name: ' + genes[x].name + '<br>' +
                'Sequence: ' + genes[x].sequence + '<br>' +
                'Function: ' + genes[x].function + '<br>' +
                'Mutations: ' + genes[x].mutations + '<br>' +
                'Chromosome: ' + genes[x].chromosome + '<br>';

                // search box value update
                ge('searchGene').value = genes[x].name;
            };
            tempDiv.append(buttonHere);
        }
    };
    ge('namesContainer').append(reverseButton);

    ge('panelLeft').append(ce('hr'));
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

