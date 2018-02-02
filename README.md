# IceCreamery

A community for ice cream lovers to rate their favorite flavors.

Part of the application has already been built for you. Your job is to take it to completion.

To view this README using markdown preview press `ctrl+shift+M` in Atom or `shift+cmd+V` in VSCode.

## Getting Started

_Before you begin coding, please complete the following steps to setup your interview environment._

### Start the recording

Start the recording according to the directions given to you by your interviewer.

In most cases you will be given a link to a Zoom room. Once you've entered the room click the "Share Screen" button and share your entire desktop.

### Set up your config

Run the command in the terminal so that the config loads correctly
`$ cp .env.template .env`

### Install your dependencies

Run the following command in the terminal:
`$ npm install`

### Set up the local database

Use the following command to create your database and load the schema and seed data:

`$ npm run db:init`

Note: this command will only work if you have your `.env` file correctly setup.

### Starting your development server

Run the following command in the terminal:
`$ npm start`

### Accessing the Database

If you would like to use [Postico](https://eggerapps.at/postico) to access the database, you can run the following command to automatically connect:

`$ open postgres://localhost/interview-apprenticeship-b`

# Coding Challenge

During the interview you will have 100 minutes to complete all the specs of the challenge.

You'll be allowed to ask your interviewer clarifying questions and can use the internet to search for information as needed. No other aid is allowed. If you have a question about whether or not a particular form of aid is acceptable, ask your interviewer.

Each requirement is assigned a point value. Completing the requirement will earn you full points. _No partial points will be given._ Overall completeness is determined by dividing the total points earned by the total points available. To pass the interview you must score 80% or higher.

## Existing functionality

The app uses a simple file structure for an Express web app server that renders views using EJS templates.

```sh
bin/                  # utility scripts
public/               # static assets
src/
  actions/            # async server actions (e.g. data CRUD)
  data/               # db schema & seed data
  db/                 # database client & utils
  routes/             # express routes
  views/              # html templates
test/                 # test files for the source files
```

- Navigating to `/sign-up`, loads the sign up page.
- Navigating to `/sign-in`, loads the sign in page.
- A user with a username `a`, and password `a` exists in the database for easy sign in.
- Navigating to `/flavors`, loads the index page for all flavors
- Navigating to `/flavors/<FLAVOR ID>`, loads the detail page for a flavor.
- The `user` object is available to you in the request via `req.user`.
- `public/script.js` is the file which contains client side JavaScript.

## Specs

### User can add their flavor reviews

Navigating to `/flavors/<FLAVOR ID>` loads the flavor detail page. You should modify this page to add a form to create a new `review` for the flavor using AJAX (page should not refresh on form submission).

The schema for the `reviews` table has already been created for you. Look at `src/data/schema.sql` for the details of the schema.


- [ ] __10:__ Flavor detail pages (`/flavors/<FLAVOR ID>`) have a form with a `Create Review` button and two inputs: `body` (text) and `rating` (integer)
- [ ] __20:__ Clicking `Create Review` sends an HTTP POST request to the server without a page refresh
- [ ] __20:__ Sending a POST request to `/flavors/<FLAVOR ID>/reviews` creates a new review for the flavor in the database.
- [ ] __20:__ When the user clicks `Create Review`, the body and rating for the new review are added to the page without a page refresh.


- [ ] __10:__ If the HTTP request fails, the body and rating for the new review are not added to the page and the user is shown the message `Server Error`.
- [ ] __10:__ If the database insert fails, the body and rating for the new review are not added to the page and the user is shown the message `Server Error`.
- [ ] __10:__ A user cannot add reviews for any other users, including by editing client-side HTML or JavaScript.


### Testing

Write a test for the `addReview` action using Mocha. This test should check that a new review is added to the database when the action is initiated.

- [ ] __15:__ Running `npm test` shows a passing test when a review is added to the database
- [ ] __15:__ Running `npm test` shows a failing test if review is not added to the database
- [ ] __15:__ Test can be run multiple times in a row without yielding false positives or negatives.


### Users can search for flavors

Create a search functionality that allows users to search for an ice cream flavor. For example, entering "praline" in the search form, should return the ice cream flavor "Pralines and Cream". Note: search is case insensitive.

An EJS template for the search page has been created for you in `src/views/flavors`.

- [ ] __20:__ Navigating to `/flavors/search` loads the search page. The search page contains a text field and a `Search` button to allow the user to search by a flavor
- [ ] __20:__ Sending a POST request to `/flavors/search` renders a list of search results using the search page template.
- [ ] __30:__ The search results contain only the flavors that match the search query. A flavor is considered a match when the search query is a substring or fully matches the name of the flavor. Search is case insensitive.


# Uninstall after the interview

_Please complete the following steps to close the interview and remove the interview challenge from your computer._

1. Make a commit in the local git repository: `$ git add -Av` and then `$ git commit -m "Completed interview challenge"`
2. Remove the interview database: `$ npm run db:drop`
3. Stop any running express servers
4. Remove Postico entry for the database (if applicable). Press `cmd+N` to open the favorites window and then select `edit > options > delete` to remove the entry.
5. Remove command line entry/ies for the database (if applicable) (delete from `~/.zsh_history` or `~/.bash_history`)
6. Close the IDE / text editor window(s) with the challenge files
7. Use `$ cd ~/` to cd out of the usb drive in any open terminal windows.
8. Eject the USB drive by right-clicking on the drive in Finder
9. Stop the recording
