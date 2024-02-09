## Todo

This is a Webapplication to get started in Fullstack Development.

Frameworks used:
- Angular
- Laravel (will be later placed together with the DB in AWS)
- MySQL 

Tools used:
- dbdiagram.io
- Postman


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

## Notizen 
- musste "\Illuminate\Session\Middleware\StartSession::class," in die Kernel.php einfügen, weil man sonst nicht auf die Nutzer zugreifen konnte, weil keine Session für diesen gestartet wurde. Durch die Nutzung von StartSession wird nun bei jedem Request eine Session gestartet, welches in dieser Anwendung essentiell ist, weil ohne eine Anmeldung - und somit Session - die Nutzung sowieso nicht möglich ist/sein soll.

- httpClient funktioniert seit v14 in Angular nicht mehr für Standalone-Applikationen. (Hier)[https://blog.ninja-squad.com/2022/11/09/angular-http-in-standalone-applications/] der neue weg dazu. Besser ist es, den provideHttpClient() bei app.config.ts einzufügen, weil dieser dann mit appConfig inkludiert wird in der main.ts.

- Füge withFetch() hinzu um httpclient mit fetch apis zu konfigurieren. Dadurch geschieht das Rendering auf der Server-Seite und sorgt somit für bessere Performance.
