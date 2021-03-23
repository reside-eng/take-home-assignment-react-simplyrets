# Introduction

Hi there 👋,

Thanks for taking the time to complete this brief take-home assignment. *Please
timebox your effort to a maximum of 3 hours.*

The goal of this exercise is to evaluate your frontend skills (React, styling,
accessibility, responsive, 3rd-party integration, testing, and more). Feel free
to make any assumptions, simplifications, or other changes to the problems -
**though please state those in your write up (README.md) when you submit this
assignment**. Please use as many libraries as is reasonable, however, please
state your reasoning for such a library so we better understand your thought
process.

The objective of this assignment is to build a simple React application
implementing a property list view using data returned from the SimplyRETS API
and matching the following [Figma design
mockup](https://www.figma.com/file/YZyIbis7fMsKnE2KaRlhYc/Sample-Project-Engineering?node-id=0%3A1).
SimplyRETS is an API commonly used in real estate and you will need to use it to
retrieve the properties data.

Before getting started, please read this document carefully.

**Good luck 🙃**

# Acceptance criteria

- Using [react-router](https://reactrouter.com/) *(included as a dependency)*, create the following page:
  Property Listings
  - NOTE: This page should be built with the consideration that other pages
    would eventually be added. Not looking for any over-engineering here, simply
    an understanding of how you would structure your application given that bit
    of context.
- Implement the following design:
  - A global sticky header containing the page name
  - Output the data from the SimplyRETS API into a list view of properties. Each
    property should at least display the following information: 
    - `bedrooms`
    - `bathsFull` + `bathsHalf` (ex: 1 full + 3 half = 2.5)
    - `area` (as Sq Ft)
    - `listPrice`
    - `address`
    - `listDate` (MM/DD/YY)
    - `photo[0]`
    - Favorite state: White outlined heart if not favorited, red heart if
      favorited. *(Heart SVG assets included.)*
  - Use style definitions from Figma when possible
  - Desktop and Mobile screen sizes are provided. All screen widths from 375 to
    1180 should be supported. Intermediate responsive behavior should be
    inferred.
- Get data from the SimplyRETS property endpoint on Property Listings page load
  + cache in local storage
- On the Property Listings page, the user can click the heart to save the mlsId
  associated. Store the saved/favorited properties in the browser local storage.
- Add any tests to satisfy confidence in your application. *Be sure to document
  the types of tests you choose and why*
- Styles can be handled in any manner you choose – i.e. sass, css, emotion,
  etc...
- This application is expected to be built utilizing current patterns and best
  practices of React (i.e. hooks). *Please do not use any other 3rd-party state
  management libraries such as Redux or Mobx.* `react-query` is okay.
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

Once you are satisfied with your assignment, please publish your code and README
to a Git repository and send the repository link to the email our recruiter has
provided.

# Getting Started

With latest Node LTS installed, run the following commands:

```sh
yarn install && yarn start 
```

Navigate to `http://localhost:3000/`.

## What will you find inside this boilerplate

In this boilerplate, you will find:
- A standard [create-react-app (CRA)](https://create-react-app.dev/) with some
  provided assets (favorite SVG icons & fonts)
- A `README.md` file to document your comments and design decisions
- Inside the `package.json`, in addition to CRA dependencies, we've added the
  following packages:
    - `prettier`: simple code formating
    - `bootstrap`: styles reset baseline
    - `react-router` & `react-router-dom`: For page routing

## Design Mockup

For the mockup, use [this Figma
design](https://www.figma.com/file/YZyIbis7fMsKnE2KaRlhYc/Sample-Project-Engineering?node-id=0%3A1).
Both desktop & mobile are included.

The favorite heart icons are already provided as SVGs in the `src/assets/`
directory. The font used in the mockup has also already been provided inside
`src/styles/bootstrap`.

## SimplyRETS API

SimplyRETS is a platform for developers and agents to build real estate
applications and websites.

Their API uses Basic Authentication, which most HTTP libraries will handle for
you. To use the test data, you can use the api key `simplyrets` and secret
`simplyrets`. Note that these test listings are not live RETS listings but the
data, query parameters, and response bodies will all work the same.

Please use the following endpoint: https://api.simplyrets.com/properties. More
information can found in the [SimplyRETS
documentation](https://docs.simplyrets.com/api/index.html#/Listings/get_properties).
