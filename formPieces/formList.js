import { getEntries, useJournalEntries } from "./../scripts/JournalDataProvider.js"
import { JournalForm } from "./journalForm.js"
const entryLog = document.querySelector("#entryLog")

export const renderForm = formInfo => {
    const formHTML = useJournalEntries()
    entryLog.innerHTML = `
    ${formHTML.map(itemObject => {
        return `<section id="${itemObject.id}">
        <div class ="entry-log">
            <p>Entry Date:  ${itemObject.journalDate}</p>
            <p>Topic:  ${itemObject.journalConcepts}</p>
            <p>Entry: ${itemObject.journalEntry}</p>
        </div>`
    })}
   
`}

export const Form = journal => {
    getEntries()
        .then(() => {
            renderForm(useJournalEntries())
        })
}