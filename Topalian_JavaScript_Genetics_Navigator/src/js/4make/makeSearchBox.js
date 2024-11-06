// makeSearchBox.js

function makeSearchBox()
{
    let subDiv = ce('div');
    ge('panelTop').append(subDiv);

    //-//

    let inputField = ce('input');
    inputField.type = 'text';
    inputField.id = 'searchGene';
    inputField.style.paddingLeft = '5px';
    inputField.style.paddingRight = '5px';
    inputField.style.backgroundColor = 'rgb(0, 0, 0)';
    inputField.style.color = 'rgb(255, 255, 255)';
    inputField.style.marginBottom = '2px';
    inputField.style.borderRadius = '8px';
    inputField.style.width = '100%';
    inputField.placeholder = 'Gene Name...';
    inputField.onmouseover = function()
    {
        hoverSound();
    };
    inputField.onclick = function()
    {
        clickSound();
    };
    subDiv.append(inputField);

    //-//

    subDiv.append(ce('label').textContent = ' ');

    //-//

    let searchButton = ce('button');
    searchButton.textContent = 'Search';
    searchButton.onmouseover = function()
    {
        hoverSound();
    };
    searchButton.onclick = function()
    {
        clickSound();

        filterGenes(genes);

        makeDNAHorizontalDiagram(inputField.value);

        makeDNAVerticalDiagram(genes[findIndexByName(genes, inputField.value)].sequence);
    };
    subDiv.append(searchButton);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

