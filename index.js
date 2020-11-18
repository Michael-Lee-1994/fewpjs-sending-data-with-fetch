// Add your code here
const destinationURL = "http://localhost:3000/users";

function submitData(name, email) {
    return fetch(destinationURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    }).then(function(response) {
        return response.json()
    }).then(function(object) {
        document.body.innerHTML = object.id;
    }).catch(function(error) {
        document.body.innerHTML = error.message;
    });
}