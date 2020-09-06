console.log("hello world")

import { EntryListComponent } from "./JournalEntryLists.js"
import { getEntries } from "./JournalDataProvider.js"

getEntries()
EntryListComponent()