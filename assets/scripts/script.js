const tableHeaders = getTableHeaders();
const tableData = [];
renderTable();
renderHeader();

function renderTable() {
    const tableContainer = document.querySelector('.tableContainer');
    tableContainer.appendChild(tableHeaders);
}

function renderHeader() {
    const header = document.querySelector('#header');
    const appLogo = document.createElement('span');
    const icon = document.createElement('i');

    appLogo.classList.add('appLogo');

    icon.classList.add('fa', 'fa-book');
    appLogo.appendChild(icon);

    const appName = document.createElement('span');
    appName.innerText = 'Book Library';

    appLogo.appendChild(appName);
    header.appendChild(appLogo);
}

const getTagArray = getInputObjectsArray().map((value, idx, array) => {
    return getTag(value);
});

const inputContainerReference = document.getElementById('inputContainer');

for (let input of getTagArray) {
    inputContainerReference.appendChild(input);
}

const saveBtnReference = document.querySelector('#save');

saveBtnReference.addEventListener('click', getAndStoreInputData);

function getAndStoreInputData() {
    const inputArray = getInputObjectsArray();
    const tr = document.createElement('tr');

    for (let inputObject of inputArray) {
        const { id, type } = inputObject;
        const keyName = type + id;

        const getInput = document.querySelector(`#${type}${id}`);
        const inputValue = getInput.value;

        const td = document.createElement('td');

        td.innerText = inputValue;
        tr.appendChild(td);
    }

    const tbody = document.querySelector('.tableBody');
    tbody.appendChild(tr);

    clearInputData();
}

function clearInputData() {
    const inputArray = getInputObjectsArray();

    for (let inputObject of inputArray) {
        const { id, type } = inputObject;
        const keyName = type + id;

        const getInput = document.querySelector(`#${keyName}`);

        getInput.value = '';
    }
}