/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {id: 2,
        date: "08/10/2025",
        concept: "Going over how the bootcamp works",
        entry: "We discussed how the next 3 months are going to go",
        mood: "Happy"},
    {id: 2,
        date: "08/20/2025",
        concept: "Javscript",
        entry: "We have started going over JS scripting and putting data into the website",
        mood: "Happy"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}