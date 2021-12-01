# Angular13-Workshop

This is the sample project for the Angular 13 Fundamentals Workshop.

This sample project includes an Angular web application generated with Angular CLI version 13.0.3. It also contains a mock RESTful API using json-server.

Run : npm start 

The npm start calls the serve:all command which is a convenience method that runs the serve:api and serve:web commands concurrently. You can run each command separately if you need to.

"start": "npm run serve:all",
"serve:web": "ng serve --port 4300 --open",
"serve:api": "json-server server/db.json",
"serve:all": "concurrently \"npm run serve:api\" \"npm run serve:web\"",
