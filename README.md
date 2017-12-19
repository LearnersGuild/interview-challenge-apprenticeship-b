# IceCreamery

A community for ice-cream lovers to rate their favourite flavors.

Part of the application has already been built for you. Your job is to take it to completion.

## Getting Started

The app uses a simple file structure for an Express web app server that renders views using EJS templates.

```sh
public/               # static assets
src/
  actions/            # async server actions (e.g. data CRUD)
  data/               # db schema & seed data
  db/                 # database client & utils
  routes/             # express routes
  views/              # html templates
test/                 # test files for the source files
```

### Setting up your config

Run the command in the terminal so that the config loads correctly
`$ cp .env.template .env`

### Installing your dependencies

Run the following command in the terminal:
`$ npm install`

### Setting Up The Remote Database

Use the following commands to set up and seed your database:

1. Set up database tables from `schema.sql`: `$ npm run db:schema`
1. Load seed data from `flavors.sql`: `$ npm run db:seed`

Note: These commands will only work if you have your `.env` file correctly setup.

### Starting your development server

Run the following command in the terminal:
`$ npm start`


### Accessing the Database

A database connection string has been set in the `.env` file at the top level of this repository. You can use this to connect to the database using any client you wish.

If you would like to use [Postico](https://eggerapps.at/postico) to access the database you can simply use the `.pgfav` file in the interview root directory to automatically add the database connection configuration. Use the following command:

```sh
open IceCreamery.pgfav
```


# Coding Challenge

During the interview you will have 75 minutes to complete all the specs of the challenge.

You'll be allowed to ask your interviewer clarifying questions and can use the internet to search for information as needed.

Each requirement is assigned a point value. A fully complete requirement will earn you full points; partially complete requirements get partial points; incomplete requirements get no points. Overall completeness is determined by dividing the total points earned by the total points available. There is a requirement of completion of 80% of the specs to secure a passing result.

# Existing functionality

- Navigating to `/sign-up`, loads the sign up page.
- Navigating to `/sign-in`, loads the sign in page.
- A user with a username `a`, and password `a` exists in the database for easy sign in.
- Navigating to `/flavors`, loads the index page for all flavors
- Navigating to `/flavors/<FLAVOR ID>`, loads the detail page for a flavor.
- The `user` object is available to you in the request via `request.user`.
- `public/script.js` is the file which contains client side JavaScript.

# Specs

## Create flavor reviews

Routes:
- [ ] __20:__ Navigating to `/flavors/<FLAVOR ID>` loads the flavor detail page. You should modify this page to add a form to create a new `review` for the flavor.
- [ ] __20:__ Sending a POST request to `/flavors/<FLAVOR ID>/reviews` creates a new review for the flavor.

Users can:
- [ ] __30:__ Create a new review for an flavor.
  - The schema for the `reviews` table has already been created for you. Look at `src/data/schema.sql` for the details of the schema.
  - Creating a new review should happen via AJAX (page should not refresh on form submission)
  - Once the user clicks the `Create Review` button, the newly created review should be added to the list of reviews on the flavor detail page(`/flavors/<FLAVOR ID>`) via client side JavaScript.

## Testing

- [ ] __30:__ Write a test for the `addReview` action using Mocha. This test should check that a new review is added to the database when the action is initiated. Running `npm test` passes all tests.

## Implement a search page for flavors

Routes:
- [ ] __20__ Navigating to `/flavors/search` loads the search page. The search page contains a form to search by a flavor
- [ ] __20__ Sending a POST request to `/flavors/search` renders the search result page with the flavors that match the search query

Users can:
- [ ] __20:__ Search for an ice cream flavor. For example, entering "praline" in the search form, should return the ice cream flavor "Pralines and Cream". Note: search is case insensitive.

## Uninstall after the interview

1. Clear the database: `npm run db:drop`
2. Stop any running express servers
3. Remove Postico entry for the database (if applicable)
4. Remove command line entry/ies for the database (delete from `~/.zsh_history` or `~/.bash_history`)
5. cd out of the usb drive from the terminal
6. Close the IDE / text editor window(s) with the challenge files
7. Eject the USB drive
