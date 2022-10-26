function replacecardholder() {
    const placeholder = document.getElementById('cardholderfield').placeholder.slice(5)
    const inputtext = document.getElementById('cardholderfield').value
    document.getElementById('cardholder-name').innerHTML = inputtext.toUpperCase()
    if (inputtext.length === 0) {
        document.getElementById('cardholder-name').innerHTML = placeholder
    }
}


function replacecardnumber() {
    let inputtext = document.getElementById('cardnumberfield').value
    if (inputtext != null) {
        inputtext = inputtext.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        console.log(inputtext);
        }

    document.getElementById('cardnumberfield').value = inputtext
    document.getElementById('cardnumber').innerHTML = inputtext
    if (inputtext.length === 0) {
        document.getElementById('cardnumber').innerHTML = "0000 0000 0000 0000"
    }
}

function replaceMM() {
    const inputtext = document.getElementById('MMfield').value
    document.getElementById('months').innerHTML = inputtext
    if (inputtext.length === 0) {
        document.getElementById('months').innerHTML = "00"
    }
}

function replaceYY() {
    const inputtext = document.getElementById('YYfield').value
    document.getElementById('date').innerHTML = inputtext
    if (inputtext.length === 0) {
        document.getElementById('date').innerHTML = "00"
    }
}

function replaceCVC() {
    const inputtext = document.getElementById('CVCfield').value
    document.getElementById('CVCcard').innerHTML = inputtext
    if (inputtext.length === 0) {
        document.getElementById('CVCcard').innerHTML = "000"
    }
}

function validation() {
    const inputname = document.getElementById('cardholderfield').value
    const cardnumber = document.getElementById('cardnumberfield').value
    let hasnumber = /\d/;

    if (hasnumber.test(inputname) === true) {
        console.log('Menin if lauseeseen')
        document.getElementById('cardholdererror').innerHTML = "* Only letters please."
    }

    if (cardnumber.length < 16) {
        console.log('Menin if lauseeseen cardnumbererror')
        document.getElementById('cardnumbererror').innerHTML = "* Please provide a valid credit card number."
    }

    if (hasnumber.test(inputname) === false && cardnumber.length > 16) {
        const inputfields = document.getElementById('inputfields')
        const hidden = document.getElementById('hidden')

        console.log(inputfields)

        inputfields.className = 'piilossa'
        hidden.className = 'nakyva'
    }
}

function cont() {
    const inputfields = document.getElementById('inputfields')
        const hidden = document.getElementById('hidden')

        console.log(inputfields)

        inputfields.className = 'inputfields'
        hidden.className = 'hidden'
}