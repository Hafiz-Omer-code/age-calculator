const userInput = document.getElementById("date");
const result = document.getElementById("result");

userInput.max = new Date().toISOString().split("T")[0];

function CalculateAge() {
    const birthDate = new Date(userInput.value);

    if (!userInput.value || birthDate > new Date()) {
        result.innerHTML = `<span>Please enter a valid birth date.</span>`;
        return;
    }

    const today = new Date();

    const d1 = birthDate.getDate();
    const m1 = birthDate.getMonth() + 1; 
    const y1 = birthDate.getFullYear();

    const d2 = today.getDate();
    const m2 = today.getMonth() + 1;
    const y2 = today.getFullYear();

    let y3 = y2 - y1;
    let m3 = m2 - m1;
    let d3 = d2 - d1;

    if (m3 < 0) {
        y3--;
        m3 += 12;
    }

    if (d3 < 0) {
        m3--;
        d3 += getDaysInMonth(m1 - 1, y1);  // Adjust previous month's days
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
}

function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}
