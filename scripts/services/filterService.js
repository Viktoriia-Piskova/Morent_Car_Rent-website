
import { initCars } from "./displayService.js";
import { allCars } from "./../data.js";

const currentTypeFilters = []
const currentCapacityFilters = []

export function changeTypeFilter(event){
    const existiningIndex = currentTypeFilters.indexOf(event.target.id);
    if (existiningIndex > -1) {
        currentTypeFilters.splice(existiningIndex, 1)
    } else {
        currentTypeFilters.push(event.target.id);
    }
    filterCars()
}

export function changeCapacityFilter(event){
    const existiningIndex = currentCapacityFilters.indexOf(event.target.id);
        if (existiningIndex > -1) {
            currentCapacityFilters.splice(existiningIndex, 1)
        } else {
            currentCapacityFilters.push(event.target.id);
        }
        filterCars()
}

function filterCars(){
    let filteredCars = []

    if(currentTypeFilters.length === 0){
        filteredCars = allCars
    } else{
        currentTypeFilters.forEach(element => {
            const found = allCars.filter(f=>f.typeId === parseInt(element))
            if(found){
                filteredCars.push(...found);
            }
        })
    }
    
    let filteredCars2 = []
    if(currentCapacityFilters.length === 0){
        filteredCars2 = filteredCars
    } else{
    currentCapacityFilters.forEach(element => {
        const found = filteredCars.filter(f=>f.capacityId === parseInt(element))
            if(found){
                filteredCars2.push(...found);
            }
        })
    }

    initCars([...new Set(filteredCars2)])
}