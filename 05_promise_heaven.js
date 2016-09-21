$.ajax({url: userApi(username)})
  .then(function(data) {
    console.log( success(data) );
    return $.ajax({url: data.repos_url});
  }).then(function(data) {
    var mostPopular = _.max(data, function(repo) { return repo.stargazers_count; })
    return $.ajax({url: mostPopular.issues_url.replace('{/number}', '')})
  }).then(function(data) {
    console.log( data );
  });

// Using Named functions

getUser(username)
  .then(getRepos)
  .then(findMostPopularRepo)
  .then(getRepoIssues)


function getUser(username) {
  return $.ajax({url: userApi(username)});
}

function getRepos(userData) {
  return $.ajax({url: userData.repos_url})
}

function findMostPopularRepo(reposData) {
  return _.max(reposData, function(repo) { return repo.stargazers_count; })
}

function getRepoIssues(repoData) {
  return $.ajax({url: repoData.issues_url.replace('{/number}', '')})
}
