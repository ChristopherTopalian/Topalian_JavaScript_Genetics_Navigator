// makeDNAVerticalDiagram.js

function makeDNAVerticalDiagram(sequence)
{
    let panelRight = ge('panelRight');
    // clear previous content
    panelRight.innerHTML = '';

    let container = document.createElement('div');
    container.style.display = 'grid';
    // two equal-width columns
    container.style.gridTemplateColumns = '1fr 1fr';
    container.style.gridGap = '5px';
    container.style.marginLeft = 4 + 'px';
    container.style.marginRight = 4 + 'px';
    container.style.color = 'rgb(255, 255, 255)';

    panelRight.appendChild(container);

    // color mapping
    let nucleotideColors = {
        A: { color: 'green' },
        T: { color: 'red' },
        C: { color: 'yellow' },
        G: { color: 'blue' }
    };

    // loop through sequence in steps of 2
    for (let i = 0; i < sequence.length; i += 2)
    {
        // get current pair of nucleotides
        let nucleotide1 = sequence[i];

        // handle odd-length sequences
        let nucleotide2 = sequence[i + 1] || '';

        // make and style divs for nucleotides
        let nucleotideDiv1 = ce('div');
        nucleotideDiv1.className = 'nucleotideDiv1';
        nucleotideDiv1.style.backgroundColor = nucleotideColors[nucleotide1] ? nucleotideColors[nucleotide1].color : 'rgb(100, 100, 100)'; // set bg color
        nucleotideDiv1.textContent = nucleotide1;
        nucleotideDiv1.onmouseover = function()
        {
            hoverSound2();
        };
        container.append(nucleotideDiv1);

        //-//

        let nucleotideDiv2 = ce('div');
        nucleotideDiv2.className = 'nucleotideDiv2';
        nucleotideDiv2.style.backgroundColor = nucleotideColors[nucleotide2] ? nucleotideColors[nucleotide2].color : 'rgb(100, 100, 100)'; // set bg color
        nucleotideDiv2.textContent = nucleotide2;
        nucleotideDiv2.onmouseover = function()
        {
            hoverSound2();
        };
        container.append(nucleotideDiv2);
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

