'use strict'

export class Car {
    constructor(id,
                name,
                typeId,
                capacityId,
                steering, 
                gasoline, 
                currentPrice, 
                fullPrice, 
                description, 
                images,
                isOpened = false,
                isRecent = false) {
        this.id = id,
        this.name = name,
        this.typeId = typeId,
        this.capacityId = capacityId,
        this.steering = steering,
        this.gasoline = gasoline,
        this.currentPrice = currentPrice,
        this.fullPrice = fullPrice,
        this.description = description,
        this.images = images,
        this.isOpened = isOpened,
        this.isRecent = isRecent
    }
}



