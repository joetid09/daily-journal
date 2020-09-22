console.log("hello world")
import { JournalForm } from "./../formPieces/journalForm.js"
import { Form } from "./../formPieces/formList.js"
import { moodSelect } from "./../formPieces/moodSelect.js"
import { useMoods } from "./MoodProvider.js"

JournalForm()
Form()
console.log(useMoods())
moodSelect()


