<script>
setInterval(function() {
var heart = document.createElement("div")
heart.innerHTML = "❤"
heart.style.position = "absolute"
heart.style.left = Math.random() * window.innerWidth + "px"
heart.style.top = "100%"
heart.style.fontSize = "20px"
heart.style.color = "pink"
document.body.appendChild(heart)

var rise = setInterval(function() {
heart.style.top = heart.offsetTop - 2 + "px"
if(heart.offsetTop < 0) {
clearInterval(rise)
heart.remove()
}
}, 30)
}, 700)
</script>
