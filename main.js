const linksSocialMedia = {
    github : 'penasnipute',
    instagram : 'penasnipute',
    facebook : 'penasnipute',
    twitter : 'penasnipute',
    youtube : 'channel/UCqsj8J4pzQhsr4vRXkRyhpw'
}

function changeSocialMedialinks(){
    for( let li of socialLinks.children){
        const social = li.getAttribute("class")
        console.log(social)
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
        console.log(li.children[0].href)
    }
}

changeSocialMedialinks()

function getGiHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        userName.textContent = data.name
        userBio.textContent = data.bio
        userGitHub.href = data.html_url
        UserImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGiHubProfileInfos()

