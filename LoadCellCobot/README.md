# ESP8266 MQTT-gestuurd Loadcell- en Relaisbesturingssysteem

Deze code stelt een ESP8266 in staat om te communiceren met een HX711-loadcellversterker, vier relais en drie optocoupler-ingangen, allemaal bestuurd via MQTT. Het systeem faciliteert de kalibratie van de loadcell, gewichtsmetingen, relaisbediening, en publiceert de status van optocoupler-ingangen. Hieronder volgt een overzicht van de belangrijkste functionaliteiten.

## Functionaliteiten

1. **WiFi-verbinding**:
   - Verbindt met een opgegeven WiFi-netwerk met vooraf ingestelde SSID en wachtwoord.

2. **MQTT-instellingen**:
   - Verbindt met een MQTT-broker en abonneert zich op topics voor kalibratie, metingen, relaisbesturing en optocoupler-feedback.

3. **Loadcellkalibratie en metingen**:
   - Geleidelijke kalibratie via MQTT-commando's.
   - Mogelijkheid om een kalibratiefactor in te stellen, de weegschaal te tarreren en het gewicht te meten, dat vervolgens op MQTT wordt gepubliceerd.
   - Ondersteuning voor een meerstaps kalibratie:
     - Stap 1: Tarren zonder gewicht op de weegschaal.
     - Stap 2: Kalibratiefactor instellen.
     - Stap 3: Metingen uitvoeren.

4. **Relaisbediening**:
   - Vier relais die via MQTT-topics worden bediend.
   - Relais worden in- of uitgeschakeld op basis van inkomende MQTT-berichten.

5. **Optocoupler-invoerbewaking**:
   - Bewaakt drie optocoupler-ingangen en publiceert hun status op MQTT.
   - Activeert specifieke MQTT-berichten wanneer statusveranderingen worden gedetecteerd.

## MQTT Topics

- **Kalibratiecommando’s**:  
  - `RTS/loadcell/calibration`: Start het kalibratieproces.
  - `RTS/loadcell/calibration/factor`: Ontvangt kalibratiefactor om de gevoeligheid van de weegschaal aan te passen.
  
- **Meetcommando's**:
  - `RTS/loadcell/measurement`: Start een gewichtsmeting als de weegschaal gekalibreerd is.
  - `RTS/loadcell/result`: Publiceert het gemeten gewicht.

- **Relaisbediening**:
  - `RTS/cobot/enabled`, `RTS/cobot/move`, `RTS/relay/input3`, `RTS/relay/input4`: Bestuur respectievelijk relais 1-4 door ze HIGH of LOW te zetten.

- **Optocoupler-invoerstaten**:
  - `RTS/vision/picture`: Publiceert "Neem een foto!" wanneer optocoupler 2 wordt geactiveerd.
  - `RTS/optocoupler/input3`: Publiceert de HIGH/LOW status van optocoupler 3.

## Gebruik

1. **Setup**:
   - Verbind de ESP8266 met WiFi.
   - Verbind met de MQTT-broker en initialiseer de pinnen voor de HX711, relais en optocouplers.

2. **Kalibratie en Meting**:
   - Start kalibratie door naar `RTS/loadcell/calibration` te publiceren.
   - Stel de kalibratiefactor in via `RTS/loadcell/calibration/factor` om de weegschaal aan te passen.
   - Publiceer naar `RTS/loadcell/measurement` om het gewicht te meten.

3. **Relaisbediening**:
   - Gebruik MQTT-topics om relais in- of uit te schakelen door "true" (AAN) of "false" (UIT) te publiceren.

4. **Optocoupler-bewaking**:
   - Optocouplerstatusveranderingen sturen automatisch bijbehorende MQTT-berichten.

## Code Structuur

- `setup_wifi()`: Beheert WiFi-verbinding.
- `startCalibration()`: Begeleidt door kalibratiestappen.
- `callback()`: Verwerkt binnenkomende MQTT-berichten en voert de juiste acties uit.
- `reconnect()`: Verbindt opnieuw met de MQTT-broker als de verbinding is verbroken.
- `setup()`: Configureert WiFi, MQTT, HX711, relais en optocoupler-pinnen.
- `loop()`: Controleert MQTT-berichten en optocoupler-statussen en publiceert indien nodig updates.

## Afhankelijkheden

- **ESP8266WiFi.h**: WiFi-functionaliteit voor ESP8266.
- **PubSubClient.h**: MQTT-clientbibliotheek.
- **HX711.h**: Bibliotheek voor de HX711 loadcellversterker.

## Hardware Installatie

- Verbind de ESP8266 met de HX711 loadcellmodule, de vier relais en de drie optocoupler-ingangen:
  - **HX711**: DOUT naar D1, SCK naar D0.
  - **Relais**: Verbind relais aan D2, D3, D4 en D5.
  - **Optocouplers**: Verbind optocoupler-ingangen aan D6, D7 en D8.
- Sluit de voeding aan voor de ESP8266 en de aangesloten modules.

## Software Installatie

- Installeer de Arduino IDE en voeg ondersteuning toe voor de ESP8266 (te vinden onder `Bestand > Voorkeuren > Instellingen voor Bestuurbare Boards`).
- Voeg de volgende bibliotheken toe via `Sketch > Include Library > Manage Libraries...`:
  - `ESP8266WiFi`
  - `PubSubClient`
  - `HX711`
- Kopieer de code naar een nieuw Arduino-bestand, voer de WiFi- en MQTT-configuratiegegevens in en upload de code naar de ESP8266.

Na configuratie kunnen de MQTT-onderwerpen worden gebruikt voor het testen van de communicatie met de ESP8266 en voor verdere ontwikkeling van het systeem.
