function readpost() {
  let request = new XMLHttpRequest(); // take new obj from XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts"); // function open take 2 parameters the type of method and the url
  request.responseType = "json"; // alert the code he will reseve a json file
  request.send(); // function send to send the requst
  request.onload = function () {
    // function onload when we ready to receve the data from api
    // console.log(request.responseText); // this use ti recieve data as text
    //console.log(typeof request); // this statement use to know what the major or type of this
    let posts = request.response; //
    for (post of posts) {
      // like a foreach loop that we have in and of in return the count of all data comes from the api
      document.getElementById(
        "content"
      ).innerHTML += `<div id="content"><h3>${post.id}</h3><p class="pp">${post.title}</p><p class="pp">${post.body}</p> </div>`; /// this to show and retrive data from api and show in my html by javascript
      console.log(post);
    }
  };
}
/*  html render element  



     
    <script src="oop.js"></script>



*/
function createNewPost() {
  let request = new XMLHttpRequest();
  request.open("post", "https://jsonplaceholder.typicode.com/posts");
  request.responseType = "json";
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-type", "application/json");
  let bodyParams = `{
      "title": "sdfds",
      "body": "ahmed",
      "userid": 1,
      "id": 101,
    }`;
  request.send(bodyParams);
  request.onload = function () {
    let response = request.response;
    console.log(response);
  };
}

readpost();
