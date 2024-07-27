
function beta(){
    username = window.prompt("ENter your name")
    document.getElementById("alpha").textContent = `Welcome ${username}`
    document.getElementById("Name").textContent = `Your name is ${username}`
}
function gamma(){
    birthday = window.prompt("ENter your Birth day")
    document.getElementById("bd").textContent = `Your birthday is ${birthday}`
}
function delta(){
    num = window.prompt("What is on your mind right now?")
    document.getElementById("card").textContent = `You think ${num}`


    const list = ["Dent Corn", "Flint Corn", "Sweet Corn", "Popcorn", "Flour Corn", "Waxy Corn", "Pod Corn", "Ornamental Corn", "Baby Corn","Hybrid Corn", "Indian Corn", "Popping Corn Varieties: Mushroom Popcorn", "Popping Corn Varieties: Butterfly Popcorn", "High-Oil Corn", "High-Starch Corn", "Tropical Corn", "Northern Flint Corn", "Mexican Corn Varieties: Nopal", "Mexican Corn Varieties: Oaxacan Green Corn", "Specialty Corn: Blue Corn", "Specialty Corn: White Corn","Black Corn", "Red Corn", "Glass Gem Corn", "Rainbow Corn", "Tortilla Corn", "Cuzco Corn: Choclo", "Cuzco Corn: Maíz Morado", "Sweet White Corn", "Gourdseed Corn", "Blue Hopi Corn", "Zea Mays", "Southern Corn", "Cattle Corn", "Chinese Corn"]
    ran = Math.floor(Math.random() *31)
    if(num==`Proud is so cute`) {
    document.getElementById("result").textContent = "Stop being a SIMP"}

    else if(num==null){
        document.getElementById("result").textContent = "Enter Something"}
    else {
    document.getElementById("result").textContent = `If you were to be a corn ,you are a ${list[ran]}`;
    }
}



