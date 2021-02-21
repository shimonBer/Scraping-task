# Scraping System

The project is a server that parse a given site, save its HTML in a DB, and do it recursively to all the links inside.

## Getting Started

By running the script:

```
npm run start
```

The server will be up and running, waiting for your requests

## Installing

Please run:

```
npm install
```

Make sure to have the following ENV variables:
PORT - for specifing the app port
REDIS_HOST - The hostname of the redis server
REDIS_PORT - The port of the redis server

## Implementation details

### DB

I chose to work with redis server. I wanted to save key-value data with unique keys, so that urls will not appear twice in our db.
If I had some more time, I would have try to make it more efficient by creating a set of all the data and only then push it to the redis server. I looked for this solution but coludn't find it on time

### Scraping the data

I chose to implement it as a recursion with a parameter 'depth' the indicates the depth of the process of taking the urls successorrs inside a given url. This was done only for the purpose of testing over machine with hardware limitations.
If i see url that is already inside the db, I don't continue with that branch because I must have already takend all of his successors earlier (true for the non-depth limitation)
