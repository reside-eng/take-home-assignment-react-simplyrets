# Introduction

Hi there 👋,

Thanks for taking the time to complete this brief take-home assignment. Please
timebox your effort to a maximum of 3 hours.

The goal of this exercise is to evaluate your frontend skills (React, styling,
accessibility, responsive, 3rd-party integration, testing, and more). Feel free
to make any assumptions, simplifications, or other changes to the problems -
**though please state those in your write up (README.md) when you submit this
assignment**. Please use as many libraries as is reasonable - there is no sense
in rebuilding what has been built, however, please state your reasoning for such
a library so we better understand your thought process.

The objective of this assignment is to build a simple React application
implementing a property list view using data returned from the SimplyRETS API
and matching the following [Figma design
mockup](https://www.figma.com/file/YZyIbis7fMsKnE2KaRlhYc/Sample-Project-Engineering?node-id=0%3A1).
SimplyRETS is an API commonly used in real estate and you will need to use it to
retrieve the properties data.

Before getting started, please read this document carefully.

**Good luck 🙃**

# Getting Started
- Use this repo which not much more than
  [create-react-app](https://create-react-app.dev/) with some additional
  boilerplate (favorite SVG icons & fonts) to help speed up your setup process
- For the mockup, use [this Figma
  design](https://www.figma.com/file/YZyIbis7fMsKnE2KaRlhYc/Sample-Project-Engineering?node-id=0%3A1).
  Both desktop & mobile are included.
- Read the [SimplyRETS
  documentation](https://docs.simplyrets.com/api/index.html#/Listings/get_properties)
  for any additional details around the API you will be interfacing with
- Use the SimplyRETS properties endpoint: https://api.simplyrets.com/properties
  (API login: `simplyrets` / API token: `simplyrets`)

# Acceptance criteria

- Create the following page: Property Listings
  - NOTE: This page should be built with the consideration that other pages
    would eventually be added. Not looking for any over-engineering here, simply
    an understanding of how you would structure your application.
- Implement the following design
  - A global sticky navigation should be present on every page providing links
    to both pages directly
  - Output the data from the API into a list view of properties. Each property
    should at least display the following information: 
    - `bedrooms`
    - `bathsFull` + `bathsHalf` (ex: 1 full + 3 half = 2.5)
    - `area` (as Sq Ft)
    - `listPrice`
    - `address`
    - `listDate` (MM/DD/YY)
    - `photo[0]`
    - Favored state. White outlined heart if not favorited, red heart if
      favorited. *Heart SVG assets included.*
  - Use style definitions from Figma when possible
  - Desktop and Mobile screen sizes are provided. All screen widths from 375 to
    1180 should be supported. Intermediate responsive behavior should be
    inferred.
- Get data from the SimplyRETS property endpoint on Property Listings page load
  + cache in local storage.
- On the Property Listings page, the user can click the heart to save the mlsId
  associated. Store the saved/favorited properties in the browser local storage.
  Build another page to list favorite  listings.
- Add integration tests to test your integration with SimplyRETS
- Add tests to satisfy confidence in code
- Explain any design decisions (*including items left out due to time
  constraints*) in the README.md file

# What you will be assessed on

- All functional requirements must be satisfied
- The application successfully builds
- The application successfully runs with no console errors or warnings
- Production-like code that must be well coded, clean, and commented 
- UI must be responsive and clean
- UI should closely match the mockup.
- Intermediate screen width behavior should be reasonable. 
- General understanding of semantic markup and accessibility
- Tests must be passing and meaningful
- General React knowledge

# Submission

Once you are satisfied with your assignment, please publish your code (ignore
the node_modules folder) and your README to a Git repository and send the
repository link to eng.assignment@sideinc.com.

# Getting started

With latest Node LTS installed, run the following commands:

```sh
yarn install && yarn start 
```

Navigate to `http://localhost:4000/graphql`.

## What will you find inside this boilerplate

In this boilerplate, you will find:
- The main entry file: `index.js`
- All the types from the SimplyRETS API ready to use with GraphQL:
  `types/index.js`
- A `README.md` file to document your comments and design decisions
- Inside the `package.json`, we added the following packages:
    - `express`
    - `apollo-server-express`
    - `jest`

## SimplyRETS API

SimplyRETS is a platform for developers and agents to build real estate
applications and websites.

Their API uses Basic Authentication, which most HTTP libraries will handle for
you. To use the test data, you can use the api key `simplyrets` and secret
`simplyrets`. Note that these test listings are not live RETS listings but the
data, query parameters, and response bodies will all work the same.

Please use the following endpoint: `https://api.simplyrets.com/properties`.
