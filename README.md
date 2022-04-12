# Getting Started

- `yarn`
- `yarn start`
- navigate to http://localhost:3000/property-listings
- `yarn test`

# Code and Design Decisions
I used css-grid for responsive design.

I used `date-fns` over `moment` since it's a lighter weight package. 

I had never used axios before. I've never set up the infrastructure to query a rest endpoint, so some of the tests around mocking axios may look odd.

## What got axed due to time constraints
- Some functions are missing documentation
- I didn't verify with screen readers (usually I would use Jaws, NVDA, and Mac Voice Over)
- I didn't run a google lighthouse test for accessibility or performance
- I didn't run an Axe or WAVE accessibility test
- I didn't add end to end tests
- I didn't add tests for undefined data
- Error and loading states were not implemented
- _technically_ you could modify the css colors on the svg directly and it would be slightly more performant than rendering a different icon element.
- Hover/active/focus states for the favorite button should be improved
- Lazy loading / pagination

## Testing
You'll find a factory file to create random data for testing. With time, more objects in other test files would follow a similar pattern.

