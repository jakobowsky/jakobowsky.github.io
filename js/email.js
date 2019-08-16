function handleSubmit() {
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;
    postData({ email, comment }).then(data => console.log(JSON.stringify(data))).catch(error => console.error(error));
}

function postData(data = {}) {
    const url = 'https://g1q5hl6xsg.execute-api.us-east-2.amazonaws.com/default/send_email';
    // Default options are marked with *
    console.log(data)
      return fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'no-cors', // no-cors, cors, *same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
              "Access-Control-Allow-Credentials" : true,
            //   "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            //   "Access-Control-Request-Headers": "Content-Type",
              // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      }); // parses JSON response into native JavaScript objects 
  }