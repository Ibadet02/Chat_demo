// declaring variables
const people=document.querySelector(".people")
const links=document.querySelectorAll(".people a")
const people_images=people.querySelectorAll("img")
const pname=document.querySelector(".container2 .name a")
const chatname=document.querySelector(".chat-container h3")
const chat_image=document.querySelector(".container2 .name img")
const chat_details_image=document.querySelector(".chat-container img")
const chat_details_name=document.querySelector(".chat-container h3")
const container3_accname_image=document.querySelector(".container3 .acc-name img")
const container3_accname_name=document.querySelector(".container3 .acc-name a")
const chat_container_img=document.querySelector(".chat-container img")
const glass=document.getElementById("glass")
const arrow=document.getElementById("arrow-div")
const containers=document.getElementById("main")
const input=document.getElementById("search-people")
const filter=input.value.toUpperCase()
const toggle_container3=document.getElementById("toggle-container3")
const container3=document.querySelector(".container3")
const messenger_tools=document.querySelector(".messenger-tools")
const customise_chat_container=document.querySelector(".customise-chat-container")
const privacy_and_support=document.querySelector(".Privacy-and-support")
const customise_chat_box=document.querySelector(".customise-chat-box")
const privacy_box=document.querySelector(".privacy-box")
const arr=[]
// person-clicks
console.log(arr)
    people.addEventListener("click",function(el){
        for(var i=0;i<links.length;i++){
            if(links[i].style.display==""){
                arr.push(true)
            }
            else{
                arr.push(false)
            }
        }
        if((glass.style.visibility!="hidden" || arr.includes(true))){
            el.preventDefault()
            links.forEach(function(p){
                p.style.backgroundColor=""
            })
            if(el.target.style.display=="none"){
                links.forEach(function(p){
                    p.style.backgroundColor="white"
                })
            }
            else{
                el.target.style.backgroundColor="#ddd"
                pname.innerText=el.target.innerText
                pname.href=el.target.href
                chatname.innerText=el.target.innerText
                chat_image.src=el.target.querySelector("img").src
                container3_accname_image.src=el.target.querySelector("img").src
                chat_details_name=el.target.innerText
                container3_accname_name.innerText=el.target.innerText
                chat_container_img.src=el.target.querySelector("img").src
                container3_accname_name.href=el.target.href
        }
        }
    })
// searchs
input.addEventListener("keyup",()=>{
    links.forEach(l=>{
        var filter=input.value.toUpperCase()
        if(l.innerText.toUpperCase().indexOf(filter)>-1){
            l.style.display=""
        }
        else{
            l.style.display="none"
        }
    })
})
// search-click
containers.addEventListener("click",t=>{
    if(t.target==input && input.value==""){
        glass.style.visibility="hidden"
        input.style.paddingLeft="8px"
        input.style.marginLeft="50px"
        arrow.style.display="flex"
        links.forEach(person=>{
            person.style.display="none"
        })
    }
})
arrow.addEventListener("click",x=>{
    input.value=""
    glass.style.visibility="visible"
    input.style.paddingLeft="30px"
    input.style.marginLeft=""
    arrow.style.display="none"
    links.forEach(person=>{
        person.style.display=""
    })
    people_images.forEach(img=>{
        img.style.display=""
    })
})

// close/open container3
toggle_container3.addEventListener("click",()=>{
    if(container3.style.display!="none"){
        container3.style.display="none"
    }
    else{
        container3.style.display="flex"
    }
})

// support
console.log(customise_chat_box.style.display)
messenger_tools.addEventListener("click",(t)=>{

    if((t.target==customise_chat_container || t.target==customise_chat_container.querySelector("span")) && customise_chat_box.style.display==""){
        customise_chat_box.style.display="block"
    }
    else if((t.target==customise_chat_container || t.target==customise_chat_container.querySelector("span")) && customise_chat_box.style.display!=""){
        customise_chat_box.style.display=""
    }
    if((t.target==privacy_and_support || t.target==privacy_and_support.querySelector("span")) && privacy_box.style.display==""){
        privacy_box.style.display="block"
    }
    else if((t.target==privacy_and_support || t.target==privacy_and_support.querySelector("span")) && privacy_box.style.display!=""){
        privacy_box.style.display=""
    }
})