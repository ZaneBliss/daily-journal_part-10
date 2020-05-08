import component from "./entryComponent.js"

const entries = {
    renderJournalEntries: (entries) => {
        let journalElement = document.querySelector(".entryLog");
        for (let index = 0; index < entries.length; index++) {
            journalElement.innerHTML += component.makeJournalEntryComponent(entries[index]);
        }
    }
}

export default entries