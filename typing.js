<script>
var main = "I never planned to feel this way. It arrived slowly quietly and without permission. At first it was just a thought that stayed longer than it should have. Then it became something deeper. I know you have a boyfriend and I respect that completely. This letter is not here to change your life. It exists because honesty matters to me. You are beautiful in a way that does not demand attention. A soft beauty that lingers in memory. Your smile stays with me long after the moment ends. Your presence feels calm even when everything else feels heavy. I think about you in ordinary moments. When nothing special is happening. When my mind should be somewhere else."

var moreText = "I want you in a quiet way. In a patient way. I want to know how your days really feel not just how they look. I want to hear the things you do not always say out loud. I want to notice the small changes in your mood. I imagine sitting beside you in silence and feeling completely at peace. No expectations. No pressure. Just warmth."

var hiddenText = "This part is hidden because it is the most honest. I care about you deeply. Not in a way that asks for anything. In a way that simply exists. Even if I am never part of your story you will always be part of mine."

var endText = "No matter where life places us I hope you are treated gently. I hope your mornings feel soft your days feel kind and your nights feel peaceful. I am grateful that our paths crossed. Good morning"

var i = 0

function type(id,text,speed) {
i = 0
document.getElementById(id).innerHTML = ""
var t = setInterval(function() {
document.getElementById(id).innerHTML += text.charAt(i)
i++
if(i >= text.length) clearInterval(t)
}, speed)
}

function start() {
type("text",main,25)
}

function more() {
type("extra",moreText,25)
}

function secret() {
document.getElementById("hidden").style.display = "block"
type("hidden",hiddenText,30)
}

function end() {
type("ending",endText,35)
}
</script>
