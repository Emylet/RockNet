//JQuery function Starts
        $("document").ready(function(){
        $("#naija-top").on("click", function(){
            $("#naija-topsongs").show();
            $("#top-global").hide();
            $("#new-released").hide();
        });

        $("#top-g").on("click", function(){
            $("#top-global").show();
            $("#naija-topsongs").hide();
            $("#new-released").hide();
        });

        $("#newest").on("click", function(){
            $("#new-released").show();
            $("#naija-topsongs").hide();
            $("#top-global").hide();
        });


    });

// jQuery Ends.....


// Menu active toggle

var list=document.getElementById("list");
var linkList=list.getElementsByClassName("header-list");
var i;

for(i=0; i<linkList.length; i++){
    linkList[i].addEventListener("click", function(){
        var current=document.getElementsByClassName("active");
        current[0].className=current[0].className.replace("active", "");
        this.className+=" active";
        console.log(this.className);
    })
}

// Album Prev and Next Function

const menuItems= [
    {
        id: 1,
        albumName: "Deal With It",
        albumImg:"albums/phyno.jpg",
        artistName:"Phyno"
    },
    {
        id: 2,
        albumName: "Carter III",
        albumImg:"albums/wayne.jpg",
        artistName:"Lil Wayne"
    },
    {
        id: 3,
        albumName: "A better time",
        albumImg:"albums/davido.jpg",
        artistName:"Davido"
    },
    {
        id: 4,
        albumName: "African Giant",
        albumImg:"albums/burna.jpg",
        artistName:"Burna Boy"
    },
    {
        id: 5,
        albumName: "Billion Dollar Dream",
        albumImg:"albums/jeriq.jpg",
        artistName:"Jerich"
    },
    
]

const albumName = document.getElementById("albumName");
const albumImg = document.getElementById("albumImg");
const artistName = document.getElementById("artistName");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentMenu = 0;


window.addEventListener('DOMContentLoaded', function(){
    allMenu(currentMenu);
});

const allMenu=()=>{
    let menu = menuItems[currentMenu];
    albumName.textContent=menu.albumName;
    albumImg.src=menu.albumImg;
    artistName.textContent=menu.artistName;
};

//Preious
prev.addEventListener('click',()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu=menuItems.length-1;
    }
    allMenu(currentMenu);
});

//next
next.addEventListener('click',()=>{
    currentMenu++;
    if(currentMenu>menuItems.length-1){
        currentMenu=0;
    }
    allMenu(currentMenu)
})

// Album Stuff Ends