

window.addEventListener('load', function () {

    setInterval(function () {
        let notification = document.getElementById('notification').classList.toggle("active");
    }, 10000);

   
})

function closeIt() {
    document.getElementById('notification').classList.remove("active");
}
