import { baseurl } from "./baseurl.js"
let displayarr=[]
let logindata=JSON.parse(localStorage.getItem("logindata"))
if (logindata == null ){
    alert("admin not logged in")
    window.location.href="index.html"
}
if (logindata.email!=="admin@empher.com"){
    alert("admin not logged in")
    window.location.href="index.html"
}
let adminForm=document.getElementById("admin-form")
adminForm.addEventListener("submit",function(){
    event.preventDefault()
    let title=document.getElementById("title").value
    let author=document.getElementById("author").value
    let category=document.getElementById("category").value
    let bookobj={title,author,category,isVerified: false,
        borrowedDays: null,
        imageUrl: "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"}
     
    fetch(`${baseurl}/Books`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(bookobj)
    }    
    )
    alert("Book Added Successfully")
    formcards()
})
getdata()

async function getdata(){
    try{
        let res= await fetch(`${baseurl}/Books`)
        let data= await res.json()
        // console.log(data)
        // return data
        // data.push(displayarr)
        data.map((ele)=>{
            displayarr.push(ele)
        })
        // displayarr.push(data)
        formcards(displayarr)
    }catch(err){
        console.log(err)
    }
}

function formcards(displayarr){
    console.log(displayarr)
    let card=document.createElement("div")
    card.innerHTML=""
    card.setAttribute("class","box")
    
    displayarr.map((ele)=>{
        let img=document.createElement("img")
        img.src="https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
        img.setAttribute("class","image")

        let title=document.createElement("h3")
        title.textContent=`Title:${ele.title}`

        let author=document.createElement("h3")
        author.textContent=`Author:${ele.author}`

        let category=document.createElement("h3")
        category.textContent=`Category:${ele.category}`

        let avilstat=document.createElement("h3")
        avilstat.textContent="isAvailable:true"

        let veristat=document.createElement("h3")
        veristat.textContent="isVerfied:false"


        let Vbtn=document.createElement("button")
        Vbtn.textContent="Verify Button"
        Vbtn.addEventListener("click",function(){
            let response=confirm("Are you sure to Verify..?")
            if(response.ok){
                ele.isVerified="true"

            }
        
        })

        

        let Dbtn=document.createElement("button")
        Dbtn.textContent="Delete Button"
        Dbtn.addEventListener("click",function(){
            // let del=displayarr.filter()
            console.log("click")
            fetch(`${baseurl}/Books`,{
                method:"DELETE",
            

                
            }).then(()=>{
                alert("Deleted....")
            }).catch((err)=>{
                console.log(err)
            })
        })

        card.append(img, title,author,category,avilstat,veristat,Vbtn,Dbtn)
        cont.append(card)
    })
    // card.append(title,author,category,Vbtn,Dbtn)
    // cont.append(card)
}
// window.onload= async () => {
//     let arr= await formcards()
//     formcards(arr)
    
// }
