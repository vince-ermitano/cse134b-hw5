var myCurrentRequestType;

function sendHTTPRequest(event) {
    event.preventDefault();

    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', displayResponse);

    let idVal = document.getElementById('idFld').value;
    let articleName = document.getElementById('articleNameFld').value;
    let articleBody = document.getElementById('articleBodyFld').value;
    let currentDate = new Date();

    let formData = `idFld=${idVal}&articleNameFld=${articleName}&articleBodyFld=${articleBody}&dateSent=${currentDate}`;

    if (myCurrentRequestType === 'POST') {
        myRequest.open('POST', 'https://httpbin.org/post');
    } else if (myCurrentRequestType === 'GET') {
        myRequest.open('GET', 'https://httpbin.org/get');
    } else if (myCurrentRequestType === 'PUT') {
        myRequest.open('PUT', 'https://httpbin.org/put');
    } else if (myCurrentRequestType === 'DELETE') {
        myRequest.open('DELETE', 'https://httpbin.org/delete');
    } else {
        console.log('request type not set');
    }

    myRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    myRequest.send(formData);
    document.getElementById('httpForm').reset();
}

function displayResponse() {

    let preFormattedOutput = document.querySelector('output pre');
    console.log(this.responseText);
    preFormattedOutput.innerHTML = this.responseText;

    if (preFormattedOutput.childNodes.length !== 0) {
        preFormattedOutput.style.padding = '1rem';
    }
}

document.addEventListener('DOMContentLoaded', (e) => {

    let httpBtns = document.querySelectorAll('button');
    let form = document.getElementById('httpForm');

    httpBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            let btnType = e.target.id;

            if (btnType === 'postBtn') {
                myCurrentRequestType = 'POST';
                console.log(`Current should be 'POST': ${myCurrentRequestType}`);
            } else if (btnType === 'getBtn') {
                myCurrentRequestType = 'GET';
            } else if (btnType === 'putBtn') {
                myCurrentRequestType = 'PUT';
            } else if (btnType === 'deleteBtn') {
                myCurrentRequestType = 'DELETE';
            } else {
                myCurrentRequestType = null;
                console.log(`Current should be null: ${myCurrentRequestType}`);
            }
        });
    });

    form.addEventListener('submit', sendHTTPRequest);
});