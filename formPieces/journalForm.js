import { saveJournalEntry } from "../scripts/JournalDataProvider.js"

const formElement = document.querySelector(".entryContents")
const eventHub = document.querySelector("#allJournal")

eventHub.addEventListener("click", event => {
    if (event.target.id === "clickSave") {

        const date = document.querySelector("#journalDate")
        const mood = document.querySelector("#moods")
        const concepts = document.querySelector("#concepts")
        const entry = document.querySelector("#journalEntry")
        console.log("does my entry have info?!", date, mood, concepts, entry)
        const newEntry = {
            journalDate: date.value,
            journalMood: mood.value,
            journalConcepts: concepts.value,
            journalEntry: entry.value
        }

        saveJournalEntry(newEntry)
    }

})

export const JournalForm = () => {
    formElement.innerHTML = `
    <div class="date">
    <form action="">
        <fieldset>
            <label for="journalDate">Date of Entry</label>
            <input type = "date" name = "journalDate" id = "journalDate">
        </fieldset>
        <fieldset>
            <label for="mood">How are you feeling, Joe?</label>
                <select name="moods" id="moods">
                    <option value="apatethic">Apathetic 😐</option>
                    <option value="sad">Sad 😞</option>
                    <option value="happy">Happy 😃</option>
                    <option value="angry">Angry 🤬</option>
                </select>
        </fieldset>
        <fieldset>
            <label for="concepts">Concepts covered</label>
                <input id="concepts" name="concepts"></textarea>
        </fieldset>
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
                <textarea id="journalEntry" name="journalEntry"></textarea>
        </fieldset>
        <button id="clickSave">Record Journal Entry</button>
    </form>
</div>`
}
