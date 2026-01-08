window.Input = {left:false,right:false,jump:false,attack:false,heavy:false,heal:false,scrollDelta:0};

document.addEventListener("keydown", e => {
    if(e.key==="ArrowLeft"||e.key==="a") window.Input.left=true;
    if(e.key==="ArrowRight"||e.key==="d") window.Input.right=true;
    if(e.key===" "||e.key==="ArrowUp"||e.key==="w") window.Input.jump=true;
    if(e.key==="j"||e.key==="J") window.Input.attack=true;
    if(e.key==="k"||e.key==="K") window.Input.heavy=true;
    if(e.key==="q"||e.key==="Q") window.Input.heal=true;
});

document.addEventListener("keyup", e => {
    if(e.key==="ArrowLeft"||e.key==="a") window.Input.left=false;
    if(e.key==="ArrowRight"||e.key==="d") window.Input.right=false;
    if(e.key===" "||e.key==="ArrowUp"||e.key==="w") window.Input.jump=false;
    if(e.key==="j"||e.key==="J") window.Input.attack=false;
    if(e.key==="k"||e.key==="K") window.Input.heavy=false;
    if(e.key==="q"||e.key==="Q") window.Input.heal=false;
});

document.addEventListener("wheel", e=>{
    window.Input.scrollDelta = e.deltaY>0 ? 1:-1;
});
