function addStudent() {

    const name = document.getElementById('sName').value.trim();

    const marks = parseInt(
        document.getElementById('sMarks').value
    );

    if (!name || isNaN(marks) || marks < 0 || marks > 100) {

        alert('Enter valid name and marks (0-100)');

        return;
    }

    const status = marks >= 40 ? 'pass' : 'fail';

    const tr = document.createElement('tr');

    tr.className = status;

    tr.innerHTML = `
        <td>${name}</td>
        <td>${marks}</td>
        <td class="${status}">${status.toUpperCase()}</td>
    `;

    document.getElementById('sBody').appendChild(tr);

    document.getElementById('sName').value = '';

    document.getElementById('sMarks').value = '';
}


function filterStudents(val) {

    document.querySelectorAll('#sBody tr').forEach(r => {

        r.style.display =
            (val === 'all' || r.classList.contains(val))
                ? ''
                : 'none';

    });
}