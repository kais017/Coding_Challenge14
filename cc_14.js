// Task 2: Adding Support Tickets Dynamically


// creating a function to make a support ticket
function addSupportTicket(name, issue, priority) {

const ticketContainer = document.getElementById("ticketContainer");
// creating div for ticket and adding attributes class and id
const ticketCard = document.createElement('div');
ticketCard.setAttribute('class', 'support-ticket'); 
ticketCard.setAttribute('id', 'ticketCard');


// adding a heading for customer name
const customerName = document.createElement('h3');
customerName.textContent = `Customer: ${name}`;

// create an issue description
const issueDescription = document.createElement('p');
issueDescription.textContent = `Issue: ${issue}`;

// creating a label for priority level
const priorityLevel = document.createElement('label');
priorityLevel.textContent = `Priority: ${priority}`;
priorityLevel.classList.add('prioritylevel');

// creating a resolve button
const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-button');
     
    // task 4: 
    // adding event listener to resolve button
    resolveButton.addEventListener("click", function(event) {
        event.stopPropagation(); // prevents bubbling in the button's event handler
        ticketContainer.removeChild(ticketCard); // removes ticket when "Resolve" is clicked
    });


// append elements
ticketCard.appendChild(customerName);
ticketCard.appendChild(issueDescription);
ticketCard.appendChild(priorityLevel);
ticketCard.appendChild(resolveButton);

ticketContainer.appendChild(ticketCard);
}

// test data:
// adding tickets with High priority
addSupportTicket("Shrek", "Unable to create account", "High");
addSupportTicket("Donkey", "Unable to log in", "Low");
addSupportTicket("Fiona", "Unable to reset password", "High");

// Task 3: Converting NodeLists to Arrays for Bulk Updates

// creating a function that highlights all "High Priority" tickets pink
function highlightTickets() {

    // select all elements in piorityLevel
    const priorityElements = document.querySelectorAll(".prioritylevel");
    // convert NodeList to an array
    const priorityTickets = Array.from(priorityElements); 

    
    priorityTickets.forEach(ticket => { 
        
        if (ticket.textContent.includes("Priority: High")) { 
            // sets condition for function if priority is High
            ticket.parentElement.style.backgroundColor = "pink"; 
            // highlights the ticket pink
            ticket.parentElement.style.border = "2px solid red"
            // adds a red border around the highlighted tickets 

        }   
    });
}
// call the function
highlightTickets();

//Task 4: Implementing Ticket Resolution with Event Bubbling

const ticketContainer = document.getElementById("ticketContainer");
// adding an event listener to add a message to console once it's been clicked
ticketContainer.addEventListener('click', function() {
    // logs a message when any ticket is clicked
    console.log("Ticket container has been clicked.");
});





