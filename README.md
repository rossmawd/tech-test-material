## How to Run

...

## Thought Process

### Observables and App State

- I have passed the observable $towerData down from the app.component to its child farm-visualiser, so that farm-visualiser can be the subscriber and only pass the relevant data (i.e. for tower 1 or tower 2 etc) to it's child components

### Testing

- I've chosen to remove the Karma test runner as I have more experience with Jest, and I believe it is faster to work with

## Shortcuts

- I've opted to use the Tailwind CSS framework and the Material component library to speed up development

- I used the AngularCLI to generate components (`ng g c <name>`) to prevent silly mistakes and save time
