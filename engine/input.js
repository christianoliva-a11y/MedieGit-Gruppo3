const Input={left:false,right:false,jump:false,attack:false,heavy:false,heal:false,scrollDelta:0};

document.addEventListener("keydown", e => {
    if(e.key==="ArrowLeft"||e.key==="a") Input.left=true;
    if(e.key==="ArrowRight"||e.key==="d") Input.right=true;
    if(e.key===" "||e.key==="ArrowUp"||e.key==="w") Input.jump=true;
    if(e.key==="j"||e.key==="J") Input.attack=true;
    if(e.key==="k"||e.key==="K") Input.heavy=true;
    if(e.key==="q"||e.key==="Q") Input.heal=true;
});

document.addEventListener("keyup", e => {
    if(e.key==="ArrowLeft"||e.key==="a") Input.left=false;
    if(e.key==="ArrowRight"||e.key==="d") Input.right=false;
    if(e.key===" "||e.key==="ArrowUp"||e.key==="w") Input.jump=false;
    if(e.key==="j"||e.key==="J") Input.attack=false;
    if(e.key==="k"||e.key==="K") Input.heavy=false;
    if(e.key==="q"||e.key==="Q") Input.heal=false;
});

document.addEventListener("wheel", e=>{
    Input.scrollDelta = e.deltaY>0 ? 1:-1;
});
