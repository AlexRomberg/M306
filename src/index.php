<!DOCTYPE html>

<head>
    <!-- Settings -->
    <meta charset="UTF-8">
    <meta name="Website die die Kantonale Flächen des Thurgaus grafisch darstellt" content="">
    <meta name="keywords" content="">
    <meta name="Author" content="Mica, Alexander, Luca">
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
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/site.webmanifest">
    <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#ffc40d">
    <meta name="theme-color" content="#ffffff">

</head>

<body>
    <!-- Header -->
    <div class="header">
        <h1>Nutzungsflächer Thurgau</h1>
        <p>Logo</p>
    </div>

    <!-- Navigation Bar -->
    <div class="navbar">
        <a href="#">Map</a>


    </div>

    <!-- The flexible grid (content) -->
    <div class="row">
        <div class="side">
            <h2>Map</h2>
            <div class="map" style="height:200px;">
              <div id="map" style="width: 600px; height: 400px;"></div>
            </div>
            <p>Lorem ipsum dolor sit ame.</p>

        </div>
        <div class="main">
            <h2>Filter</h2>
            <div class="fakeimg" style="height:200px;">Filter</div>
            <br>
            <h2>Legend</h2>
            <div class="fakeimg" style="height:200px;">Legend</div>
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
        <h2>Footer</h2>
    </div>

    <!-- Script -->
    <script src="js/index.js"></script>

</body>