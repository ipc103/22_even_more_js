// We can pass ajax a success function callback

var api = function(path) {
  return 'https://api.github.com/' + path;
}

var userApi = function(username) {
  return api('users/' + username);
}

var username = 'dhh'

$.ajax({
  url: userApi(username),
  success: function(data){
    console.log(data);
  }
})

// but what is one request is dependent upon another request, which is dependent upon another request???

$.ajax({
  url: userApi(username),
  error: showError,
  success: function(data, status, xhr) {
    var reposUrl = data.repos_url
    $.ajax({
      url: reposUrl,
      error: showError,
      success: function(data, status, xhr) {
        var mostPopular = _.max(data, function(repo) { return repo.stargazers_count; })
        $.ajax({
          url: mostPopular.issues_url.replace('{/number}', ''),
          error: showError,
          success: function(data, status, xhr) {
            log.success(data);
          }
        });
      }
    });
  }
});
