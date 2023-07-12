<!DOCTYPE html>
<html>
<head>
    <title>Line Chart Example</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <canvas id="myChart"></canvas>
    <script>
        // Sample data for the line chart
        var data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales',
                data: [500, 750, 900, 550, 800, 650],
                borderColor: 'blue',
                fill: false
            }]
        };

        // Chart configuration
        var config = {
            type: 'line',
            data: data,
            options: {}
        };

        // Create the line chart
        var myChart = new Chart(document.getElementById('myChart'), config);
    </script>
</body>
</html>
