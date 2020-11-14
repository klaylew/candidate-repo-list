'use strict';
console.log("started up");
// Github searchURL = 'https://api.github.com/users/{username}/repos';

//display list of repos
function displayResults(username){  
  const html = 'https://api.github.com/users/'+username+'/repos';

  fetch(html)
    .then(res => res.json())
    .then(resJson => {
      let output = "";
      resJson.forEach(function(repo){
        // console.log(repo);
        output += 
        `
        <div class=item>
        <h2>${repo.name}</h2>
        <a href="${repo.html_url}">${repo.html_url}</a>
        </div>    
        `;
      });
      document.getElementById('results-list').innerHTML = output;
        $('#results').removeClass('hidden');
    })
    .catch(error => alert('Something went wrong. Try again later.'));
}
//assign value for html query for fetch function


//watch for form submission
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let usernameQuery = $('#js-search-term').val();
    displayResults(usernameQuery);
  });
}

$(watchForm);