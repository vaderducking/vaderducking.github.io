# vaderducking.github.io

My portfolio of projects, hosted by Github to represent the cs50's week eigth problem set "Homepage".

Used the below JS API call to convert Mardown synthax to HTML using Sindre Sorhus's CSS.

Documentation here: https://docs.github.com/en/rest/markdown/markdown?apiVersion=2022-11-28#render-a-markdown-document

```
// Octokit.js
// https://github.com/octokit/core.js#readme
import { Octokit } from "https://esm.sh/@octokit/core";

const octokit = new Octokit({
  auth: 'auth_key'
});


async function makeRequest() {
  try {
    const response = await octokit.request('POST /markdown', {
      text: `
      # CS50 Final Project

      #### Video Demo:  <URL HERE>n
      #### Description: Web application "nailByFany"

      Using  **Flask**, **Python** and **PostgreSQL** with **SQLAlchemy**, **HTML**, **CSS**, **JavaScript**

      Tools used : Bootstrap, W3Schools, Mozilla.org, StackOverflow, Github, ChatGPT and many more sources and documentation

      This is the Final Project of my CS50 Introduction To Computer Science course. I started CS50 in August 2023 and it has been a long and very fruitful journey that allowed me to learn so much. For the final projects, I thought of what to build for a long time and as I enjoyed web developping over the last few weeks of the course I decided to build one for my little sister. She has her own business in Nail Art and various other esthetic based activities which I don't fully understand. We worked together in thinking of functionalities and mostly from a design perspective. It had to look professional and based of her tastes and wishes. This is something I had to work on as designing things in general is not something that comes naturally to me, I had to learn a lot of CSS and JavaScript with many trial and error to get to a decent visual presentation that we both liked.

      > [!NOTE]
      > You can visit a recap of my projects including all cs50 weeks labs and problem sets on [VaderDucking](https://vaderducking.github.io/).


      To start my Flask web application locally, use \`flask run\` or \`flask run --debug\` to enter the debug mode.


      To update and upgrade the database when making changes to the /models.py file I used the below commands:

      \`\`\`
      flask db -m "Text explaining the changes"
      flask db migrate
      \`\`\`

      ## Structure of the web app
      The app contains 7 python files:

      - __init__.py used to initialise the application, database and mail services
      - routes.py used to declare the different routes and operate back-end processes
      - helpers.py used to separate complementary functions from the routes.py file to not overload and make it bigger than it needs to be
      - models.py contains the database classes and tables needed to operate the application
      - env.py in the migrations/ folder to configure the Alembic database migrations
      - config.py used to declare configuration variables
      - run.py to create and run the app

      It contains 14 HTML templates, 4 CSS and 1 JavaScript files. 


      ## Structure of the routes
      The landing page route is "/" and simply fetches the necessary information from the database to populate all the jinja variables from the index.html template that extends the layout.html template.

      We have the "login" and "register" routes to handle user connectivity, as well as the "/confirm/<token>" and "/resend" routes to handle user verification.

      The "/admin" route is decorated with an @admin_required function which checks if the user possesses admin privileges, and all the routes that require the user to be logged in are decorated with the @login_required function.

      There are many variations of the "/admin/" routes to handle products, appointments, images, folders and opinions maintenance and modifications as well as being able to view the users in a table.

      The "/politic", "/terms" and "/legal" routes render the appropriate HTML templates to display terms and conditions, legal modalities and confidentiality policies. There is a button at the bottom of the "/politic" to contacts us by email.

      Users have the possibility to reset their password by using the "/forgotpw" route using both GET and POST methods that will send them an email which will redirect them with a link to the "/reset/<token>" <route.

      Once users validated their email, they will be able to manage their personal information and view their past appointments also create opinion cards that could end up on the front page upon admin validation using the various "/account" route.

      Finally, the self explanatory "/logout" route will clear the session to log out the user.


      ## Functionalities

      For now users cannot purchase products or book appointments but this is something that I keep in mind for later, my little sister's business being new and her being young is still early for this. For now I focused on allowing as much maintenance as possible directly from the web application for any "Admin rights" entitled users.

      Chat GPT helped me mostly for Python routes to handle the back end and functionalities as folder navigation and image selection from a modal, also for folder creation and overall on guidance to build functionalities and understand more the behind the scenes of very simple things.

      A quick tour of the website's functionalities is available on Youtube : https://youtu.be/gP2wKQzrEPQ"}
      `,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    console.log(response);
  } catch (error) {
    console.error('Error making request:', error);
  }
}

makeRequest(); // Call the function to execute the request
```