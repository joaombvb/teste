document.addEventListener('DOMContentLoaded', () => {
    const employeeData = [];
    const ticketData = [];

    // Lista de nomes fictícios para funcionários
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

    // Função para gerar um protocolo aleatório
    function generateProtocol() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        let protocol = '';
        
        for (let i = 0; i < 3; i++) {
            protocol += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        for (let i = 0; i < 6; i++) {
            protocol += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }

        return protocol;
    }

    // Gerar dados fictícios para funcionários
    names.forEach(name => {
        employeeData.push({
            name: name,
            seniority: ['Senior', 'Pleno', 'Junior'][Math.floor(Math.random() * 3)],
            availability: ['Ausente', 'Em atendimento', 'Disponível'][Math.floor(Math.random() * 3)]
        });
    });

    // Gerar dados fictícios para chamados
    for (let i = 1; i <= 50; i++) {
        ticketData.push({
            protocol: generateProtocol(),
            orderOfOpening: `${i}º`,
            seniority: ['Senior', 'Pleno', 'Junior'][Math.floor(Math.random() * 3)],
            status: ['Aberto', 'Em Andamento', 'Concluído'][Math.floor(Math.random() * 3)]
        });
    }

    // Inserir dados na tabela de funcionários
    const employeeTableBody = document.querySelector('#employees tbody');
    employeeData.forEach(emp => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${emp.name}</td>
            <td class="seniority-${emp.seniority.toLowerCase()}">${emp.seniority}</td>
            <td class="availability-${emp.availability.toLowerCase().replace(' ', '-')}" >${emp.availability}</td>
        `;
        employeeTableBody.appendChild(row);
    });

    // Inserir dados na tabela de chamados
    const ticketTableBody = document.querySelector('#tickets tbody');
    ticketData.forEach(ticket => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ticket.protocol}</td>
            <td>${ticket.orderOfOpening}</td>
            <td class="seniority-${ticket.seniority.toLowerCase()}">${ticket.seniority}</td>
            <td class="status-${ticket.status.toLowerCase().replace(' ', '-')}" >${ticket.status}</td>
        `;
        ticketTableBody.appendChild(row);
    });
});

//Segunda seção 

document.addEventListener('DOMContentLoaded', () => {
    // Dados fictícios para o gráfico de utilização de funcionários
    const employeeData = {
        labels: ['Junior', 'Pleno', 'Senior'],
        datasets: [{
            label: 'Funcionários por Senioridade',
            data: [20, 15, 15], // Total de 50 funcionários
            backgroundColor: [
                'rgba(25, 142, 123, 0.2)', // Junior
                'rgba(15, 98, 255, 0.2)',   // Pleno
                'rgba(117, 66, 254, 0.2)'    // Senior
            ],
            borderColor: [
                'rgba(25, 142, 123, 1)',    // Junior
                'rgba(15, 98, 255, 1)',     // Pleno
                'rgba(117, 66, 254, 1)'     // Senior
            ],
            borderWidth: 1
        }]
    };

    // Dados fictícios para o gráfico de disponibilidade de funcionários
    const availabilityData = {
        labels: ['Disponível', 'Em Atendimento', 'Ausente'],
        datasets: [{
            label: 'Disponibilidade dos Funcionários',
            data: [30, 10, 10], // Total de 50 funcionários
            backgroundColor: [
                'rgba(137, 226, 59, 0.2)', // Disponível
                'rgba(253, 204, 0, 0.2)',   // Em Atendimento
                'rgba(247, 82, 1, 0.2)'      // Ausente
            ],
            borderColor: [
                'rgba(137, 226, 59, 1)',    // Disponível
                'rgba(253, 204, 0, 1)',     // Em Atendimento
                'rgba(247, 82, 1, 1)'       // Ausente
            ],
            borderWidth: 1
        }]
    };

    // Dados fictícios para o gráfico de chamados
    const ticketData = {
        labels: ['Junior', 'Pleno', 'Senior'],
        datasets: [{
            label: 'Chamados Abertos por Senioridade',
            data: [10, 15, 25], // Total de 50 chamados
            backgroundColor: [
                'rgba(25, 142, 123, 0.2)', // Junior
                'rgba(15, 98, 255, 0.2)',   // Pleno
                'rgba(117, 66, 254, 0.2)'    // Senior
            ],
            borderColor: [
                'rgba(25, 142, 123, 1)',    // Junior
                'rgba(15, 98, 255, 1)',     // Pleno
                'rgba(117, 66, 254, 1)'     // Senior
            ],
            borderWidth: 1
        }]
    };

    // Dados fictícios para o gráfico de status dos chamados
    const statusData = {
        labels: ['Aberto', 'Em Andamento', 'Concluído'],
        datasets: [{
            label: 'Status dos Chamados',
            data: [15, 20, 15], // Total de 50 chamados
            backgroundColor: [
                'rgba(247, 82, 1, 0.2)', // Aberto
                'rgba(253, 204, 0, 0.2)', // Em Andamento
                'rgba(137, 226, 59, 0.2)'  // Concluído
            ],
            borderColor: [
                'rgba(247, 82, 1, 1)',    // Aberto
                'rgba(253, 204, 0, 1)',   // Em Andamento
                'rgba(137, 226, 59, 1)'   // Concluído
            ],
            borderWidth: 1
        }]
    };

    // Configuração e criação do gráfico de utilização de funcionários
    const ctx1 = document.getElementById('employeeUsageChart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: employeeData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Configuração e criação do gráfico de disponibilidade de funcionários
    const ctx2 = document.getElementById('employeeAvailabilityChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: availabilityData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Configuração e criação do gráfico de chamados
    const ctx3 = document.getElementById('ticketStatusChart').getContext('2d');
    new Chart(ctx3, {
        type: 'bar',
        data: ticketData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Configuração e criação do gráfico de status dos chamados
    const ctx4 = document.getElementById('ticketStatusBreakdownChart').getContext('2d');
    new Chart(ctx4, {
        type: 'bar',
        data: statusData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
