console.log("hello world")
import { JournalForm } from "./../formPieces/journalForm.js"
import { EntryListComponent } from "./JournalEntryLists.js"
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { Form } from "./../formPieces/formList.js"

getEntries()
JournalForm()
Form()

