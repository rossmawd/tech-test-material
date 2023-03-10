## How to Run

Please type `npm start` into your console to start up the development server

## Thought Process

### Observables and App State

- I have passed the observable `$towerData` down from the `app.component` to its child `farm-visualiser`, so that `farm-visualiser` can be the subscriber and only pass the relevant data (i.e. for tower 1 or tower 2 etc) to it's child components

### Component Tree

![component tree](./component-tree.jpg)

- please see ./component-tree.jpg

### Testing

- I've chosen to remove the default Karma test runner as I have more experience with Jest, and I believe it is faster to work with
- please run the unit tests with `npm run test:watch`

---

- I have aimed to only have 'dumb' 'presentational' components at the base of the component tree. As a result, their unit tests can be purely concerned with their appearance and accessibility (e.g. the 'tower-navigation' component).
- Higher components can be 'smart', 'container' components, responsible for logic. Their logic can be tested at the integration, or e2e test level
  - e.g. FarmVisualiserNavigation.cy.ts (see [e2e Testing](#cypress) below)

<a id="cypress"></a>

### e2e Testing; Cypress

- to run the cypress tests please type `npx cypress open` into your console.

## Shortcuts

- I've opted to use the Tailwind CSS framework and the Material component library to speed up development

- I used the AngularCLI to generate components (`ng g c <name>`) to prevent silly mistakes and save time

## Docker

Docker Pull Command

`docker pull rossmawd/tech-test-material`

## Assumptions

- I assumed this application would be part of a suite of functionality, and so provider a separate header so that a menu could be easily added to it to switch between different applications.
- I assumed that if the simulator returned a null value for one of the fields (e.g. `growthTray: null`) that an appropriate message, "No Tray in this Slot", should be displayed

## Things needed to make Production ready

- setting up pre-commit and pre-push hooks to enforce linting, code standards and automated running of tests
- re-evaluate combination of TailwindCSS and MaterialUI, as I've experienced some potential typography conflicts
- perhaps create a utility function to get rid the repetitive boilerplate that has cropped up in the unit tests ( i.e. the `provide: MATERIAL_SANITY_CHECKS` required to suppress errors)
- Mobile first, accessible design
