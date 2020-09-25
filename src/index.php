<!DOCTYPE html>

<head>
    <!-- Settings -->
    <meta charset="UTF-8">
    <meta name="Website die die Kantonale Flächen des Thurgaus grafisch darstellt" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nutzungsfläche Thurgau</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

    <!-- Stylesheets -->
    <link rel="stylesheet" type="text/css" href="css/general.css">
    <link rel="stylesheet" type="text/css" href="css/<?php echo (basename($_SERVER['SCRIPT_NAME'], ".php")) ?>.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />

    <!-- libraries -->
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>

    <!-- Favicons -->
</head>

<body>
    <header></header>
    <nav></nav>
    <main>
        <div id="map" style="width: 600px; height: 400px;"></div>
    </main>
    <footer></footer>

    <!-- Script -->
    <script src="js/index.js"></script>

</body>