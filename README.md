# Quirkles

## Who am I?
A software developer from toronto. I like to build small apps, libraries,
scripts, and I host them here. 

Many things here are incomplete or half working and I may or may not come back
to them, I just keep things here as habit now.

## What is this?

An nx based monorepo containing many of my libraries and projects. The primary
reason for this monorepo to exist is the react component library, QDS, which
I intend to build out to make it easier to scaffold frontend applications.
There is also the advantage of nx generators, making it easy to spin up front
end projects with a css theme set up.

## Theme demos 

`mpx mx run theme-demos:serve`

### Generators

#### Themed react front end application

`npx nx generate @quirkles/generators:react-frontend-themed New-App`

serve it

`npx nx run newapp:serve`

Note: If you run this multiple times you'll need to alter the port the dev server listens on to avoid conflicts.
