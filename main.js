const hbg = document.getElementById('hbg');
const mobNav = document.getElementById('mobNav');
hbg.addEventListener('click', () => {
    hbg.classList.toggle('open');
    mobNav.classList.toggle('open');
});

function cn() {
    hbg.classList.remove('open');
    mobNav.classList.remove('open');
}
document.addEventListener('click', e => {
    if (!hbg.contains(e.target) && !mobNav.contains(e.target)) cn();
});