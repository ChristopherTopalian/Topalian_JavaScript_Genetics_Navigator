// makeInterface.js

function makeInterface()
{
    let panelWidth = '150px';
    let panelHeight = '60px';

    //-//

    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    ba(mainDiv);

    //-//

    // left panel
    let panelLeft = ce('div');
    panelLeft.id = 'panelLeft';
    panelLeft.className = 'panel';
    panelLeft.style.position = 'absolute';
    panelLeft.style.left = '0px';
    panelLeft.style.top = '0px';
    panelLeft.style.bottom = '0px';
    panelLeft.style.width = panelWidth;
    mainDiv.append(panelLeft);

    //-//

    // right panel
    let panelRight = ce('div');
    panelRight.id = 'panelRight';
    panelRight.className = 'panel';
    panelRight.style.position = 'absolute';
    panelRight.style.right = '0px';
    panelRight.style.top = '0px';
    panelRight.style.bottom = '0px';
    panelRight.style.width = panelWidth;
    mainDiv.append(panelRight);

    //-//

    // top panel
    let panelTop = ce('div');
    panelTop.id = 'panelTop';
    panelTop.className = 'panel';
    panelTop.style.position = 'absolute';
    // starts after left panel
    panelTop.style.left = panelWidth;
    // ends before right panel
    panelTop.style.right = panelWidth;
    panelTop.style.top = '0px';
    panelTop.style.height = panelHeight;
    panelTop.style.display = 'flex';
    panelTop.style.flexDirection = 'row';
    mainDiv.append(panelTop);

    //-//

    // bottom panel
    let panelBottom = ce('div');
    panelBottom.id = 'panelBottom';
    panelBottom.className = 'panel';
    panelBottom.style.position = 'absolute';
    // starts after left panel
    panelBottom.style.left = panelWidth;
    // ends before right panel
    panelBottom.style.right = panelWidth;
    panelBottom.style.bottom = '0px';
    panelBottom.style.height = panelHeight;
    mainDiv.append(panelBottom);

    //-//

    // center panel
    let panelCenter = ce('div');
    panelCenter.id = 'panelCenter';
    panelCenter.className = 'panel';
    panelCenter.style.position = 'absolute';
    // starts after left panel
    panelCenter.style.left = panelWidth;
    // ends before right panel
    panelCenter.style.right = panelWidth;
    // starts after top panel
    panelCenter.style.top = panelHeight;
    // ends before bottom panel
    panelCenter.style.bottom = panelHeight;
    panelCenter.style.backgroundColor = 'rgb(100, 100, 100)';
    mainDiv.append(panelCenter);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

