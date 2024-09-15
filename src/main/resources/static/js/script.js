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


// Update item function
function updateOrder() {
    const form = document.getElementById('updateForm');
    const formData = new FormData(form);
    const orderData = {
        id: formData.get('itemId'),
        name: formData.get('name'),
        description: formData.get('description'),
        price: parseInt(formData.get('price')),
        orderDateTime: formData.get('orderDateTime')
    };
    console.log(orderData)
    fetch('/u', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
        .then(response => {
        if (!response.ok) {
            console.log(response)
            console.log(response.message)
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => {
        const resultDiv = document.getElementById('updateResult');
        resultDiv.innerText = JSON.stringify(data, null, 2);
        resultDiv.style.display = 'block';
        console.log("Data:: ", data);
    })
        .catch(error => {
        console.error('Error:', error);
    });
}


// Update item function
function updateDescription() {
    const form = document.getElementById('updateDescriptionForm');
    const formData = new FormData(form);
    const orderData = {
        id: formData.get('itemId'),
        description: formData.get('description'),
    };
    console.log(orderData)
    fetch(`/ud?id=${orderData.id}&newDesc=${encodeURIComponent(orderData.description)}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
        if (!response.ok) {
            console.log(response)
            console.log(response.message)
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => {
        const resultDiv = document.getElementById('updateDescriptionResult');
        var resultText= 'Result was not updated successfully! Fix the issue!'
        console.log(data)
        if(data){
            resultText= 'Result updated successfully!'
        }
        resultDiv.innerText = JSON.stringify(resultText, null, 2);
        resultDiv.style.display = 'block';
        console.log("Data:: ", resultText);
    })
        .catch(error => {
        console.error('Error:', error);
    });
}
// Delete item function
function deleteOrderItem() {
    const form = document.getElementById('deleteOrderItemForm');
    const formData = new FormData(form);
    const orderData = {
        id: formData.get('itemId'),
    };

    console.log(orderData.id)
    fetch(`/d?id=${orderData.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },})
        .then(response => {
        if (!response.ok) {
            console.log(response)
            console.log(response.message)
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(data => {
        const resultDiv = document.getElementById('deleteResult');
        var resultText= 'Result was not deleted successfully!'
        console.log(data)
        if(data){
            resultText= 'Result deleted successfully!'
        }
        resultDiv.innerText = JSON.stringify(resultText, null, 2);
        resultDiv.style.display = 'block';
        console.log("Data:: ", resultText);
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