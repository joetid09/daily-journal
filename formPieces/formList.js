import { getEntries, useJournalEntries } from "./../scripts/JournalDataProvider.js"
import { JournalForm } from "./journalForm.js"
const entryLog = document.querySelector("#entryLog")

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