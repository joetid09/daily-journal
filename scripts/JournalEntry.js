export const JournalEntryComponent = (statement) => {
    return `
        <section id="entry--${statement.id}" class="journalEntry">
            ${statement.entry}
            ${statement.date}
        </section>
    `

}

console.log("checking to see journalEntryComp")