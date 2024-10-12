
    const ctx = document.getElementById('chart1').getContext('2d');

    // Create the chart
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [{
                
                data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 2,
                borderCapStyle: 'round',
                borderJoinStyle: 'round',
                pointBackgroundColor: 'rgba(0, 123, 255, 1)',
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(0, 123, 255, 0.1)'
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
              display: false
          },
            scales: {
                y: {
                    beginAtZero: false,
                    suggestedMin: 60,
                    suggestedMax: 130
                }
            },
            plugins: {
                // Custom plugin to add text
                title: {
                    display: true,
                    text: 'Total Shipments',
                    color: '#AAB3C5',
                    font: {
                        size: 16
                    },
                    padding:0
                }
            }
        },
        plugins: [{
            id: 'customText',
            beforeDraw: function(chart) {
                const ctx = chart.ctx;

                // Add "Performance" text
                ctx.save();
                ctx.fillStyle = "#FFFFFF"; // white color for the main text
                ctx.font = " 36px san-serif"; // bold, larger font
                ctx.fillText("Performance", 50,40); // position it below Total Shipments
                ctx.restore();
            },
            
        }],
        
    }
  );

