function collapseNavWindow(){
    let element=document.getElementById("topnav");
    if(element.className==="nav-window-content"){
        element.className="nav-window-collapsed";
    }
    else{
        element.className="nav-window-content";
    }
}

/* switches between default font (Times New Roman) and JP Hand */
function changeFont(){
    /*const styles=["default", "hand", "journal"];
    let poemText=document.getElementById("poem");
    let currentStyle=0;
    let nextStyle=0;
    for(let i=0;i<styles.length;i++){
        if(poemText.className===styles[i]){
            currentStyle=i;
        }
    }
    if(currentStyle===(styles.length-1)){
        nextStyle=0;
    }
    else nextStyle=currentStyle+1;
    
    console.log("current: " + styles[currentStyle]);
    console.log("next: " + styles[nextStyle]);

    poemText.className=(styles[currentStyle]);
    */
   let poemText=document.getElementById("poem");
    if(poemText.className==="default"){
        poemText.className="hand";
    }
    else{
        poemText.className="default";
    }

}