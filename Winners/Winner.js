// Sample data
const previousWinners = [
  { name: 'Akpos Sammy', school: 'Fevosun College', year: 2000 },
  { name: 'George Bush', school: 'Calm Wisdom College', year: 2001 },
  { name: 'Dennis Williams', school: 'Tiny Tots', year: 2002 },
  { name: 'Lydia Sofa', school: 'Celebrity High School', year: 2003 },
  { name: 'Emmy Cool', school: 'Leap Academy', year: 2004 },
  { name: 'Prosper Akin', school: 'Salvation Academy', year: 2005 },
  { name: 'David Roe', school: 'St Joseph', year: 2006 },
  { name: 'Flow Peters', school: 'St Peters', year: 2007 },
  { name: 'Nathaniel Brain', school: 'Babcock high school', year: 2008 },
  { name: 'Femi Baddy', school: 'Bextpath International Academy', year: 2009 },
  { name: 'Ngozi Joe', school: 'Lavoque', year: 2010 },
  { name: 'Ayo Morewa', school: 'Bread of Life', year: 2011 },
  { name: 'Miracle Baby', school: 'Baptist High School', year: 2012 },
  { name: 'Brain Jotter', school: 'Harvard international School', year: 2013 },
  { name: 'Rex Steve', school: 'CMS Grammer School', year: 2014 }
];

// Save to localStorage
localStorage.setItem('pastWinners', JSON.stringify(previousWinners));

// Get display button
const btn = document.getElementById('display-winners-btn');

// Display table when button clicked
btn.addEventListener('click', displayPastWinnersTable);


function displayPastWinnersTable() {

  const pastWinners = JSON.parse(localStorage.getItem('pastWinners')) || [];

  let tableHTML = `
    <table>
      <tr>
        <th>S/N</th>
        <th>Name</th>
        <th>School</th>
        <th>Year</th>
      </tr>
  `;

  pastWinners.forEach(winner => {
    tableHTML += `
      <tr>
        <td>${pastWinners.indexOf(winner) + 1}</td>
        <td>${winner.name}</td>
        <td>${winner.school}</td>
        <td>${winner.year}</td>
      </tr>
    `;
  });

  tableHTML += `</table>`;

  document.getElementById('pastWinners').innerHTML = tableHTML;

}
