<script>
function unlock() {
var p = document.getElementById("pass").value
if(p === "forever") {
window.location.href = "letter.html"
} else {
alert("That is not the word")
}
}
</script>
