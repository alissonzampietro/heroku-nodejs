# Working out Node, React and some other stuff

## Passport approach

For the authentication, it's been using the Google Auth Strategy with the cookie-session library.


## Cookie-Session vs Express-Session

The difference between the both libraries is in the way that they store the data. While Cookie-Session stores the information itself, Express-Session needs the helper of some database, as it creates an ID and after you get the information associated with the ID in the database.