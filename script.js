const ctx = document.getElementById('nuclearChart').getContext('2d');

const data = {
    labels: ['1950', '1960', '1970', '1980', '1990'],
    datasets: [
        {
            label: 'EUA',
            data: [369, 18000, 26000, 24000, 22000],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            tension: 0.3,
            fill: true,
            hidden: false,
        },
        {
            label: 'URSS',
            data: [25, 1600, 11000, 40000, 33000],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            tension: 0.3,
            fill: true,
            hidden: false,
        }
    ]
};

const options = {
    responsive: true,
    animation: {
        duration: 1500,
        easing: 'easeOutQuart',
    },
    plugins: {
        title: {
            display: true,
            text: 'Comparativo do Arsenal Nuclear EUA vs URSS (1950–1990)',
            font: {
                size: 18,
                weight: '600'
            }
        },
        tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(0,0,0,0.7)',
            titleFont: { size: 14, weight: '600' },
            bodyFont: { size: 12 },
            padding: 8,
            cornerRadius: 6,
        },
        legend: {
            position: 'bottom',
            labels: {
                font: {
                    size: 14,
                    weight: '600'
                }
            }
        }
    },
    interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
    },
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Número de ogivas nucleares',
                font: {
                    size: 14,
                    weight: '600'
                }
            }
        },
        x: {
            title: {
                display: true,
                text: 'Ano',
                font: {
                    size: 14,
                    weight: '600'
                }
            }
        }
    }
};

const nuclearChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});

// Toggle buttons functionality
const toggleUSA = document.getElementById('toggleUSA');
const toggleUSSR = document.getElementById('toggleUSSR');

toggleUSA.addEventListener('click', () => {
    const usaDataset = nuclearChart.data.datasets[0];
    usaDataset.hidden = !usaDataset.hidden;
    nuclearChart.update();
    toggleUSA.classList.toggle('active');
    toggleUSA.textContent = usaDataset.hidden ? 'Mostrar EUA' : 'Esconder EUA';
});

toggleUSSR.addEventListener('click', () => {
    const ussrDataset = nuclearChart.data.datasets[1];
    ussrDataset.hidden = !ussrDataset.hidden;
    nuclearChart.update();
    toggleUSSR.classList.toggle('active');
    toggleUSSR.textContent = ussrDataset.hidden ? 'Mostrar URSS' : 'Esconder URSS';
});

// Scroll reveal animation for fade-in-up elements
function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in-up');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Curiosity buttons functionality
const curiosityButtons = document.querySelectorAll('.curiosity-btn');

curiosityButtons.forEach(button => {
    button.addEventListener('click', () => {
        const curiosityText = button.nextElementSibling;
        if (curiosityText.classList.contains('visible')) {
            curiosityText.classList.remove('visible');
            button.textContent = 'Clique para revelar uma curiosidade';
        } else {
            curiosityText.classList.add('visible');
            button.textContent = 'Esconder curiosidade';
        }
    });
});
