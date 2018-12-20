# Eat-Da-Burger
### 1. Why / Background
  * This is Berkeley Coding Boot Camp (BCBC) week 6 homework assignment.
    * The BCBC curriculum generally focuses on JavaScript along with HTML/CSS, using the MERN (MongoDB, Express, React, Node) software stack, to teach web development skills across the client and server. 
  * Eat-Da-Burger is a full-stack restaurant app that enable users to input burger names to eat:
    * Server-side: Node.js with Express web application server framework and MySQL database for data persistence
    * Client-side: Handlebars.js as extension of Mustache templating system for the HTML views and Bootstrap front-end framework for HTML/CSS
 ### 2. What / Objectives / User Stories
  * This project development, from design through deployment of the application, used Node.js, Express.js and MySQL as the primary web development technologies on the server-side along with HTML/CSS/JS on the client-side:
  * User Stories, by categorization:
    * 
 ### 3. How / Design Description
  * The scope of the project fit well into [Agile methodology with Scrum and Kanban frameworks](https://en.wikipedia.org/wiki/Agile_software_development). Due to limited scope and non-group assignment, GitHub's built-in tools were not used to support project execution:
    * Projects: Kanban board for documenting user stories and overall progress
    * Issues: Issue tracking for user stories, features and bug report
  * Functionality - refer to [video of application user flow](https://drive.google.com/open?id=1w2IGKzNlyG6x5EZ1JKubm2RC0xodmi3Q):
    * Design Description
      * Web application server
        * Configure Express web app server listening on process.env.PORT (Heroku) or default to 8080. Parse URL encoded, any type including nested objects, and JSON and call appropriate routing.
        * Required Modules: npm (express, express-handlebars, method-override, body-parser)
        * Relevant functions: require(), use(), engine(), set(), listen() 
        * Relevant modules: server.js
      * SQL Database
        * Create burgers_db database and burgers table with attributes (burger_name, devoured, date) with id as primary key
        * Seed with burgers table with 3 burgers
        * Relevant modules: schema.sql, seeds.sql
      * Routing
        * Configure routing for viewing HTML pages and API friends data object
        * calculateMatch() function determines best match based on least total difference in survey question responses, for new friend compared to existing friends 
        * Required Modules: friends.js, path (built-in to Node)
        * Relevant functions: require(), exports(), get(), sendFile(), join(), post(), json(), push(), calculateMatch()
        * Relevant modules: htmlRoutes.js, apiRoutes.js
      * View Layout
        * Boilerplate includes HTML5 doctype and viewport meta tag along with Bootstrap CSS jQuery, Popper.js, Bootstrap
        * Footer container includes API friends link used to route for retrieving friends 
        * Home page
          * Jumbotron button includes survey link to route to survey.html
          data object
          * Relevant view: home.html
        * Survey page
          * Jumbotron container includes page header
          * Form container includes inputs (name and photo link), select options (response to survey questions) and submit button
          * Modal popup includes name and photo link of best match
          * Relevant view: survey.html
  * Prerequisites for Development:
    * MacBook Air (Intel Core i7, 2.2 GHz, 1 Processor, 2 Cores, 8GB)
    * 64 bit operating system 
    * git version 2.18.0
    * Visual Studio Code Version 1.29.1
    * [GitHub burger](https://github.com/jkawahara/burger)
    * Chrome Version 70.0.3538.110 (Official Build) (64-bit)
  * Built With:
    * Server-side:
      * [Node.js](https://nodejs.org/docs/latest/api/documentation.html)
        * [npm](https://www.npmjs.com/)
          * [express](https://www.npmjs.com/package/express)
          * [express-handlebars](https://www.npmjs.com/package/express-handlebars)
          * [method-override](https://www.npmjs.com/package/method-override)
          * [mysql](https://www.npmjs.com/package/mysql)
    * Client-side: HTML, CSS, JavaScript
  * Installing:
    * For further development or use of this application, clone or download application files from GitHub, which is organized into the following directory structure:
      * /burger (application root directory level)
        * /config
          * connection.js
          * orm.js
        * /controllers
          * burgers_controller.js
        * /db
          * schema.sql
          * seeds.sql
        * /models
          * burger.js
        * /node_modules (ignored by git) - generated first time npm install executes
        * /public
          * /assets
            * /css
              * burger_style.css
            * /img
              * burger.png
          * test.html
        * /views
          * /layouts
            * main.handlebars
          * index.handlebars
        * .gitignore
        * LICENSE
        * package.json - includes dependencies
        * README.md
        * server.js
    * Once the application files are ready per the above structure, go to the application root directory level
      * Enter the following in termminal to install required node packages. This executes by referring to the included dependencies in package.json and creates required node packages in /node_modules and package-lock.json:
        * npm install
  * Running the tests:
    * Unit testing & integration testing was informally executed
  * Deployment:
    * Deployed on [Heroku](TBD)
 ## Versioning
  * For the versions available, see the tags on this repository.
 ## Authors
  * John Kawahara.
  * N/A- See also the list of contributors who participated in this project.
 ## License
  * This project is licensed under the [MIT License](LICENSE).
 ## Acknowledgments
  * Thanks to BCBC program personnel, especially our instructor, David Hallinan, along with our TAs Hannah Bowers and Glo Austin, for their guidance and support.
