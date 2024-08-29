function basicCall(url, button, resultDivName) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
        console.log(resultDivName)
        const resultDiv = document.getElementById(resultDivName);
        resultDiv.innerText =data;
        resultDiv.style.display = 'block';
        console.log("Data:: ", data);
    })
        .catch(error => {
        console.error('Error:', error);
    });
}

function callApi(url, button, resultDivName) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
        console.log(resultDivName)
        const resultDiv = document.getElementById(resultDivName);
        resultDiv.innerText = prettyPrintJson(data);
        resultDiv.style.display = 'block';
        console.log("Data:: ", data);
    })
        .catch(error => {
        console.error('Error:', error);
    });
}

function getItemById() {
    const form = document.getElementById('fetchByIdForm');
    const formData = new FormData(form);
    const itemFormId = formData.get('id');
    const fetchByIdUrl = `/f1?id=${itemFormId}`;

    fetch(fetchByIdUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => {
        const resultDiv = document.getElementById('fetchedByIdResult');
        resultDiv.innerText = JSON.stringify(data, null, 2);
        resultDiv.style.display = 'block';
        console.log("Data:: ", data);
    })
        .catch(error => {
        console.error('Error:', error);
    });
}


// Adding item function
function submitOrder() {
    const form = document.getElementById('orderForm');
    const formData = new FormData(form);

    const orderData = {
        name: formData.get('name'),
        description: formData.get('description'),
        price: parseInt(formData.get('price')),
        orderDateTime: formData.get('orderDateTime')
    };

    fetch('/a', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => {
        const resultDiv = document.getElementById('orderResult');
        resultDiv.innerText = `Item saved! ID: ${data.id}, Name: ${data.name}`;
        resultDiv.style.display = 'block';
    })
        .catch(error => {
        console.error('Error:', error);
    });
}

function prettyPrintJson(jsonString) {
    try {
        const jsonObject = JSON.parse(jsonString);

        return JSON.stringify(jsonObject, null, 2);
    } catch (e) {
        console.error("Invalid JSON string provided:", e);
        return jsonString;
    }
}