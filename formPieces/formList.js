import { deleteEntry, getEntries, useJournalEntries } from "./../scripts/JournalDataProvider.js"
import { JournalForm } from "./journalForm.js"

const entryLog = document.querySelector("#entryLog")
const eventHub = document.querySelector("#allJournal")

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteButton--")) {
        const [prefix, id] = event.target.id.split("--")
        deleteEntry(id)
            .then(Form())
    }
})


export const renderForm = formInfo => {
    const formHTML = useJournalEntries()
    entryLog.innerHTML = `
    ${formHTML.map(itemObject => {
        return `<section id="${itemObject.id}">
        <div class ="entry-log">
            <p>Entry Date:  ${itemObject.date}</p>
            <p>Topic:  ${itemObject.concept}</p>
            <p>Entry: ${itemObject.entry}</p>
            <p>Mood: ${itemObject.mood.label}</p>
            <button id="deleteButton--${itemObject.id}">Delete</button>
        </div>
    </section>`
    })}
   
`}

export const Form = journal => {
    getEntries()
        .then(() => {
            renderForm(useJournalEntries())
        })
}