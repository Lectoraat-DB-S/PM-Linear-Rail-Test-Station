# Lineaire Rail Meetopstelling README

## Beschrijving
Dit project faciliteert de meting van afstanden tussen gaten op lineaire rails via diverse technologieën zoals Arduino, PlatformIO, Python, en een Quasar webapplicatie. De opstelling gebruikt MQTT voor communicatie tussen de verschillende onderdelen en een visie systeem om de gaten te detecteren.

## Imports en Versies

### Software en Libraries
#### Algemeen
- **Operating System**: Ubuntu 23.04
- **Python**: Versie 3.8
  - `paho-mqtt==1.5.1`
  - `opencv-python==4.5.2`
- **Node.js**: Versie 14.17.0
- **Quasar CLI**: Versie 1.1.2
- **Halcon**: Versie 19.11 (voor het vision programma)

#### Arduino
- **Arduino IDE**: Versie 1.8.13
  - `AccelStepper`: Versie 1.64
  - `FreeRTOS`: Versie 11.1.0-0

#### PlatformIO
- **PlatformIO**: Core 5.2.0, Home 3.3.4
  - `AccelStepper`: Versie 1.64
  - `FreeRTOS`: Versie 11.1.0-0
  - `PubSubClient`: Versie 2.8.0
  - `Ethernet`: Versie 2.0.2

### Hardware
- Arduino Uno
- MQTT Broker (bijv. Mosquitto)

## Architectuur

### Bestandsstructuur
- **/Arduino code**: Bevat sketches voor de Arduino om sensoren en actuatoren te besturen.
- **/Platformio code**: Bevat geavanceerdere microcontroller code voor real-time operaties.
- **/Python/Mock MQTT**: Scripts voor het genereren van mock MQTT data.
- **/Quasar webapplicatie**: Front-end code voor het visualiseren van meetgegevens.
- **/Python/Halcon vision**: Toepassing voor het detecteren en meten van gaten.

### Communicatie
- MQTT wordt gebruikt voor communicatie tussen de webapplicatie en de hardware via de broker.

## Installatie en Hardware Setup

### Arduino
- **Hardware**: Arduino.
- **Software Installatie**:
  - Installeer de Arduino IDE.
  - Installeer de benodigde libraries
  - Open en upload de sketches uit de map `/Arduino` naar de Arduino.

### PlatformIO
- **Hardware**: Dezelfde of compatibele microcontroller als Arduino.
- **Software Installatie**:
  - Installeer PlatformIO in Visual Studio Code.
  - Installeer de benodigde libraries
  - Open de map `/PlatformIO` en upload de code naar de microcontroller.

### Python Mock MQTT
- **Software Installatie**:
  - Installeer Python 3.8.
  - Navigeer naar de map `/Python/Mock MQTT`.
  - Voer `pip install -r requirements.txt` uit om de nodige libraries te installeren.
  - Start de scripts om mock data te genereren voor MQTT communicatietests.

### Quasar Webapplicatie
- **Software Installatie**:
  - Installeer Node.js en Quasar CLI.
  - Navigeer naar de map van `/RailTestingDashboard`.
  - Voer `npm install` en daarna `quasar dev` uit om de app in ontwikkelmodus te draaien.

### Python Halcon Vision
- **Software Installatie**:
  - Zorg ervoor dat Halcon en Python geïnstalleerd zijn.
  - Navigeer naar de map `/RailMeasurement/HalconRailMeasurement`.
  - Voer `pip install -r requirements.txt` uit voor de benodigde Python libraries.

## Usage

Elk deel van het project heeft specifieke opstartinstructies afhankelijk van de betrokken hardware en software. Raadpleeg de specifieke README-bestanden in elke map voor gedetailleerde opstart- en gebruiksprocedures.

## Commenting

### Functie Beschrijving
- Elk script en elke functie binnen het project heeft commentaarregels die de werking en het doel ervan uitleggen.

### Bestand Beschrijving
- Elk bestand begint met een header commentaar dat de inhoud en de doeleinden van de daarin opgenomen functies beschrijft.

### Variabele Beschrijving
- Belangrijke variabelen zijn gedocumenteerd met commentaar om hun gebruik en relevantie uit te leggen.

Dit document is een gids voor het installeren, gebruiken en begrijpen van de software en hardware betrokken bij dit project. Voor meer informatie of technische ondersteuning, refereer naar de documentatie of open een issue op GitHub.
