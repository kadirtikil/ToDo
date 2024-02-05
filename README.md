## Todo

This is a Webapplication to get started in Fullstack Development.

Frameworks used:
- Angular
- Laravel
- MySQL (will be later replaced by AWS)


## Bestandteile des Projekts

### Frontend
1. Applikation hat ein Singlepage-Frontend.
2. Der Hintergrund wird in Angular gesetzt.
    - Merke: Styling folgt zum Schluss. Am Anfang sollen nur die Modal's funktionieren, in denen die Aufgaben erstellt werden. Später soll die Chatfunktion auch als Modal da sein.
3. Validators wurden implementiert. Es existieren eigentlich eigene API's für diese Zwecke aber Egalomat3000.
4. Die Anker werden angefertigt. (Forms für Anmeldung, Erstellung und Bearbeitung)
    - Im Anschluss folgt die Backend Logik für die API in Schritt 3 im Backend.

### Backend
1. Verbindung zu Datenbank herstellen in der .env.
2. Migrationen vorbereiten wie in dem [DB-Schema](#database) beschrieben.
    - php artisan make:migration create_users_table
    - php artisan make:migration create_tasks_table
    - php artisan migrate (DB finished)
3. API wird erstellt.

### Database
<img src="./doc_rsrcs/first_db_schema.png" alt="first db schema" width="900" height="600">

<h6>https://dbdiagram.io/</h6>

## Allgemeine Nutzung der Applikation 
Der Nutzer soll in der Lage sein, anstehende Aufgaben auf dieser Applikation zu dokumentieren.
Die Aufgaben bestehen aus:
- Dem User der diese erstellt hat.
- Dem Datum an dem es erstellt wurde.
- Dem Datum mit der letzten Änderung (evtl. werden alle Änderung gelogt und auf Anfrage zur Verfügung gestellt.).
- Einem Titel.
- Einer Beschreibung.
- Der ID des Nutzers.
- Andere an der Aufgabe beteildigten Personen (später mit RT Chat für Besprechungsmöglichkeiten).
- Einer Deadline mit Reminder für diese Aufgabe.
- Eine Kategorisierung dieser Aufgabe (mit Kategorien die by default da sind, und später eigene Kategorien, dessen Wichtigkeit mit einem Scoring System berechnet werden kann).

Desweiteren muss der User sich authentifizieren können. Und abhängig von den Aufgaben an denen andere User beteildigt sind, müssen diese autorisiert werden, um entsprechende Änderungen vornehmen zu können.

## Admin Board

## AWS

## Scoring System
