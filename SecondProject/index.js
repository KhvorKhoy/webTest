const navLeftManuEl = document.querySelector(".navManuLeft"); 

const navBarLeft = [
{icon:"fa-solid fa-house", iconName:"Home"},
{icon:"fa-solid fa-laptop", iconName:"Laptop"},
{icon:"fa-solid fa-desktop", iconName:"Desktop"},
{icon:"fa-solid fa-desktop", iconName:"Monitor"},
{icon:"fa-solid fa-keyboard", iconName:"Accessory"},
{icon:"fa-solid fa-phone", iconName:"067 975 637"},
{icon:"fa-solid fa-cart-shopping", iconName:"Cart"},
];

let navLeftManu = "";

for (let i=0; i<navBarLeft.length; i++){
    navLeftManu += `
    <div class="itemicon">
    <a href="#"><i class="${navBarLeft[i].icon}"></i><span>${navBarLeft[i].iconName}</span></a>
    
    </div>
    `;
};

navLeftManuEl.innerHTML = navLeftManu;