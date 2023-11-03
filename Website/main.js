function loadinfo(location, page){
    loadnav(location);
    loadFooter();
    nav_color(page)
    if(page === "home"){
        set_gallary(0)
    } else if(page === "images"){
        loadsalmon()
    } else if(page === "leaderboard"){
        load_leaderboard(leaderboard)
    }
}

function test(){
    let button = document.getElementById("leader_check")
    console.log(button.checked)

    if(button.checked){
        change_leaderboard(splatfest)
    } else {
        change_leaderboard(leaderboard)
    }
    
}

var gallary = [
    {header: "Splat Lessers", image: "images/gallary/lesser.png", text:'Fight lesser salmons to get Power Eggs!'},
    {header: "Splat the Big Boss!", image: "images/gallary/boss.png", text:'Fight boss salmons to get Golden Eggs!'},
    {header: "Splat the giant King!", image: "images/gallary/king.png", text:'Fight lesser salmons to get Scales!'},
    {header: "Manage Items!", image: "images/gallary/inv.png", text:'Colect Items to fight against the salmons!'},
    {header: "Leaderboard", image: "images/gallary/leaderboard.png", text: "Collect power eggs and climb the leaderboard"},
    {header: "Events!", image: "images/gallary/event_leaderboard.png", text: "Look out for events! Try and get as many points by chatting, and work for your team durring a splatfest!"}   
]

var nav_buttons = [
    {name: "How To", id: "how_to", file: "how_to.html"},
    {name: "Commands", id: "commands", file: 'commands.html'},
    {name: "Documentation", id: "documentation", file:"documentation.html"},
    {name: "Leaderboard", id: "leaderboard", file: "leaderboard.html"},
    {name: "Invite", id: "invite", file:"invite.html"}
]
var git_buttons = [
    {name: "How To", id: "how_to", file: "https://htmlpreview.github.io/?https://github.com/pchapman-uat/Splatoon_Bot_Website/blob/main/Website/how_to.html"},
    {name: "Commands", id: "commands", file: 'https://htmlpreview.github.io/?https://github.com/pchapman-uat/Splatoon_Bot_Website/blob/main/Website/commands.html'},
    {name: "Documentation", id: "documentation", file:"https://htmlpreview.github.io/?https://github.com/pchapman-uat/Splatoon_Bot_Website/blob/main/Website/documentation.html"},
    {name: "Leaderboard", id: "leaderboard", file: "https://htmlpreview.github.io/?https://github.com/pchapman-uat/Splatoon_Bot_Website/blob/main/Website/leaderboard.html"},
    {name: "Invite", id: "invite", file:"https://htmlpreview.github.io/?https://github.com/pchapman-uat/Splatoon_Bot_Website/blob/main/Website/invite.html"}
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

var leaderboard = [
    {name: "Squibs", avatar: "images/leaderboard/squibs.jpg", score: 0},
    {name: "Banana", avatar: "", score: 500},
    {name: "Poison", avatar: "", score: 700},
    {name: "Agent T", avatar: "", score: 200},
    {name: "John Doe", avatar:"", score: 900}
]

var splatfest = [
    {name: "Squibs", avatar: "images/leaderboard/squibs.jpg", score: 500},
    {name: "Banana", avatar: "", score: 600},
    {name: "Poison", avatar: "", score: 100},
    {name: "Agent T", avatar: "", score: 200},
    {name: "John Doe", avatar:"", score: 400}
]
// Duration in seconds
var ani_duration = 1

function set_gallary(frame){
    document.getElementById("gall_header").innerHTML = gallary[frame].header
    document.getElementById("gall_about").innerHTML= gallary[frame].text
    let img = document.getElementById("gall_img2")
    img.setAttribute("src", `${gallary[frame].image}`)
    // document.getElementById("gall_img").style.backgroundImage = `url(${gallary[frame].image})`
}

var places = ["first", "second", "third"]

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
    var url = document.URL


    parent.appendChild(nav_image)

    var image = document.createElement("img")
    image.setAttribute("id","svgImage")
    image.setAttribute("src","home.svg")
    image.setAttribute("width","50px")
    nav_image.appendChild(image)

    var nav_items = document.createElement("items")
    nav_items.setAttribute("id", "items")
    parent.appendChild(nav_items)
    
    if(url.includes("github")){
        nav_image.setAttribute("href", "https://htmlpreview.github.io/?https://github.com/pchapman-uat/Splatoon_Bot_Website/blob/main/Website/home.html")
        createbuttons("items", git_buttons, location)
    } else{
      nav_image.setAttribute("href", "home.html")
      createbuttons("items", nav_buttons, location)  
    }
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
function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

function leader_table(array, i){
    console.log("Remaining")
    let parent = document.getElementById("remaining")
    let table_row = document.createElement("tr")
    
    let place = document.createElement("td")
    place.innerHTML = ordinal_suffix_of(Number(i)+1)
    table_row.appendChild(place)

    let avatar = document.createElement("td")
    let image = document.createElement("img")
    if(array[i].avatar === ""){
        image.setAttribute("src", `images/leaderboard/default.png`)
    } else {
        image.setAttribute("src", `${array[i].avatar}`)
    }
   
    avatar.appendChild(image)
    table_row.appendChild(avatar)
    
    let name = document.createElement("td")
    name.innerHTML = `${array[i].name}`
    table_row.appendChild(name)

    let score = document.createElement("td")
    score.innerHTML = `${array[i].score}`
    table_row.appendChild(score)
   
    parent.appendChild(table_row)
}
function load_leaderboard(array){
    let table = document.getElementById("remaining")
    table.innerHTML = ""
    console.log("Loading leaderboard")
    array.sort((a, b) => Number(b.score) - Number(a.score))
    console.log(array)
    for(i in array){
        console.log("adding element")
        console.log(i)
        console.log(places.length)
        if(i >= places.length){
         leader_table(array, i)
        } else {
            console.log(places[i])
            let parent = document.getElementById(places[i])
            
            let name = document.createElement("div")
            name.setAttribute("id", `${places[i]}_txt`)
            name.innerHTML = array[i].name
            parent.appendChild(name)

            let img = document.createElement("img")
            img.setAttribute("id", `${places[i]}_img`)
            if(array[i].avatar === ""){
                img.setAttribute("src", `images/leaderboard/default.png`)
            } else {
                img.setAttribute("src", `${array[i].avatar}`)
            }
            parent.appendChild(img)

            let score = document.createElement("div")
            score.setAttribute("id", `${places[i]}_score`)
            score.innerHTML = array[i].score
            parent.appendChild(score)
        }
    }
}

function change_leaderboard(array){
    let mode = document.getElementById("mode")
    if(mode.innerHTML === "Power Eggs"){
        mode.innerHTML = "Splatfest Points"
    } else {
        mode.innerHTML = "Power Eggs"
    }
    let table = document.getElementById("remaining")
    table.innerHTML = ""
    array.sort((a, b) => Number(b.score) - Number(a.score))
    for(i in array){

        if(i >= places.length){
            leader_table(array, i)
        } else {
            let name = document.getElementById(`${places[i]}_txt`)
            name.innerHTML = array[i].name
            
            let avatar = document.getElementById(`${places[i]}_img`)
            if(array[i].avatar === ""){
                avatar.setAttribute("src", `images/leaderboard/default.png`)
            } else {
                avatar.setAttribute("src", `${array[i].avatar}`)
            }
    
            let score = document.getElementById(`${places[i]}_score`)
            score.innerHTML = array[i].score
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