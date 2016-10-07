# HTML-forms

Moduli vari per la mappatura di punti di interesse (PDI/POI) in Openstreetmap.

Compilato il form html, previo invio i js si occupano di controllare l'attivazione e l'errore del GPS nonchè formattare il commento per OSM notes. 

Il testo della nota generata è compatibile per un copincolla nell'editor minimale OSM denominato Level0 (verificare JOSM); il testo è inoltre preceduto da una stringa predefinita per poter individuare la nota OSM via API http://api.openstreetmap.org/api/0.6/notes/search?q=SearchTerm

Come avviene mappatura:

Sopralluogo su dispositivo mobile:
1) attivazione GPS
2) compilazione modulo e validazione coordinate geo 
3) invio
4) generazione nota OSM

Inserimeto in OSM:
5) ricerca nota
6) mappatura in Level0 od altro.


