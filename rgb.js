const r = document.getElementById('r');
const g = document.getElementById('g');
const b = document.getElementById('b');
const a = document.getElementById('a');
const applyRgbBtn = document.getElementById('applyRgbBtn');

applyRgbBtn.addEventListener('click', function(){
    const rgbaColor = `rgba(${r.value}, ${g.value}, ${b.value}, ${a.value})`;
    document.body.style.backgroundColor = rgbaColor;
    color.textContent = rgbaColor;
});
