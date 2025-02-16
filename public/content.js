function addContent() {
    const rows = ['יום הולדת', 'שמח', 'ליאור',];

    for (let i = 0; i < rows.length; i++) {
        const rowLetters = rows[i];
        const div = document.getElementById(`row-${i + 1}`);
        div.innerHTML = [...rowLetters].map((letter, index) => {
            if (letter === ' ') {
                return `<span style="white-space: pre"> </span>`
            }
            return   `<span id="letter-${index +
            1}">${letter}</span>`
        }
          ).join('');

    }


}

addContent();
