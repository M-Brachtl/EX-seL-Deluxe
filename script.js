const people = document.querySelectorAll('tbody tr');

function evaluatePoints(points) {
    people.forEach(person => {
        const points = Array.from(person.querySelectorAll('.points-input')).map(pnt => pnt.value);
        const total = points.reduce((acc,val) => acc + (isNaN(parseInt(val)) ? 0 : parseInt(val)),0);
        //const total = points.reduce((acc, val) => acc + val);
        person.querySelector('.result').textContent = total
    });
}

document.querySelectorAll('.points-input').forEach(input => {
    input.addEventListener('input', evaluatePoints);
});