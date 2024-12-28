let form=document.getElementById("login")
form.addEventListener("submit", function(){
    console.log("click")
    event.preventDefault()
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    if (email=="admin@empher.com" && password=="empher@123"){ 
        localStorage.setItem("logindata",JSON.stringify({email,password}))
        alert("Login as Admin");
        window.location.href="admin.html"
    }else if(email=="user@empher.com" && password=="user@123"){
        localStorage.setItem("logindata",JSON.stringify({email,password}))
        window.location.href="books.html"
    }else{
        alert("Something Went Wrong Please try again later")
    }
})
