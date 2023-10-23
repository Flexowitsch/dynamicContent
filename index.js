const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const container = document.getElementById("postContainer")

// create all elements
 
for(let i = 0; i < posts.length; i++) {
    let section = document.createElement("section")
    let postHeader = document.createElement("div")
    let postAvatar = document.createElement("img")
    let textContainer = document.createElement("div")
    let name = document.createElement("p")
    let location = document.createElement("div")
    let postImg = document.createElement("img")
    let postFooter = document.createElement("div")
    let iconContainer = document.createElement("div")
    let likeIcn = document.createElement("img")
    let commentIcn = document.createElement("img")
    let dmIcn = document.createElement("img")
    let numLikes = document.createElement("p")
    let likes = document.createElement("span")
    let username = document.createElement("p")
    let comment = document.createElement("span")
    
    //build section
    container.appendChild(section)
    section.appendChild(postHeader)
    //build header
    postHeader.className = "postHeader"
    postHeader.appendChild(postAvatar)
    postAvatar.className = "postAvatar"
    postAvatar.src = posts[i].avatar
    postHeader.appendChild(textContainer)
    textContainer.className = "textContainer"
    textContainer.appendChild(name)
    name.className = "name"
    name.textContent = posts[i].name
    textContainer.appendChild(location)
    location.className = "location"
    location.textContent = posts[i].location

    // build image

    section.appendChild(postImg)
    postImg.className = "postImg"
    postImg.src = posts[i].post

    // build footer
    section.appendChild(postFooter)
    postFooter.className = "postFooter"
    postFooter.appendChild(iconContainer)
    iconContainer.className = "iconContainer"
    iconContainer.appendChild(likeIcn)
    likeIcn.className = "icon"
    likeIcn.src = "./images/icon-heart.png"
    likeIcn.classList.add("likeBtn")
    iconContainer.appendChild(commentIcn)
    commentIcn.className = "icon"
    commentIcn.src = "./images/icon-comment.png"
    iconContainer.appendChild(dmIcn)
    dmIcn.className = "icon"
    dmIcn.src = "./images/icon-dm.png"
    postFooter.appendChild(numLikes)
    numLikes.id = "numLikes"
    numLikes.textContent = posts[i].likes
    numLikes.appendChild(likes)
    likes.className = "likes"
    likes.textContent = " likes"
    postFooter.appendChild(username)
    username.className = "username"
    username.textContent = posts[i].username
    username.appendChild(comment)
    comment.className = "comment"
    comment.textContent = " " + posts[i].comment


    likeIcn.addEventListener("click", function() {
        posts[i].likes += 1; // Increment the likes for the specific post
        numLikes.textContent = posts[i].likes; // Update the like count in the UI
        numLikes.appendChild(likes)
        likes.className = "likes"
        likes.textContent = " likes"
    });

}

