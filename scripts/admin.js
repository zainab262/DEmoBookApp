let logindata=JSON.parse(localStorage.getItem("logindata"))
if (logindata == null ){
    alert("admin not logged in")
    window.location.href="index.html"
}