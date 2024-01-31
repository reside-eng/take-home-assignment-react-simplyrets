# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

<!-- Please document your code & design decisions here. -->

# Testing

- Got some basic tests to run but there could be more done with testing thecustom hooks in the hooks folder simulating an async call

# 3rd Party libs

- Made use of `dayjs` for easy formating. Also install Error Boundary for encapsulate error withtin the listings component. The idae behind this is to not have the entire app fail if there is an error withtin the property listings page

# Encapsulation

- Created custom hook `useFavorite` to manage the likes for Properties
- Create custom hooks `useProperties` to perform async fetch to retrieve the Property Listings

# Responsiveness

- Used grid layouts and flexbox

# Out of scope (Improvements)

- Ability to inifite scroll (its assumed that there will be a lot more properties in production so the ability to poll for more properties as the user reaches the bottom of the page would be a nice user experience)
  -Lazy Loading images for better performace (ex: `react-lazy-load-image-component`)

# Accessibility

- Unqiue Ids for Elements
- Ability to favorite a photo with keyboard would be nice to have as well

# Maintainability

- Typescript would be best for proper type safety.
