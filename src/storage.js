//WIP?

const Storage = require('electron-store')

class DataStorage extends Storage {
    constructor (settings){
    this.volitilityOutput = this,get('volitilityOutput') ||[]
    }

    updateVolitilityOutput () {
        this.set('volitilityOutput', this.volitilityOutput)

        return this
    }

    getVolitilityOutput () {
        this.volitilityOutput = this.get('volilitlityOutput')|| []

        return this
    }
}

module.exports = DataStorage