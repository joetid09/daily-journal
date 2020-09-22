let mood = []

export const useMoods = () => {
    return mood.slice()
}

export const getMoods = () => {
    return fetch("http://localhost:8088/moods")
        .then(response => response.json())
        .then(parsedEntries => { mood = parsedEntries })
}