console.log("hello world")
import { JournalForm } from "../formPieces/journalForm.js"
import { EntryListComponent } from "./JournalEntryLists.js"
import { getEntries } from "./JournalDataProvider.js"


JournalForm()
getEntries()
EntryListComponent()