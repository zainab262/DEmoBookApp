let logindata=JSON.parse(localStorage.getItem("logindata"))
if (logindata == null ){
    alert("admin not logged in")
    window.location.href="index.html"
}
if (logindata.email!=="user@empher.com"){
    alert("admin not logged in")
    window.location.href="index.html"
}
let avail=document.getElementById("available")
let borr=document.getElementById("borrow")