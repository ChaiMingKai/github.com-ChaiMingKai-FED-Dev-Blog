
function showWeek(week) {
    document.getElementById('week1Content').classList.add('hidden');
    document.getElementById('week2Content').classList.add('hidden');
    document.getElementById('week3Content').classList.add('hidden');
    document.getElementById('week4Content').classList.add('hidden');
    document.getElementById('week5Content').classList.add('hidden');
    document.getElementById('week6Content').classList.add('hidden');
    document.getElementById('week7Content').classList.add('hidden');
    document.getElementById('week8Content').classList.add('hidden');
    document.getElementById('week9Content').classList.add('hidden');
    document.getElementById('week12Content').classList.add('hidden');
    document.getElementById(week + 'Content').classList.remove('hidden');
}
