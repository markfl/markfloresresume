function init() {}

// program initialization
init();

const elements = {
  fco: document.querySelector(".fco"),
  dollarbill: document.querySelector(".dollarbill"),
  leewards: document.querySelector(".leewards"),
  janbell: document.querySelector(".janbell"),
  ssa: document.querySelector(".ssa"),
  sbc: document.querySelector(".sbc"),
  spurgeons: document.querySelector(".spurgeons"),
  gna: document.querySelector(".gna"),
  udp: document.querySelector(".udp"),
  nav: document.querySelector(".navigation__checkbox"),
  navheader: document.querySelector(".navigation__list"),
  navitem: document.querySelector(".navigation__list--item"),
};

elements.fco.addEventListener("click", function () {
  toggleOldCompanyInformation(".fco");
});

elements.dollarbill.addEventListener("click", function () {
  toggleOldCompanyInformation(".dollarbill");
});

elements.leewards.addEventListener("click", function () {
  toggleOldCompanyInformation(".leewards");
});

elements.janbell.addEventListener("click", function () {
  toggleOldCompanyInformation(".janbell");
});

elements.ssa.addEventListener("click", function () {
  toggleOldCompanyInformation(".ssa");
});

elements.sbc.addEventListener("click", function () {
  toggleOldCompanyInformation(".sbc");
});

elements.spurgeons.addEventListener("click", function () {
  toggleOldCompanyInformation(".spurgeons");
});

elements.gna.addEventListener("click", function () {
  toggleOldCompanyInformation(".gna");
});

elements.udp.addEventListener("click", function () {
  toggleOldCompanyInformation(".udp");
});

function toggleOldCompanyInformation(company) {
  // get container for company need
  const container = document.querySelector(company);
  // get all old classes for company
  const resultsArr = Array.from(container.querySelectorAll(`${company}__old`));
  // get all old id's for company '.old is used in CSS to not display class data
  const oldResultsArr = Array.from(container.querySelectorAll(".old"));

  // remove all old classes to display
  resultsArr.forEach((el) => {
    el.classList.remove("old");
  });

  // add back all old class to non display
  if (oldResultsArr.length === 0) {
    resultsArr.forEach((el) => {
      el.classList.add("old");
    });
  }
}

elements.nav.addEventListener("click", function () {
  const resultsArr = Array.from(
    document.querySelectorAll(".navigation__list--item")
  );
  console.log(resultsArr);
  if (resultsArr.length > 0) {
    elements.navheader.innerHTML = "";
  } else {
    const markup = `
      <h1 class="navigation__list--item navigation__header">Coursework Completed and Application Skills Developed</h1>
      <h2 class="navigation__list--item navigation__heading">Build Responsive Real World Websites with HTML5 and CSS3 - May 2018</h2>
      <li class="navigation__list--item navigation__item"><a href="omnifood/index.html" target="_blank" class="navigation__link"><span>1</span>Omnifood Website</a><a href="https://github.com/markfl/omnifood" target="_blank" class="navigation__github"><span>Source On Github</span></a></li>
      <h2 class="navigation__list--item navigation__heading">Advanced CSS and SASS: Flexbox, Grid, Animations and More - June 2018</h2>
      <li class="navigation__list--item navigation__item"><a href="natours/index.html" target="_blank" class="navigation__link"><span>2</span>Natours Website</a><a href="https://github.com/markfl/natours" target="_blank" class="navigation__github"><span>Source On Github</span></a></li>
      <li class="navigation__list--item navigation__item"><a href="trillo/index.html" target="_blank" class="navigation__link"><span>3</span>Trillo Website</a><a href="https://github.com/markfl/trillo" target="_blank" class="navigation__github"><span>Source On Github</span></a></li>
      <li class="navigation__list--item navigation__item"><a href="nexter/index.html" target="_blank" class="navigation__link"><span>4</span>Nexter Website</a><a href="https://github.com/markfl/nexter" target="_blank" class="navigation__github"><span>Source On Github</span></a></li>
      <h2 class="navigation__list--item navigation__heading">The Complete JavaScript Course 2018: Build Real Projects! - July 2018</h2>
      <li class="navigation__list--item navigation__item"><a href="dice-game/index.html" target="_blank" class="navigation__link"><span>5</span>Dice Game</a><a href="https://github.com/markfl/dice-game" target="_blank" class="navigation__github"><span>Source On Github</span></a></li>
      <li class="navigation__list--item navigation__item"><a href="budgety/index.html" target="_blank" class="navigation__link"><span>6</span>Budget</a><a href="https://github.com/markfl/budgety" target="_blank" class="navigation__github"><span>Source On Github</span></a></li>
      <li class="navigation__list--item navigation__item"><a href="forkify/dist/index.html" target="_blank" class="navigation__link"><span>7</span>Forkify</a><a href="https://github.com/markfl/forkify" target="_blank" class="navigation__github"><span>Source On Github</span></a></li>
	  <h2 class="navigation__list--item navigation__heading">Miscellaneous Java, RPGFree, RPGSQL & CLLE Programs Source Only on Github</h2>
	  <li class="navigation__list--item navigation__item"><a href="https://github.com/markfl/CopyIFSToPC" target="_blank" class="navigation__link"><span>8</span>CopyIFSToPC</a></li>
      <li class="navigation__list--item navigation__item"><a href="https://github.com/markfl/RefundsReturns" target="_blank" class="navigation__link"><span>9</span>Refunds-Returns</a></li>
      <li class="navigation__list--item navigation__item"><a href="https://github.com/markfl/iSeriesSource" target="_blank" class="navigation__link"><span>10</span>Miscellaneous Source On iSeries</a></li>
      <h2 class="navigation__list--item navigation__heading">Conversion Calculate to practice JavaScript, PHP and MySQL Work in progress</h2>
      <li class="navigation__list--item navigation__item"><a href="concalc/dist/index.html" target="_blank" class="navigation__link"><span>11</span>Conversion Calculator</a><a href="https://github.com/markfl/concalcjavascript" target="_blank" class="navigation__github"><span>Source On Github</span></a></li>
      <li class="navigation__list--item navigation__item"><a href="Sudoku/index.html" target="_blank" class="navigation__link"><span>12</span>Sudoku Cheat Calculator</a><a href="https://github.com/markfl/Sudoku" target="_blank" class="navigation__github"><span>Source On Github</span></a></li>
    `;
//    <h2 class="navigation__list--item navigation__heading">Node.js, Express, MongoDB & More. The complete Bootcamp 2019 - July 2019</h2>
//    <li class="navigation__list--item navigation__item"><a href="https://natoursfci.herokuapp.com/" target="_blank" class="navigation__link"><span>8</span>Natours Server Version</a><a href="https://github.com/markfl/NatoursServer" target="_blank" class="navigation__github"><span>Source On Github</span></a></li>
    elements.navheader.insertAdjacentHTML("beforeend", markup);
  }
});
