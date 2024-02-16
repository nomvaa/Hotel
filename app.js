
import guests from './Guests.json' assert {type: 'json'};
import companies from './Companies.json' assert {type: 'json'};
import messages from './msg.json' assert {type: 'json'};


const ele = document.getElementById('names');
guests.forEach(guest => {
    ele.innerHTML = ele.innerHTML +
        '<option value="' + guest.id + '">' + `${guest.firstName} ${guest.lastName}` + '</option>';
})

const comp = document.getElementById('company');
companies.forEach(hotel => {
    comp.innerHTML = comp.innerHTML +
        '<option value="' + hotel.id + '">' + `${hotel.company}` + '</option>';
})


const msgDropdown = document.getElementById('msg');
messages.forEach(message => {
    msgDropdown.innerHTML = msgDropdown.innerHTML +
        '<option value="' + message.id + '">' + `${message.msg}` + '</option>';
})


function generateCard(selectedGuest, selectedHotel, selectedMsg, timeOfDay) {
    let greetingMessage;
    let timeGreeting;

    switch (true) {
        case timeOfDay < 12:
            timeGreeting = "Good morning";
            break;
        case timeOfDay >= 12 && timeOfDay < 18:
            timeGreeting = "Good afternoon";
            break;
        case timeOfDay >= 18:
            timeGreeting = "Good evening";
            break;
    }

    greetingMessage = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${timeGreeting} ${selectedGuest.firstName}, </h5>
                <h6 class="card-subtitle mb-2 text-muted">Room ${selectedGuest.reservation.roomNumber} is now ready for you.</h6>
                <p class="card-text">${selectedMsg.msg}</p>
                <footer class="blockquote-footer">${selectedHotel.company} staff</footer>
            </div>
        </div>`;

    return greetingMessage;
}


function generate() {
    const elementID = parseInt(ele.options[ele.selectedIndex].value);
    const compID = parseInt(comp.options[comp.selectedIndex].value);
    const msgID = parseInt(msgDropdown.options[msgDropdown.selectedIndex].value);
    let selectedGuest;
    let selectedHotel;
    let selectedMsg;

    guests.forEach(guest => {
        if (guest.id === elementID) {
            selectedGuest = guest;
        }
    });

    companies.forEach(hotel => {
        if (hotel.id === compID) {
            selectedHotel = hotel;
        }
    });

    messages.forEach(message => {
        if (message.id === msgID) {
            selectedMsg = message;
        }
    });

    if (!selectedMsg || !selectedGuest || !selectedHotel) {
        let errorMessage = "";
        if (!selectedMsg) {
            errorMessage = "Please select a message";
        }
        if (!selectedGuest) {
            errorMessage += errorMessage ? ", guest" : "Please select a guest";
        }
        if (!selectedHotel) {
            errorMessage += errorMessage ? ", hotel" : "Please select a hotel";
        }
        console.error("Selection error:", errorMessage);
        document.getElementById("greeting").innerHTML = errorMessage;
        return;
    }

    const d = new Date();
    const timeOfDay = d.getHours();
    const cardHTML = generateCard(selectedGuest, selectedHotel, selectedMsg, timeOfDay);
    document.getElementById("greeting").innerHTML = cardHTML;

    //click function to generate own msg with previously selected values
    $(document).ready(function () {
        $("button").click(function () {
            const ownMsg = $("input:text").val();
            document.getElementById("manual").innerHTML = `<br>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Greetings ${selectedGuest.firstName}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Room ${selectedGuest.reservation.roomNumber} is now ready for you.</h6>
                <p class="card-text">${ownMsg}</p>
                <footer class="blockquote-footer">${selectedHotel.company} staff</footer>
            </div>
        </div>`;
        })
    })
}


btn1.addEventListener('click', generate);
