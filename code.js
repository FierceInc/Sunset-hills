var buildings = document.querySelectorAll("td.table")
var buildingHeights = document.querySelectorAll("input")
var arrayOfBuildings = []

getBuildings()
function getBuildings() {

    let arrayOfBuildings = []
    var tallestBuilding = 0
    
    
    for(const[buildingA] of Object.entries(buildings)){
        //Loop through the buildings and Loop through their heights
        for(const[buildingH, height] of Object.entries(buildingHeights)){
            if(buildingA == buildingH){
                if(parseInt(height.value) >= 1 && parseInt(height.value) < 10)
                buildings[buildingA].style.height = (parseInt(height.value) * 50) + 'px';
                arrayOfBuildings.push(height.value)
                }   
            }
            //Check for the tallest building 
           for(var tallest = 0; tallest  < arrayOfBuildings.length; tallest++){

            if(arrayOfBuildings[tallest] > tallestBuilding && arrayOfBuildings[tallest] < 10 ){

                tallestBuilding = arrayOfBuildings[tallest]
                buildings[buildingA].classList.add('color')
                buildings[buildingA].classList.remove('remove')
            }
            // If the previous buiding is taller than the ones after it change its color
            else {
                buildings[buildingA].classList.remove('color')
                buildings[buildingA].classList.add('remove')
            }
            console.log(tallest)
        } 
        }     
}
//When something changes in the document the function is called
document.addEventListener('change', () => {
    getBuildings()
})

