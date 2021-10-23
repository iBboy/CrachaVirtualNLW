const LinksSocialMedia = {
  github: 'iBboy',
  youtube: 'RocketSeat',
  facebook: 'leozinho.silva.10420/',
  instagram: '_leonardo.silva_/',
  twitter: 'leozinhoow26'
}

function changeSocialMediaLinks() {

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    
  }
}
changeSocialMediaLinks()


function getGitHubProfileInfos(){
  
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
   userName.textContent = data.name
   userBio.textContent = data.bio
   userLink.href = data.html_url
   userImage.src = data.avatar_url
   userLogin.textContent = data.login
  })
}
getGitHubProfileInfos()



