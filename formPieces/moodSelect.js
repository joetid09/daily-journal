import { getMoods, useMoods } from "../scripts/MoodProvider.js"

// const selectionList = document.querySelector("#moods")

const renderDropDown = selectMood => {
    // const listItems = useMoods()
    debugger;
    const selectionList = document.querySelector("#moods")
    selectionList.innerHTML = `
    ${selectMood.map(itemObject => {
        return `<option value="${itemObject.id}">${itemObject.label}</option>`
    })
        }`
}

export const moodSelect = () => {
    getMoods()
        .then(() => {
            renderDropDown(useMoods())

        })
}
