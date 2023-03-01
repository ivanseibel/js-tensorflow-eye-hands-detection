- index.js: responsible for calling all layers.

services
  - all business logic goes here
  - all external calls (APIs, files, databases, etc) goes here

views
  - all interaction with the DOM goes here

controllers
  - all interactions between services/workers and views goes here

factories
  - imports dependencies
  - create instances of classes
  - returns the function that initializes the component flow (init)

workers
  - it is for background tasks
  - all the logic that runs in a separate thread goes here (loops, calculations, etc)
  - calls business logic from services (if needed)