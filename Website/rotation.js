window.onload = loadData(false, `slider1`);

function loadData(update, id){
    let slider1 = document.getElementById('slider1')
    let slider2 = document.getElementById('slider2')
    
    slider1.addEventListener('change', function(event) {fetchData(true, `slider1`)});
    slider2.addEventListener('change', function(event) {fetchData(true, `slider2`)});
    fetchData(update, id);
}

                   
async function fetchData(update, id) {
    window.splatoon3api_get(`getSalmonRun`).then(salmonData => {
        window.splatoon3api_get(`getStages`).then(normalData => {
            let sal = salmonData
            let rot = normalData

            let session = document.getElementById(id).value

        document.getElementById("slider1").value = session
        document.getElementById("slider2").value = session
        console.log(sal)
        console.log(sal.regularSchedules)
        let length = 0
        for(let i in sal.regularSchedules){
            length++
        }

        let salmon_session = 0
        if(length < (Number(session)+1)){
            salmon_session = 0
        } else {
            salmon_session = session
        }
        let modes = [
            {Display_Name: "Turf War", name: "turf", api: rot.regular[session], stages: 2, image: "/Website/images/Modes/turf_war.png"},
            {Display_Name: "Anarchy Open", name: "open", api: rot.ranked[session].open, stages: 2, image: "/Website/images/Modes/ranked.png"},
            {Display_Name: "Anarchy Series", name: "series", api: rot.ranked[session].series, stages: 2, image: "/Website/images/Modes/ranked.png"},
            {Display_Name: "X Battle", name: "xbattle", api: rot.xbattle[session], stages: 2, image: "/Website/images/Modes/xbattle.png"},
            {Display_Name: "Salmon Run", name: "salmon", api: sal.regularSchedules[salmon_session], stages: 1, weapons: [sal.regularSchedules[salmon_session].weapons[0], sal.regularSchedules[salmon_session].weapons[1], sal.regularSchedules[salmon_session].weapons[2], sal.regularSchedules[salmon_session].weapons[3]], image: "/Website/images/Modes/salmon.png"},
        ]

        // Check if big run is active, if not hide div
        if(sal.bigRunSchedules[0]){
            modes.push({Display_Name: "Big Run", name: "big_run", api: sal.bigRunSchedules[0], stages: 1, weapons: [sal.bigRunSchedules[0].weapons[0], sal.bigRunSchedules[0].weapons[1], sal.bigRunSchedules[0].weapons[2], sal.bigRunSchedules[0].weapons[3]], image: "/Website/images/Modes/big_run.png"})
        } else {
            console.log("No Active Big run")
            document.getElementById("big_run").hidden = true
        }
        // For each mode add the information to the rotation page
        for(let i in modes){
            for(let j = 0; j < modes[i].stages; j++){
                console.log(Number(j)+1)
                let stage = document.getElementById(`${modes[i].name}${Number(j)+1}`)
                
                // Within the API it is formated within nested array, these if statements check how many stages, refereing to the stage, stage1, or stage2 arrays as needed
                
                if(j === 0){
                    if(modes[i].stages === 1){
                        var data = modes[i].api.stage
                    } else {
                        var data = modes[i].api.stage1
                    }
                    
                } else{
                    var data = modes[i].api.stage2
                }

                // Using the modes array it will display the name

                let mode = document.getElementById(`${modes[i].name}${Number(j)+1}`)

                // Error checking for mode is not found, this happens when limited time modes accor
                if(mode){
                    let name_id = `${modes[i].name}_name${Number(j)+1}`
                    let img_id = `${modes[i].name}_stage${Number(j)+1}`


                    if(!update){

                        // Load Name
                        let name = document.createElement("div")
                        name.setAttribute("class", "name")
                        name.setAttribute("id", name_id)
                        name.innerHTML = data.name
                        mode.appendChild(name)

                        // Load Image
                        let image = document.createElement("img")
                        image.setAttribute("class", "stage_img")
                        image.setAttribute("id", img_id )
                        image.setAttribute("src", `${data.image}`)
                        mode.appendChild(image)
                    } else {

                        let name = document.getElementById(name_id)
                        name.innerHTML = data.name

                        let image = document.getElementById(img_id)
                        image.setAttribute("src", `${data.image}`)

                    }

                    



                }else{
                    console.log(`${modes[i].name} image ${j} div not found`)
                }
                

                stage.setAttribute("src", data.image)
                
            }
            console.log(i)

            // Load in the time and date infomration

            let time_parent = document.getElementById(`${modes[i].name}_header`)
            let img_parent = document.getElementById(`${modes[i].name}_header_txt`)
            let date_options = {hour: "numeric"}
            
            let times_id = `${modes[i].name}_times`
            let start_id = `${modes[i].name}_start`
            let end_id = `${modes[i].name}_end`

            if(!update){
                let img = document.createElement("img")
                img.setAttribute("src", modes[i].image)
                img.setAttribute("class", "icon")
                img_parent.appendChild(img)

                let times = document.createElement("div")
                times.setAttribute("class", "times")
                times.setAttribute("id", times_id)

                let start = document.createElement("div")
                start.setAttribute("class", "start")
                start.setAttribute("id", start_id)
                start.innerHTML = new Date(modes[i].api.start_time).toLocaleDateString('en-us', date_options)

                let end = document.createElement("div")
                end.setAttribute("class", "end")
                end.setAttribute("id", end_id)
                end.innerHTML = new Date(modes[i].api.end_time).toLocaleDateString('en-us', date_options)

                times.appendChild(start)
                times.appendChild(end)

                time_parent.appendChild(times)

            } else {
                let start = document.getElementById(start_id)
                start.innerHTML = new Date(modes[i].api.start_time).toLocaleDateString('en-us', date_options)

                let end = document.getElementById(end_id)
                end.innerHTML = new Date(modes[i].api.end_time).toLocaleDateString('en-us', date_options)
            }
            
            if(modes[i].name === "salmon" || modes[i].name === "big_run"){

                
                    let img_id = `${modes[i].name}_weapon_`

                    if(!update){
                        let weapons_box = document.createElement("div")
                        weapons_box.setAttribute("class", "weapons")

                        for(let j in modes[i].weapons){                        
                            let img = document.createElement("img")
                            img.setAttribute("src",  `${modes[i].weapons[j].image}`)
                            img.setAttribute("id", `${img_id}${j}`)

                            weapons_box.appendChild(img)
                        }

                        time_parent.appendChild(weapons_box)

                    } else {

                        for(j in modes[i].weapons){
                            let img = document.getElementById(`${img_id}${j}`)
                            img.setAttribute("src", ` ${modes[i].weapons[j].image}`)
                        }
                        
                    }
            }
        }

        })
    })
}
