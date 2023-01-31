function getTag(obj) {
    const { NUMBER, TEXT, BOOLEAN, DATE } = inputTypeConstants;
    const { key, id, type } = obj;

    let input = null;

    switch(type) {
        case NUMBER:
        case TEXT:
        case DATE:
            input = document.createElement("input");
            input.type = type;
            break;
        default:
            input = document.createElement("input");
            input.type = type;
    }

    const inputWrapperDiv = document.createElement("div");
    inputWrapperDiv.classList.add('inputWrapperDiv');
    
    if (input === null) {
        return inputWrapperDiv;
    }
    
    const textLabel = document.createElement("label");
    
    textLabel.innerText = key;
    textLabel.htmlFor = type + id;
    textLabel.classList.add("bookLabelClass");

    input.id = type + id;
    input.classList.add("bookInputClass");

    inputWrapperDiv.appendChild(textLabel);
    inputWrapperDiv.appendChild(input);
    inputWrapperDiv.classList.add("bookInputLabelClass", "flex");

    return inputWrapperDiv;
}

function getTableHeaders() {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const ths = getInputObjectsArray().map((value, idx, array) => {
        const th = document.createElement('th');
        th.innerText = value.key;

        return th;
    });

    thead.append(...ths);
    tbody.classList.add('tableBody');
    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}