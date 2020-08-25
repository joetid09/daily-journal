import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const entryLogs = document.querySelector("#entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    let entryHTMLRepresentations = ""
    for (const entry of entries) {
        
        JournalEntryComponent(entry);

        entryLogs.innerHTML += `
        <article class = "myLogs">
            ${entryHTMLRepresentations}
        </article>`
    }
}