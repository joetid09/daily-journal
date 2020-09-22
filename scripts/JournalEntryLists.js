import { JournalForm } from "../formPieces/journalForm.js";
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

export const EntryListComponent = entryArray => {
    // Use the journal entry data from the data provider component
    const entryLog = document.querySelector("#entryLog");
    const formHTML = useJournalEntries()
    debugger;
    let entryHTMLRepresentations = entryArray.map(firstEntry => {
        return JournalEntryComponent(firstEntry)
    })
    entryLog.innerHTML = entryHTMLRepresentations.join("")
}
const renderForm = formInfo => {
    const formHTML = useJournalEntries()
    entryLog.innerHTML = `
    <section id="entry--${entries.id}" class="journalEntry">
    ${entries.entry}
    ${entries.date}
    </section>
`
}