### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT is a JSON Web Token.
- What is the signature portion of the JWT?  What does it do?
The version of the header and payload, signed with an encrypted secret key.
- If a JWT is intercepted, can the attacker see what's inside the payload?

- How can you implement authentication with a JWT?  Describe how it works at a high level.
Implementing authentication using JWT requires manually validating each route with the client.
- Compare and contrast unit, integration and end-to-end tests.
Unittests focus on specific codeblocks, integration tests small amounts of code whenever they are pushed or deployed - failing tests will prohibit deployment - and e2e is the practice of testing the entire app from the client side, which easily addresses bugs from the user's perspective, but is time-consuming.
- What is a mock? What are some things you would mock?
Mock is a method of unit testing used to isolate behavior by introducing your own information, instead of information from an external source.
- What is continuous integration?
Merging small amounts of updated code continuously, as opposed to large amounts less frequently.
- What is an environment variable and what are they used for?
Environmental variables are default variables for the environment in a project. A databse uri or a defualt URL path stored in a .env file that can be used elsewhere in order to create universal constants in an application.
- What is TDD? What are some benefits and drawbacks?
Test driven development requires you to write tests for your code before writing the code itself.  Doing this allows you to write scalable and efficient code that pass the tests, instead of debugging later.
- What is the value of using JSONSchema for validation?
JSONSchema validation produces standardized JSON results, similar to seed files in SQL.
- What are some ways to decide which code to test?

- What does `RETURNING` do in SQL? When would you use it?
RETURNING is used in post/patch/delete routes to update database information.
- What are some differences between Web Sockets and HTTP?
Web Sockets are a lightweight way for a client to communicate in real time with a server.
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I personally enjoyed using Flask over Express only because Python is more readable than JS. Express has far more potential in my opinion to do things outside the scope of what is capable in Flask.
