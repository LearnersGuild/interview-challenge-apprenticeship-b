# IceCreamery 🍦

A community for ice cream lovers to rate their favorite flavors.

Part of the application has already been built for you. Your job is to take it to completion.

To view this README using markdown preview press `ctrl+shift+M` in Atom or `shift+cmd+V` in VSCode.

## Getting Started

_Before you begin coding, please complete the following steps to setup your interview environment. Stop where it says "✋ Please stop here"_

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

---

**✋ Please stop here and wait for your interviewer to start the timer**

---

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
- All other pages besides sign in and sign up require authentication.
- A user with a username `a`, and password `a` exists in the database for easy sign in.
- Navigating to `/flavors`, loads the index page for all flavors
- Navigating to `/flavors/<FLAVOR ID>`, loads the detail page for a flavor.
- The `user` object is available to you in the request via `req.user`.
- `public/script.js` is the file which contains client side JavaScript.

## Specs

### User can add their flavor reviews

Navigating to `/flavors/<FLAVOR ID>` loads the flavor detail page. You should modify this page so that users can add and see flavor reviews. The page should have a form to create a new `review` for the flavor, which works using AJAX (the page should not refresh on form submission).

The EJS/HTML for rendering the reviews has already been created for you. Look in `src/views/flavors/flavor.ejs` for the unordered list that is passed the local variable reviews, which you must populate in the route that renders the page.

The schema for the `reviews` table has already been created for you. Look at `src/data/schema.sql` for the details of the schema.


- [ ] __10:__ All flavor detail pages (`/flavors/<FLAVOR ID>`) have a form with two inputs, `body` (text) and `rating` (integer), and a `Create Review` button.
- [ ] __20:__ All flavor detail pages (`/flavors/<FLAVOR ID>`) display the reviews for that flavor that have already been created in the database.
- [ ] __20:__ Clicking `Create Review` sends an HTTP POST request to the server without a page refresh
- [ ] __20:__ Sending a POST request to `/flavors/<FLAVOR ID>/reviews` creates a new review for the flavor in the database.
- [ ] __20:__ When the user clicks `Create Review`, the body and rating for the new review are added to the page without a page refresh.
- [ ] __10:__ If the HTTP request fails, the body and rating for the new review are not added to the page and the user is shown the message `Server Error` somewhere on the page without a page refresh.
- [ ] __10:__ The system only allows adding reviews for the currently authenticated user. If a malicious user were to modify the client-side HTML or JavaScript, they would not be able to add a review for another user.


# Uninstall after the interview

_Please complete the following steps to close the interview and remove the interview challenge from your computer._

1. Create a new branch with your name and the date (e.g. `yourname-2018-02-02`). Make a commit in that branch:
```sh
$ git checkout -b yourname-YYYY-MM-DD
$ git add -Av
$ git commit -m "Completed interview challenge"
```

2. Remove the interview database: `$ npm run db:drop`
3. Stop any running express servers
4. Remove Postico entry for the database (if applicable). Press `cmd+N` to open the favorites window and then select `edit > options > delete` to remove the entry.
5. Remove command line entry/ies for the database (if applicable) (delete from `~/.zsh_history` or `~/.bash_history`)
6. Close the IDE / text editor window(s) with the challenge files
7. Use `$ cd ~/` to cd out of the usb drive in any open terminal windows.
8. Eject the USB drive by right-clicking on the drive in Finder
9. Stop the recording
