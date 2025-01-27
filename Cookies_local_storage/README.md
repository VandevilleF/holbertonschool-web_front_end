Cookies & local storage
=======================

*   Master
*   By: Johann Kerbrat, Engineering Manager at Uber Works
*   Weight: 1
*   **Manual QA review must be done** (request it when you are done with the project)

*   [Description](#description)
*   [Quiz](#quiz)

[Go to tasks](#)

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/1/ea21e0798eebbfd929b4.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250127%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250127T164335Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e866b3a73b780373f4a6e5fa0805471f83264e5c551bf54b02c78e18225f5e19)

Resources
---------

**Read or watch:**

*   [Cookies and Javascript](/rltoken/HDKXv4jcGqNJuRzeanXV_Q "Cookies and Javascript")
*   [HTTP Cookies](/rltoken/SWUlFPLDLIfMUQtvo3BTaA "HTTP Cookies")
*   [js-cookie](/rltoken/oFmP71deofnPZiXlmoFR4Q "js-cookie")
*   [Web storage](/rltoken/_UAQOoJlFdXus23QoLpkGw "Web storage")

Learning Objectives
-------------------

*   Understand how to create cookies using Javascript
*   Learn how to set specific settings for the cookie
*   Learn how to read cookies with Javascript
*   How to use js-cookie for easy cookie manipulation
*   How to use the browser web storage
*   The differences between local storage and session storage

Requirements
------------

*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the folder of the project, is mandatory
*   Your code should use the `js` extension
*   All of your code will be compiled/executed on Ubuntu 18.04 using Node 12.x and npm 6.x
*   `src/index.js` should stay empty - all your Javascript must be in your HTML, inside `<script>` tag

Tasks
-----

### 0\. Create basic cookie

mandatory

**Install your development environment:**

*   Install`webpack-dev-server` by running `npm install webpack-dev-server --save-dev` (if you have some errors of missing dependencies, install these packages: `npm i -D webpack` and `npm i -D webpack-cli`)
*   Create an empty file `src/index.js`
*   Run your server with `node_modules/.bin/webpack-dev-server`

**In a file `0-index.html`, create a basic html template:**

*   Add two text inputs, with the id `firstname` and `email`
*   Add one button with the text “Log me in” that will call the function `setCookies`
*   Add one button with the text “Show the cookies” that will call the function `showCookies`
*   Create a function `setCookies`:

    *   It should set the cookie `firstname` with the value in the `firstname` input
    *   It should set the cookie `email` with the value in the `email` input
*   Create a function `showCookies`:

    *   It should create a DOM element `p`
    *   It should set the inner html with `Cookies:` and the value of the cookie
    *   It should append the paragraph at the bottom of the page

**Requirements:**

*   Try to make your page to look as close to the image below as possible

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/5bcb67bddaba890742ab.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250127%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250127T164335Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=173ac2d0d4ce3a72d228a0ae495683dd90316dbf91710670fcfb856a3b96c185)

*   Access your code with `http://localhost:8080/0-index.html`
*   Use vanilla javascript to complete the task

**Tips:**

*   If you are using [VSCode](/rltoken/zyjkz8CiQ7Vfel_VnLs2jA "VSCode"), you can use the plugin [live server](/rltoken/4cMfP21rc68xTBH-v3CVqQ "live server")
*   Make sure you have created and configured `webpack.config.js`

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Cookies_local_storage`
*   File: `package.json, src/index.js, 0-index.html`

### 1\. Create cookie with expiration date and specific path

mandatory

**In a file `1-index.html`:**

*   Reuse the code of the previous task
*   Modify the way you are setting cookies to expire in 10 days

**Requirements:**

*   Access your code with `http://localhost:8080/1-index.html`
*   Use vanilla javascript to complete the task

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Cookies_local_storage`
*   File: `1-index.html`

### 2\. Read cookie

mandatory

**In a file `2-index.html`:**

*   Reuse the code of the previous task

*   Create a function `getCookie`:

    *   It accepts `name` as argument
    *   It should return the value of the cookie with the `name` passed in argument
    *   If the cookie does not exist, it should return an empty string
*   Modify the function `showCookies`:

    *   It should display the paragraph `Email: EMAIL - Firstname: FIRSTNAME`

**Requirements:**

*   Access your code with `http://localhost:8080/2-index.html`
*   Use vanilla javascript to complete the task

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Cookies_local_storage`
*   File: `2-index.html`

### 3\. Delete cookie and mini application

mandatory

**in a file `3-index.html`, reuse your code from the previous task**

*   add a `div` in html that will contain the login form:

    *   You can reuse the one you previously wrote
    *   It has one `h2`
    *   It has two text inputs
    *   It has one button
*   Write a function named `showForm`:

    *   It should remove the Welcome message if it exists
    *   It should show the form
*   Write a function named `hideForm`:

    *   It should hide the form
*   Write a function named `deleteCookiesAndShowForm`:

    *   It should remove the two cookies
    *   it should show the form by calling the `showForm` function
*   Write a function named `showWelcomeMessageOrForm`:

    *   if user is not logged in, the function `showForm` is called
    *   If the user is logged in, replace the body of the page with a `h1`
        *   It should display `Welcome FIRSTNAME (logout)`
        *   `(logout)` should be a link
            *   The link font should be display in normal weight, italic, and 10px to the right of the message
            *   On click, call the function `deleteCookiesAndShowForm`, hide the welcome message, and show the form

**Requirements:**

*   Access your code with `http://localhost:8080/3-index.html`
*   Use vanilla javascript to complete the task
*   Build the Welcome message with Javascript without using HTML

**The login form should look like the image below**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/dab2e6032514e5f2b692.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250127%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250127T164335Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d5571c5e551e9e5e891e76aa1be95a38629ad06e60cf0b03c494461948b83936)

**When a user is logged in the page should look like the image below**

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/3/4c498ffe7d758c80f5f8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20250127%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20250127T164335Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=65b5837cfb99f0f2bfc03a52df9c8d66e917994788658371dcc1aa6d6b7c2802)

**Repo:**

*   GitHub repository: `holbertonschool-web_front_end`
*   Directory: `Cookies_local_storage`
*   File: `3-index.html`
