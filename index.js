async function loadIntoTable(url, table) {
    const tableHead = table.querySelector('thead');
    const tableBody = table.querySelector('tbody');
    const response = await fetch(url);
    const {users, rows } = await response.json();
    
    tableHead.innerHTML = '<tr></tr>';
    tableHead.innerHTML = '';

    for (const userText of users) {
        const userElement = document.createElement('th');
        userElement.textContent = userText;
        tableHead.querySelector('tr').appendChild(userElement);
    }

    for (const row of rows) {
        const rowElement = document.createElement('tr');

        for (const cell of row) {
            const cellElement = document.createElement('td');
            cellElement.textContent = cell;
            rowElement.appendChild(cellElement);
        }
        tableBody.appendChild(rowElement);
    }
}

loadIntoTable('./database.json', document.querySelector('table'));