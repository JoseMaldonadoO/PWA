const areaProfesores = {
    TI: [
        { id: 1, nombre: 'Dr. Juan Pérez', materia: 'Programación', email: 'juan.perez@escuela.edu' },
        { id: 2, nombre: 'Ing. Ana Ruiz', materia: 'Bases de Datos', email: 'ana.ruiz@escuela.edu' },
    ],
    Contabilidad: [
        { id: 3, nombre: 'C.P. María García', materia: 'Contabilidad Básica', email: 'maria.garcia@escuela.edu' },
        { id: 4, nombre: 'C.P. Roberto Díaz', materia: 'Auditoría', email: 'roberto.diaz@escuela.edu' },
    ],
    Administracion: [
        { id: 5, nombre: 'Lic. Carlos López', materia: 'Administración', email: 'carlos.lopez@escuela.edu' },
        { id: 6, nombre: 'Dra. Laura Torres', materia: 'Recursos Humanos', email: 'laura.torres@escuela.edu' },
    ]
};

const horarioProfesores = {
    TI: [
        { hora: '08:00 - 09:30', materia: 'Programación', profesor: 'Dr. Juan Pérez', aula: '101' },
        { hora: '09:45 - 11:15', materia: 'Bases de Datos', profesor: 'Ing. Ana Ruiz', aula: '203' },
    ],
    Contabilidad: [
        { hora: '08:00 - 09:30', materia: 'Contabilidad Básica', profesor: 'C.P. María García', aula: '301' },
        { hora: '09:45 - 11:15', materia: 'Auditoría', profesor: 'C.P. Roberto Díaz', aula: '302' },
    ],
    Administracion: [
        { hora: '08:00 - 09:30', materia: 'Administración', profesor: 'Lic. Carlos López', aula: '401' },
        { hora: '09:45 - 11:15', materia: 'Recursos Humanos', profesor: 'Dra. Laura Torres', aula: '402' },
    ]
};

function mostrasProfesores() {
    const listaProfesores = document.getElementById('lista-profesores');
    const profesores = areaProfesores[AREA];
    listaProfesores.innerHTML = profesores.map(profesor => `
        <div class="teacher-card">
            <h3>${profesor.nombre}</h3>
            <p>Materia: ${profesor.materia}</p>
            <p>Email: ${profesor.email}</p>
        </div>
    `).join('');
}

function mostrarHorario() {
    const horarioPf = document.getElementById('horario');
    const horario = horarioProfesores[AREA];
    horarioPf.innerHTML = horario.map(item => `
        <div class="schedule-item">
            <div>${item.hora}</div>
            <div>
                <strong>${item.materia}</strong><br>
                ${item.profesor}
            </div>
            <div>Aula ${item.aula}</div>
        </div>
    `).join('');
}

mostrasProfesores();
mostrarHorario();

