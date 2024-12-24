// Replace checkForName with a function that checks the URL
import { checkForUrl } from './urlChecker'

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'https://localhost:8081/api'

const form = document.getElementById('urlForm');

if (form) {
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const userUrl = document.getElementById('name').value;

    // This is an example code that checks the submitted name. You may remove it from your code
    
    // Check if the URL is valid

    if (Client.checkForUrl(userUrl)) {
        // If the URL is valid, send it to the server using the serverURL constant above
        postUrl('http://localhost:8081/analyze', {url: userUrl})
        .then(data => updateUI(data));
    } else {
        alert("Please, Enter a valid URL");
    }
 
      
}

// Function to send data to the server
const postUrl = async (url = '', userUrl = {}) => {
    const req = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },        
        body: JSON.stringify(userUrl), 
    });

    try {
        const data = await req.json();
        return data;
    } catch(error) {
        console.log(`Error: ${error}`)
    }
};

//update the UI with the result
const updateUI = (data) => {
    console.log(data);
    // check the polarity and display it in a proper way
    const scoreTag = data.score_tag;
    let polarityText = '';
    switch (scoreTag) {
        case 'P+':
            polarityText = 'Strong Positive';
            break;

        case 'P':
            polarityText = 'Positive';
            break;

        case 'NEU':
            polarityText = 'Neutral';
            break;
        case 'N+':
            polarityText = 'Strong Negative';
            break;
        case 'N':
            polarityText = 'Negative';
            break;
        case 'NONE':
            polarityText = 'No Sentiment Detected';
            break;
        default:
            polarityText = 'Unknown';
            break;
    }

    document.getElementById("polarity").innerHTML = `Polarity: ${polarityText}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
    document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
    document.getElementById("text").innerHTML = `Text: ${data.sentence_list[0].text}`;

}

// Export the handleSubmit function
export { handleSubmit };

