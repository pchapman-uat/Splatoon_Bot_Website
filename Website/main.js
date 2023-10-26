function loadinfo(location, page){
    loadnav(location);
    loadFooter();
    nav_color(page)
    if(page === "home"){
        set_gallary(0)
    } else if(page="images"){
        loadsalmon()
    }

    
}
var gallary = [
    {header: "Header 1", image: "/images/background.png", text:'This is a test, I hope this works, please work I am begging you!'},
    {header: "Header 2", image: "", text:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}
]

var nav_buttons = [
    {name: "Commands", id: "commands", file: 'commands.html'},
    {name: "Documentation", id: "documentation", file:"documentation.html"},
    {name: "Invite", id: "invite", file:"invite.html"}
]

var images = [
    {name: "Smallfry", image: "https://media.discordapp.net/attachments/1116032437588340826/1143654495520313384/120px-S3_Smallfry_icon.png?width=240&height=240"},  
    {name: "Chum", image: "https://media.discordapp.net/attachments/1142680467825500264/1143654353014636624/120px-S3_Chum_icon.png?width=240&height=240"},  
    {name: "Cohock", image: "https://media.discordapp.net/attachments/1142680467825500264/1143654352691658792/500.png?width=884&height=884"},  
    {name: "Big Shot", image: "https://media.discordapp.net/attachments/1142680467825500264/1143651512917164143/bigshot.png?width=300&height=300"},
    {name: "Drizzler", image: "https://media.discordapp.net/attachments/1142680467825500264/1143651512594223284/drizzler.png?width=300&height=300"},
    {name: "Fish Stick", image: "https://media.discordapp.net/attachments/1142680467825500264/1143651512199950346/fishstick.png?width=300&height=300"},
    {name: "Flipper Flopper", image: "https://media.discordapp.net/attachments/1142680467825500264/1143651511944085564/flipperflopper.png?width=300&height=300"},
    {name: "Flyfish", image: "https://media.discordapp.net/attachments/1142680467825500264/1143651463420194816/flyfish.png?width=300&height=300"},
    {name: "Maws", image: "https://media.discordapp.net/attachments/1142680467825500264/1143651463155957900/maws.png?width=300&height=300"},
    {name: "Scrapper", image: "https://media.discordapp.net/attachments/1142680467825500264/1143651462900088976/scrapper.png?width=300&height=300"},
    {name: "Slammin Lid", image: "https://media.discordapp.net/attachments/1142680467825500264/1143651462627471554/slamminlid.png?width=300&height=300"},
    {name: "Steel Eel", image: "https://media.discordapp.net/attachments/1142680467825500264/1143651462342262914/steeleel.png?width=300&height=300"},
    {name: "Steelhead", image: "https://media.discordapp.net/attachments/1142680467825500264/1143651462090588331/steelhead.png?width=300&height=300"},
    {name: "Stinger", image: "https://media.discordapp.net/attachments/1142680467825500264/1143651461776027731/stinger.png?width=300&height=300"},
    {name: "Goldie", image: "https://media.discordapp.net/attachments/1142680467825500264/1143654352255459348/120px-S3_Goldie_icon.png?width=240&height=240"},
    {name: "Cohozuna", image: "https://media.discordapp.net/attachments/1142680467825500264/1145209514388369418/S3_Cohozuna_icon.png?width=800&height=800"},
    {name: "Horrorboros", image: "https://media.discordapp.net/attachments/1142680467825500264/1145209514153480283/S3_Horrorboros_icon.png?width=800&height=800"},
]

// Duration in seconds
var ani_duration = 1

function set_gallary(frame){
    document.getElementById("gall_header").innerHTML = gallary[frame].header
    document.getElementById("gall_about").innerHTML= gallary[frame].text
    document.getElementById("gall_img").style.backgroundImage = `url(${gallary[frame].image})`
}

function change_frame(frame){
    if(frame < 0) {
        frame = gallary.length - 1 
    } else if(frame > gallary.length - 1) {
        frame = 0
    }
    set_gallary(frame)
    document.getElementById("left").setAttribute("onclick", `change_frame(${frame-1})`)
    document.getElementById("right").setAttribute("onclick", `change_frame(${frame+1})`)

}

function loadsalmon(){
    console.log("loading...")
    var parent = document.getElementById("images")

    for(i in images){
        var item = document.createElement("div")
        item.setAttribute("class", "item")
        parent.appendChild(item)

        var img_txt = document.createElement("div")
        img_txt.setAttribute("class", "img_txt")
        img_txt.innerHTML = images[i].name
        item.appendChild(img_txt)


        var img = document.createElement("img")
        img.setAttribute("src", `${images[i].image}`)
        item.appendChild(img)
    }
}


function createbuttons(parent, array, location){
    console.log(parent)
    console.log(array)
    console.log(location)
    // Get the element based on the ID of the provided parent
    var parent = document.getElementById(parent)
    // For each element in the array 
    for(i in array){
        // Create a new element for the button
        var button = document.createElement("a")
        // Check if location is provided
        if(typeof location !== "undefined"){
            // Set the atribute for the button to be a reference to a different page (used for nav)
            button.setAttribute("href",`${array[i].file}`)
            button.setAttribute("id", array[i].id)
        }
        // set the inner HTML (the text) to the name of the element
        button.innerHTML = array[i].name  
        // Append the button to the parent
        parent.appendChild(button)
    }
}

function loadnav(location){
    //<a class="home_img" href="home.html"><img id="svgImage" src="home.svg" width="40px"></a> 
    var parent = document.getElementById("nav")


    var nav_image = document.createElement("a")
    nav_image.setAttribute("class", "home_img")
    nav_image.setAttribute("href", "home.html")
    parent.appendChild(nav_image)

    var image = document.createElement("img")
    image.setAttribute("id","svgImage")
    image.setAttribute("src","home.svg")
    image.setAttribute("width","50px")
    nav_image.appendChild(image)

    var nav_items = document.createElement("items")
    nav_items.setAttribute("id", "items")
    parent.appendChild(nav_items)
    
    createbuttons("items", nav_buttons, location)

}

function nav_color(page){
    if(page === "home"){
        var svgImage = document.getElementById('svgImage');
        svgImage.src ="home (Purple).svg"
    } else {
        var el = document.getElementById(page)
        if(el){
            el.style.color = '#9933ff';
            console.log('Changed color')
        } else {
            var svgImage = document.getElementById('svgImage');
            svgImage.src ="home (Purple).svg"
        }
    }


}
function loadFooter(){
    // Footer is done as raw html, this could be changed 
    document.getElementById("footer").innerHTML=`
    Splatoon is a Game francise owned by <a target="_blank" href="https://www.nintendo.com/">Nintendo</a>©, this website is a fan project to recreate the features of Splatoon with a discord bot. <br>
    All images are owned by <a target="_blank" href="https://www.nintendo.com/">Nintendo</a>©, unless specified otherwirse in <a href="documentation.html">documentation</a>
    `
}