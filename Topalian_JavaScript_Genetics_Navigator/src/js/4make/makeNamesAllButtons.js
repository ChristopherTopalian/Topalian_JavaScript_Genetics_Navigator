// makeNamesAllButtons.js

function makeNamesAllButtons()
{
    let subDiv = ce('div');
    ge('panelTop').append(subDiv);

    //-//

    let namesAllContainer = ce('div');
    namesAllContainer.id = 'namesAllContainer';
    namesAllContainer.style.overflowY = 'scroll';
    namesAllContainer.style.border = 'solid 1px rgb(100, 100, 100)';
    namesAllContainer.style.borderRadius = '8px';
    namesAllContainer.style.display = 'flex';
    namesAllContainer.style.flexDirection = 'column';
    subDiv.append(namesAllContainer);

    //-//

    let nameAllButton = ce('button');
    nameAllButton.id = 'nameAllButton';
    nameAllButton.textContent = 'Names All';
    nameAllButton.onmouseover = function()
    {
        hoverSound();
    };
    nameAllButton.onclick = function()
    {
        clickSound();

        // sort by name in ascending order
        genes.sort(function(a, b)
        {
            return a.name.localeCompare(b.name);
        });

        displayResults(genes);
    };
    namesAllContainer.append(nameAllButton);

    //-//

    let reverseAllButton = ce('button');
    reverseAllButton.id = 'reverseAllButton';
    reverseAllButton.textContent = 'Reverse All';
    reverseAllButton.onmouseover = function()
    {
        hoverSound();
    };
    reverseAllButton.onclick = function()
    {
        clickSound();

        genes.reverse();

        displayResults(genes);
    };
    namesAllContainer.append(reverseAllButton);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

