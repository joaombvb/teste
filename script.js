document.addEventListener('DOMContentLoaded', () => {
    // Gerar Dados Fictícios
    const employeeData = generateEmployeeData();
    const ticketData = generateTicketData();

    // Inserir Dados nas Tabelas
    populateTable('#employees tbody', employeeData, createEmployeeRow);
    populateTable('#tickets tbody', ticketData, createTicketRow);

    // Configurar e Criar Gráficos
    createChart('employeeUsageChart', generateChartData(['Junior', 'Pleno', 'Sênior'], [20, 15, 15], 'Consultores disponíveis'));
    createChart('employeeAvailabilityChart', generateChartData(['Disponível', 'Em Atendimento', 'Ausente'], [30, 10, 10], 'Status dos consultores'));
    createChart('ticketStatusChart', generateChartData(['Junior', 'Pleno', 'Sênior'], [10, 15, 25], 'Chamados abertos'));
   createChart('ticketStatusBreakdownChart', generateChartData(['Aberto', 'Em Andamento',  'Concluído'], [15, 20, 15], 'Status dos Chamados'));
   createChart('employeeUsageForecastChart', generateChartData(['Júnior', 'Pleno', 'Sênior'], [8, 19, 23], 'Previsão de alocação de consultores'));
});

// Função para gerar dados de funcionários
function generateEmployeeData() {
    const names = [
        'Maria Meireles', 'Bruno Oliveira', 'Clara Souza', 'Daniel Santos', 'Elisa Silva',
        'Felipe Lima', 'Gabriela Martins', 'Henrique Almeida', 'Isabella Pereira', 'João Fernandes',
        'Karla Ribeiro', 'Lucas Rocha', 'Maria Ferreira', 'Nuno Pinto', 'Olivia Azevedo',
        'Paulo Carvalho', 'Quésia Dias', 'Rafael Mendes', 'Sabrina Campos', 'Tiago Vieira',
        'Úrsula Barreto', 'Victor Castro', 'Wanda Duarte', 'Xavier Lopes', 'Yara Almeida',
        'Zeca Faria', 'Amanda Lima', 'Bruno Costa', 'Camila Santos', 'Diego Martins',
        'Eva Ribeiro', 'Felipe Almeida', 'Giovanna Silva', 'Hugo Costa', 'Ingrid Souza',
        'Jorge Lima', 'Karen Pereira', 'Leonardo Oliveira', 'Mariana Santos', 'Nathalia Costa',
        'Otávio Silva', 'Patrícia Rocha', 'Quinton Freitas', 'Raquel Dias', 'Samuel Fernandes',
        'Tânia Almeida', 'Ulisses Rocha', 'Vanessa Ferreira', 'Wagner Castro', 'Ximena Pinto'
    ];

    return names.map(name => ({
        name: name,
        seniority: getRandomElement(['Senior', 'Pleno', 'Junior']),
        availability: getRandomElement(['Ausente', 'Em atendimento', 'Disponível']),
    }));
}

// Função para gerar dados de chamados
function generateTicketData() {
    const tickets = [];
    for (let i = 1; i <= 50; i++) {
        tickets.push({
            protocol: generateProtocol(),
            orderOfOpening: `${i}º`,
            seniority: getRandomElement(['Senior', 'Pleno', 'Junior']),
            status: getRandomElement(['Aberto', 'Em Andamento', 'Concluído']),
        });
    }
    return tickets;
}

// Função para inserir dados na tabela
function populateTable(selector, data, rowFunction) {
    const tableBody = document.querySelector(selector);
    data.forEach(item => {
        const row = rowFunction(item);
        tableBody.appendChild(row);
    });
}

// Funções para criar linhas de tabela
function createEmployeeRow(employee) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${employee.name}</td>
        <td class="seniority-${employee.seniority.toLowerCase()}">${employee.seniority}</td>
        <td class="availability-${employee.availability.toLowerCase().replace(' ', '-')}" >${employee.availability}</td>
    `;
    return row;
}

function createTicketRow(ticket) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${ticket.protocol}</td>
        <td>${ticket.orderOfOpening}</td>
        <td class="seniority-${ticket.seniority.toLowerCase()}">${ticket.seniority}</td>
        <td class="status-${ticket.status.toLowerCase().replace(' ', '-')}" >${ticket.status}</td>
    `;
    return row;
}

// Funções auxiliares
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateProtocol() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let protocol = '';
    for (let i = 0; i < 3; i++) protocol += letters.charAt(Math.floor(Math.random() * letters.length));
    for (let i = 0; i < 6; i++) protocol += numbers.charAt(Math.floor(Math.random() * numbers.length));
    return protocol;
}

// Função para gerar dados de gráfico
function generateChartData(labels, data, label) {
    return {
        labels: labels,
        datasets: [{
            label: label,
            data: data,
            backgroundColor: generateColors(data.length, 0.2),
            borderColor: generateColors(data.length, 1),
            borderWidth: 1
        }]
    };
}

// Função para gerar cores de gráficos
function generateColors(count, opacity) {
    const baseColors = [
        'rgba(25, 142, 123, OPACITY)', // Cor 1
        'rgba(15, 98, 255, OPACITY)',   // Cor 2
        'rgba(117, 66, 254, OPACITY)'   // Cor 3
    ];
    return baseColors.slice(0, count).map(color => color.replace('OPACITY', opacity));
}

// Função para criar gráfico
function createChart(chartId, data) {
    const ctx = document.getElementById(chartId).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
