// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // Main Header
    const mainHeader = document.createElement('div');
    mainHeader.classList.add('header');

    // Span - Date
    headerSpanDate = document.createElement('span');
    headerSpanDate.classList.add('date');
    headerSpanDate.textContent = 'SMARCH 28, 2019';
    // Append to mainHeader
    mainHeader.appendChild(headerSpanDate);

    // H1
    headerH1 = document.createElement('h1');
    headerH1.textContent = 'Lambda Times';
    mainHeader.appendChild(headerH1);

    // Span - Temp
    headerSpanTemp = document.createElement('span');
    headerSpanTemp.textContent = '98';
    headerSpanTemp.classList.add('temp');
    mainHeader.appendChild(headerSpanTemp);

    return mainHeader;
}

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());
