const poems_es = [
    {title:"450nm", fileName:"450nm.html", fecha:new Date("2025-09-13")},
    {title:"Agotamiento", fileName:"agotamiento.html", fecha:new Date("2025-09-10")},
    {title:"Canción de Verano", fileName:"cancion-de-verano.html", fecha:new Date("2025-03-15")},
    {title:"Choque Frío", fileName:"choque-frio.html", fecha:new Date("2025-09-26")},
    {title:"Después de la Fiesta", fileName:"despues-de-la-fiesta.html", fecha:new Date("2025-08-12")},
    {title:"El Gato Negro", fileName:"gato-negro.html", fecha:new Date("2022-04-14")},
    {title:"Luna Creciente", fileName:"luna-creciente.html", fecha:new Date("2025-08-13")},
    {title:"Mi Alma Es Un Desierto", fileName:"mi-alma-es-un-desierto.html", fecha:new Date("2025-07-26")},
    {title:"Otra Vez", fileName:"otra-vez.html", fecha:new Date("2025-02-12")},
    {title:"Te Guardo", fileName:"te-guardo.html", fecha:new Date("2025-08-26")}
];
let poems_list_es = poems_es;
let orden_poemas_es;

const poems_en = [
    {title:"A Hole", fileName:"a-hole.html", fecha:new Date("2024-11-29")},
    {title:"A Nightmare", fileName:"a-nightmare.html", fecha:new Date("2025-03-07")},
    {title:"Anagnorisis", fileName:"anagnorisis.html", fecha:new Date("2023-07-23")},
    {title:"Broken Glass", fileName:"broken-glass.html", fecha:new Date("2024-12-17")},
    {title:"Chestnut Trees", fileName:"chestnut-trees.html", fecha:new Date("2025-03-03")},
    {title:"Dawn/Blade", fileName:"dawn-blade.html", fecha:new Date("2025-09-30")},
    {title:"?", fileName:"first-poem.html", fecha:new Date("2021-08-06")},
    {title:"From The Pond", fileName:"from-the-pond.html", fecha:new Date("2025-09-05")},
    {title:"He Is The Hawk", fileName:"he-is-the-hawk.html", fecha:new Date("2025-10-08")},
    {title:"Laboratory Mice", fileName:"laboratory-mice.html", fecha:new Date("2025-03-05")},
    {title:"Like A Dog", fileName:"like-a-dog.html", fecha:new Date("2025-11-05")},
    {title:"Pigeons", fileName:"pigeons.html", fecha:new Date("2024-12-18")},
    {title:"Pigeons II", fileName:"pigeons-ii.html", fecha:new Date("2025-02-23")},
    {title:"The Tracks", fileName:"the-tracks.html", fecha:new Date("2025-03-06")}
]
let poems_list_en = poems_en;
let orden_poemas_en;

function ordenAlfabetico(poem_list){
    return poem_list.sort((a,b)=>a.title.localeCompare(b.title));
}
function ordenCronologico(poem_list){
    return poem_list.sort((a,b)=>a.fecha - b.fecha);
}

// Lista de poemas en español
function displayPoemsList_ES(){
    let element = document.getElementById("listaES");
    element.innerHTML="";
    for(i=0;i<poems_list_es.length;i++){
        let current = poems_list_es[i];
        const li = document.createElement("li");
        li.innerHTML = "<a href=" + '"/poemas-es/' + current.fileName + '">' + current.title + " (" + current.fecha.toDateString() + ")" + "</a>";
        element.appendChild(li);
    }
}
// Lista de poemas en inglés
function displayPoemsList_EN(){
    let element = document.getElementById("listaEN");
    element.innerHTML="";
    for(i=0;i<poems_list_en.length;i++){
        let current = poems_list_en[i];
        const li = document.createElement("li");
        li.innerHTML = "<a href=" + '"/poems/' + current.fileName + '">' + current.title + " (" + current.fecha.toDateString() + ")" + "</a>";
        element.appendChild(li);
    }
}

// Muestra todos los poemas al cargar la página
function displayAllPoems(){
    console.log("cargando índice de poemas");
    let savedSort = localStorage.getItem("orden_poemas_es");
    if(savedSort){
        orden_poemas_es = savedSort;
        console.log("preferencia del usuario: " + orden_poemas_es);
    }
    else{
        //console.log("no hay preferencia del usuario");
        orden_poemas_es = "alfa";
    }
    switch(orden_poemas_es){
        case "crono":poems_list_es = ordenCronologico(poems_es);break;
        default:poems_list_es = ordenAlfabetico(poems_es);break;
    }
    displayPoemsList_ES();

    let en_savedSort = localStorage.getItem("orden_poemas_en");
    if(en_savedSort){
        orden_poemas_en = en_savedSort;
        console.log("preferencia del usuario: " + orden_poemas_en);
    }
    else{
        //console.log("no hay preferencia del usuario");
        orden_poemas_en = "alfa";
    }
    switch(orden_poemas_en){
        case "crono":poems_list_en = ordenCronologico(poems_en);break;
        default:poems_list_en = ordenAlfabetico(poems_en);break;
    }
    displayPoemsList_EN();

}

// Selector para los poemas en español
document.getElementById("sortPoemsES").addEventListener("change",e=>{
    if(e.target.value==="crono"){
        poems_list_es = ordenCronologico(poems_es);
    }
    else{
        poems_list_es = ordenAlfabetico(poems_es);
    }
    localStorage.setItem("orden_poemas_es",e.target.value);
    displayPoemsList_ES();
});

// Selector para los poemas en inglés
document.getElementById("sortPoemsEN").addEventListener("change",e=>{
    if(e.target.value==="crono"){
        poems_list_en = ordenCronologico(poems_en);
    }
    else{
        poems_list_en = ordenAlfabetico(poems_en);
    }
    localStorage.setItem("orden_poemas_en",e.target.value);
    displayPoemsList_EN();
});

// define el poema anterior y el siguiente en función del orden seleccionado por el usuario
function setPoemNavigation_ES(poemTitle){
    console.log("cargando poema " + '"' + poemTitle + '"');
    let index = 0;

    let savedSort = localStorage.getItem("orden_poemas_es");
    if(savedSort){
        orden_poemas_es = savedSort;
        console.log("preferencia del usuario: " + orden_poemas_es);
    }
    else{
        console.log("no hay preferencia del usuario");
        orden_poemas_es = "alfa";
    }
    switch(orden_poemas_es){
        case "crono":poems_list_es = ordenCronologico(poems_es);break;
        default:poems_list_es = ordenAlfabetico(poems_es);break;
    }

    for(i=0;i<poems_list_es.length;i++){
        if(poems_list_es[i].title===poemTitle){
            index = i;
            break;
        }
    }
    console.log("índice: " + (i));

    // si es el primero
    if(index===0){
        let elem_prev = document.getElementById("link-prev");
        elem_prev.style = "display:none;";
    }
    // si es el último
    if(index===(poems_list_es.length-1)){
        let elem_next = document.getElementById("link-next");
        elem_next.style = "display:none;";
    }

    if(index!==0){
        console.log("poema anterior: " + poems_list_es[i-1].title);
        let elem_prev = document.getElementById("link-prev");
        elem_prev.href="";
        elem_prev.href=poems_list_es[i-1].fileName;
    }
    if(index!==(poems_list_es.length-1)){
        console.log("poema siguiente: " + poems_list_es[i+1].title);
        let elem_next = document.getElementById("link-next");
        elem_next.href="";
        elem_next.href=poems_list_es[i+1].fileName;
    }

}

function resetStorage(){
    localStorage.clear();
}