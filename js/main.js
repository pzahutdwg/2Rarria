const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
onreseize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
