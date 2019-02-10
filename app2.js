// get the url
//var url = window.location.href;

//getting the access token from url
var access_token = "https://api.fitbit.com/oauth2/token";

// get the userid
var userId = "22DC2V";

console.log(access_token);
console.log(userId);


var xhr = new XMLHttpRequest();
xhr.open('GET', 'httpss://api.fitbit.com/1/user/'+ userId +'/activities/heart/date/2019-02-10/1d/15min/time/09:30/19:00.json');
xhr.setRequestHeader("Authorization", 'Bearer ' + access_token);
xhr.onload = function() {
   if (xhr.status === 200) {
      console.log(xhr.responseText);
      document.write(xhr.responseText);
   }
};
xhr.send()


function revokeAccess() {

var params = "token=" + access_token;

var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.fitbit.com/oauth2/revoke');
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.setRequestHeader("Authorization", 'Basic IjIyREMyVjowOTEzMmE4ZTYxZDlhMzFhZDliZTA1Mjc1MmE5Y2UxMCIK', true);
xhr.onload = function() {
if (xhr.status === 200) {
console.log(xhr.responseText)
}
};
xhr.send(params);
}


const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://example.com"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
// Run code snippet
