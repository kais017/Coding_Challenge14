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

// creating a resolve button
const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-button');

    resolveButton.addEventListener('click', () => {
        ticketCard.remove(); 
    });


// append elements
ticketCard.appendChild(customerName);
ticketCard.appendChild(issueDescription);
ticketCard.appendChild(priorityLevel);
ticketCard.appendChild(resolveButton);

ticketContainer.appendChild(ticketCard);
}

addSupportTicket("Millie", "Unable to create account", "High");

