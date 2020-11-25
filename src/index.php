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
    <header>
        <img src="res/Logo.svg">
        <h1>Nutzungsflächen Thurgau</h1>
    </header>

    <!-- Navigation Bar -->
    <nav>
        <a href="#">Map</a>
    </nav>

    <!-- The flexible grid (content) -->
    <main>
        <div class="main">
            <h2>Map</h2>
            <div id="map"></div>
            <h2>
                Information
            </h2>
            <p>
                Diese Karte zeigt an welche gebiete im Thurgau Nutzflächen sind und welchen Projekt sie erfüllen.
                Dieses Projekt ist im Rahmen eines Auftrages in der Informatikmittelschule Frauenfeld, entstanden.
            </p>
            <p>
                Sie Können sich mithilfe der Maus auf der Karte bewegen, die Ihnen die Nutzungsflächen Anzeigen.
                Möchten sie gewisse Flächen ein/aus Blenden, können sie dies mithilfe der Legende auf der rechten seite der Website tun.
            </p>

        </div>
        <div class="side">
            <h2>Legend</h2>
            <div class="box">
                <div class="singleLayer">
                    <div>
                        <input type="checkbox" class="cbLegend" layer="3" checked>
                        <h2>Nutzungsflächen (Hauptkategorien)</h2>
                    </div>
                    <img src="https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?request=GetLegendGraphic&layer=nutzungsflaechen_hauptkulturen&style=default&service=WMS&version=1.3.0&format=image%2Fpng&sld_version=1.1.0&lang=de" alt="legend not available :(">
                </div>
                <div class="singleLayer">
                    <div>
                        <input type="checkbox" class="cbLegend" layer="2" checked>
                        <h2>Nutzungsflächen (Hauptkategorien Textur)</h2>
                    </div>
                    <img src="https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?request=GetLegendGraphic&layer=nutzungsflaechen_hauptkulturen_textur&style=default&service=WMS&version=1.3.0&format=image%2Fpng&sld_version=1.1.0&lang=de" alt="legend not available :(">
                </div>
                <div class="singleLayer">
                    <div>
                        <input type="checkbox" class="cbLegend" layer="1" checked>
                        <h2>Nutzungsflächen (BFF QI Fläche TG)</h2>
                    </div>
                    <img src="https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?request=GetLegendGraphic&layer=nutzungsflaechen_flaechen_tg&style=default&service=WMS&version=1.3.0&format=image%2Fpng&sld_version=1.1.0&lang=de" alt="legend not available :(">
                </div>
                <div class="singleLayer">
                    <div>
                        <input type="checkbox" class="cbLegend" layer="0" checked>
                        <h2>Nutzungsflächen</h2>
                    </div>
                    <img src="https://ows.geo.tg.ch/geofy_access_proxy/landwirtschaft_kulturflaechen?request=GetLegendGraphic&layer=nutzungsflaechen_&style=default&service=WMS&version=1.3.0&format=image%2Fpng&sld_version=1.1.0&lang=de" alt="legend not available :(">
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <div class="footer">
        <h2><a href="mailto:luca.hanimann@stud.kftg.ch">Kontakt</a></h2>
    </div>

    <!-- Script -->
    <script src="js/index.js"></script>

</body>