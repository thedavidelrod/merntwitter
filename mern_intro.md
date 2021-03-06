  
# MERN Project

---

## Why MERN Project?

+ MERN stack is trending up!
+ A creative project in a popular tech stack that gets across personality & strengths, and supports job-seeking goals.

---

## What is MERN?

![photo](https://user-images.githubusercontent.com/51456702/85962116-c10d5a00-b963-11ea-830d-31def48e5e85.png)

Note:

### **M**ongoDB
+ NoSQL database
### **E**xpress
+ web application framework for Node
### **R**eact
+ frontend Javascript library
### **N**ode
+ a JavaScript runtime environment


---

## MongoDB

MongoDB stores data using a document data structure
+ **Documents** are JSON-like objects with key-value pairs
+ Documents with similar data are stored within collections
+ To compare it to a relational database, a document is similar to a row while a collection is similar to a table. 

---

## MongoDB User Document

```
    {
        _id: ObjectId("5d8d5b50a5b9d4a3c402f571"),
        username: "i_love_walking",
        email: "walker@walkingisgreat.com",
        password_digest: "Ke&63h1z$mK9jd37n",
        age: 28,
        address: {
            city: "Generic City Name",
            street: "Somewhere Lane",
            zipcode: 1
        },
        posts: [
            ObjectId("4a1h3m42a5b9d4i9dc405l721"),
            ObjectId("b9x2m45a5b7h7e3ml403a091"),
            ObjectId("1k3b5f87x5s6c7i2mp814g524")
        ]
    }
```

---

## Embedding

### Storing sub-documents within a document
- provides better read performance
- ability to retrieve related data with a single database query
- makes it possible to update related data in single operation

### When to use embedded data model?
- one-to-one relationships
- one-to-many relationships

---

## Referencing

### Storing array of related object ids
- benefits of embedding are lost when we use referencing
- required if embedded data could grow too large

### When to use referencing data model?
- Many-to-Many relationships
- Modeling large hierarchical data sets

---

## NoSQL

### NoSQL databases === non-relational databases
- MongoDB is non-relational
- PostgreSQL is relational

---

## What is Express?

### A web application framework for Node that provides us with tools to:

 1. Write handlers to respond to different HTTP verb requests at different URL paths
 2. Combine with view rendering engines to generate responses by passing data to templates
 3. Set common web application settings like which port to use
 4. Add middleware at any point within the request handling pipeline

---

## What is Node.js?

### A JavaScript runtime environment or an environment where you can run application code
  + JS was originally designed only to be used in browsers
  + Node allows us to utilize JS code outside of the browser to build applications
  + In context of the MERN stack, you will be using Node to configure your app's server

### Benefit of Node
  + enables us to take advantage of JavaScript's asynchronicity

---

## Axios

### Axios is a promise based HTTP client that can be used in both the browser and a Node environment
  + can use Axios library to make XMLHttpRequests from the browser or HTTP requests from your Node Environment

### You will mainly be utilizing Axios to make your frontend AJAX calls instead of jQuery's `$.ajax` method
  + reference Axios Documentation during the project

---

## Working in groups

### Benefits of pair or group work

+ Split tasks among those with different strengths
+ More creativity and allows you to tackle larger projects
+ Keep each other on track (Notion, etc.)
+ Practice cooperative git workflow

---

## Roles

### Clearly defined roles and responsibilities to ensure everyone is contributing effectively and work is not being duplicated

---

## Example of Team Roles

1. **Team Lead** - Typically the originator of the idea. 
2. **Backend Lead** - Focused on data management and the api end-points of the app.
3. **Frontend Lead** - Focused on the UI and UX of the app.
4. **Frontend/Backend Asst.** - Based on the needs of the app, splits work with the corresponding lead.
5. **Flex** - Bounces between the other roles at the instruction of the Team Lead to help fill gaps.

---

## Requirements

1. Must be a creative/original idea
2. Must be written using the MERN stack (NO EXCEPTIONS)
3. Bonus: Use of libraries

---

## What can it look like?

+ https://bl00m.herokuapp.com/#/landing (Mobile Optimized)
+ https://covid415.herokuapp.com/#/
+ http://volunteerist.herokuapp.com/#/


---

## Be realistic about how many technologies, APIs, etc!

---

## Keys to success

+ Start early/Intensive Planning
+ Great Teamwork
+ Creativity

---

## Project Supervisors

### Even more hands-off!

---

## MERN Project Logistics

---

### Proposal due on Friday W13D5
+ General Idea (core functionalities/features)
+ Backup Ideas
+ Team member roles
+ [Form](https://forms.gle/bzhUk1MZN48F3eYz6)

---

### Design Docs and MERN Twitter due on Monday 12/28

---

### Design Docs
+ Put on the wiki of your group's repo
  + One repo per group
+ Background and Overview
+ Functionality and MVPs
  + Wireframes
+ Technologies
+ Group Members and Work Breakdown

---

### MERN Twitter

+ Project walkthrough located throughout the MERN section on AAO
+ Each member of the group will have their own MERN Twitter project
+ Should be hosted on Heroku

---

### MERN Projects due Monday W15D1

---

### Tomorrow Logistics

+ 10:00am FSP Presentations
+ 11:30am MERN Pitch Party
+ 1:30pm Group meeting to iron out proposal
+ 2:00pm MERN Proposal Due
+ 2:15pm Shark Tank (TAs will start calling groups in to pitch their idea in the shark tank)
