// makeLabel.js

function makeLabel(whichElement, whichText)
{
    let theId = ge(whichElement);

    let theLabel = ce('label');
    theLabel.setAttribute('for', theId);
    theLabel.textContent = whichText;
    theLabel.style.fontSize = '15px';
    theLabel.style.lineHeight = '14px';
    theLabel.style.textAlign = 'center';
    theLabel.style.display = 'block';
    theLabel.style.marginTop = '4px';
    theLabel.style.marginBottom = '4px';
    return theLabel;
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

