function calculateCycle() {
    const lastPeriod= new Date(document.getElementById("lastPeriod").value);
    const cycleLength = parseInt(document.getElementById("cycleLength").value);
    const disclaimer = document.getElementById("disclaimer");
    const phaseResult = document.getElementById("phaseResult");

    const today = new Date();

    disclaimer.style.display = "none";
    disclaimer.innerText = "";
    phaseResult.innerText = "";

    if (Number.isNaN(lastPeriod.getTime())) {
    disclaimer.style.display = "block";
    disclaimer.innerText = "Please enter the start date of your last period before calculating.";
    return;
  }
    
    const diffDays = Math.floor((today - lastPeriod) / (1000*60*60*24));
    const dayInCycle = diffDays % cycleLength;

    let phase = "";
    if (dayInCycle <= 5) phase = "Menstrual Phase (Days 1–5)";
    else if (dayInCycle <= 13) phase = "Follicular Phase (Days 6–13)";
    else if (dayInCycle <= 16) phase = "Ovulation Phase (Days 14–16)";
    else phase = "Luteal Phase (Days 17–" + cycleLength + ")";

    document.getElementById("phaseResult").innerText = 
        "Probably you are currently in: " + phase;

    generateCalendar(lastPeriod, cycleLength);

    document.getElementById("nb").style.display = "block";
    document.getElementById("nb").innerText = 
    "Every person is different: the result shown here is only an estimate and may not reflect your exact cycle. We recommend tracking your cycle regularly to better understand your phases.";

}

function generateCalendar(lastPeriod, cycleLength) {
  const calendarDiv = document.getElementById("calendar");
  calendarDiv.innerHTML = "";

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let table = "<table><tr>";
  const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  daysOfWeek.forEach(d => { table += "<th>" + d + "</th>"; });
  table += "</tr><tr>";

  for (let i=0; i<firstDay; i++) { table += "<td></td>"; }

  for (let day=1; day<=daysInMonth; day++) {
    const currentDate = new Date(year, month, day);
    const diffDays = Math.floor((currentDate - lastPeriod) / (1000*60*60*24));
    const dayInCycle = (diffDays >= 0) ? diffDays % cycleLength : null;

    let cssClass = "";
    if (dayInCycle !== null) {
      if (dayInCycle <= 5) cssClass = "mestruale";
      else if (dayInCycle <= 13) cssClass = "follicolare";
      else if (dayInCycle <= 16) cssClass = "ovulazione";
      else cssClass = "luteale";
    }

    table += `<td class="${cssClass}">${day}</td>`;

    if ((day + firstDay) % 7 === 0) table += "</tr><tr>";
  }

  table += "</tr></table>";
  calendarDiv.innerHTML = table;
}