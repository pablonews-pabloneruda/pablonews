const teamMembers = [
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Xavier FINI',
        alias: 'Directeur de Publication',
        status: 'Actif',
        tags: ['.'],
        email: '.',
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Lamia GORGULU',
        alias: 'Directrice Générale',
        status: 'Actif',
        tags: ['.'],
        email: '.',
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Hugo COMBE-DARGENT',
        alias: 'Directeur Général Délégué chargé des Relations Extérieures',
        status: 'Stage',
        tags: ['.'],
        email: '.',
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Rémi MERCIER',
        alias: 'Directeur Général Délégué chargé de la Communication',
        status: 'Inactif',
        tags: ['.'],
        email: '.',
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Anaïs SILVA',
        status: 'Actif', 
        alias: 'Directrice de la Coordination Photographique Evenementielle',
        tags: ['.'],
        email: '.',
    },
    {
        name: 'Aziz BA',
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        alias: 'Directeur Adjoint de la Coordination Photographique',
        status: 'Inactif',
        tags: ['.'],
        email: '.',
    },
    {
        name: 'Gabriel HOLTZMANN',
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        alias: 'Directeur de la Rédaction',
        status: 'Actif',
        tags: ['.'],
        email: '.',
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Johan GURUNG',
        alias: 'Rédacteur en Chef',
        status: 'Actif',
        tags: ['.'],
        email: '.',
    },   
    {
        name: 'Alexi DAVID',
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        status: 'Actif',
        alias: 'Rédacteur',
        tags: ['.'],
        email: '.',
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Khadim THIOUNE',
        alias: 'Rédacteur',
        status: 'Actif',
        tags: ['.'],
        email: '.',
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Nicolas INTRALUK',
        status: 'Stage', 
        alias: 'Illustrateur',
        tags: ['.'],
        email: '.',
    },
    {
        src: 'Copie de Logo PabloNews officiel 23-24 (1).png',
        name: 'Amine BOULKAILA',
        status: 'Stage', 
        alias: 'Monteur Vidéo du JT',
        tags: ['.'],
        email: '.',
    },
];

let tableRowCount = document.getElementsByClassName('table-row-count');
tableRowCount[0].innerHTML = `(${teamMembers.length}) Membres`;

let tableBody = document.getElementById('team-member-rows');

const itemsOnPage = 5;

const numberOfPages = Math.ceil(teamMembers.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

const mappedRecords = teamMembers
.filter((teamMember, i) => 
    (((start - 1) * itemsOnPage) < i + 1) && 
    (i+1 <= start * itemsOnPage)
)
.map(
  (teamMember) => {
    return `<tr>
        <td class="team-member-profile">
            <img src="${teamMember.src}" alt="${teamMember.name}">
            <span class="profile-info">
                <span class="profile-info__name">
                    ${teamMember.name}
                </span>
                <span class=profile-info__alias>
                    ${teamMember.alias}
                </span>
            </span>
        </td>
        <td>
            <span class="status status--${teamMember.status}">
                ${teamMember.status}
            </span>
        </td>
        <td>${teamMember.email}</td>
        <td>
            <span class="tags">
                ${teamMember.tags.map((tag) => `<span class="tag tag--${tag}">${tag}</span>`).join('')}
            </span>        
        </td>
    </tr>`;
});

tableBody.innerHTML = mappedRecords.join('');

const pagination = document.querySelector('.pagination');

const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
    const pageNumber = i + 1;
    
    linkList.push(`<li><a href="?page=${pageNumber}" ${pageNumber == start ? 'class="active"' : ''} title="page ${pageNumber}">${pageNumber}</a></li>`);
}

pagination.innerHTML = linkList.join('');