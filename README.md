# King's Lab Academy - Intermediate Sessions

Prerequisite's to follow along with this tutorial:

- Install Node.js - this allows you to run javascript projects
- Install an editor, ideally VSCode

Setup the base Next.js project by opening a terminal/command prompt and write the following

```sh
npx create-next-app@latest
```

Use the default options when prompted:

- Use typescript
- Use tailwind.css
- Do not use `src/` directory

To start the project, you can run

```sh
npm run dev
```

## Academy Structure

1. **Week 1** - Intro to frontend development with React, Next.js and Tailwind
2. **Week 2** - Backend development, databases and auth with Prisma, Postgres (NeonDB), NextAuth
3. **Week 3** - Break for Reading week
4. **Week 4** - External APIs with Stripe, Google calendar
5. **Week 5** - Presentations on projects

## Part 1

### Next.js

We will be using Next.js which is a web framework that wraps the React library, by providing more complex features like routing and SSR and CSR

This project will have the following structure.

```
.
|-- app/
|   |-- page.tsx   // Page files define a page in the site
|   |-- layout.tsx // Layout files define a template for all sub routes
|   |-- calendar/
|   |   `-- [id]/
|   |       |-- page.tsx
|   |       |-- layout.tsx
|   |       `-- book/
|   |           `-- [slot]/
|   |               `-- page.tsx
|   |-- api/
|   |   `-- userInfo/
|   |       `-- route.ts // api routes are always route.ts files
|   `-- globals.css      // The only css file you really need
|-- public/
|   `-- // All the images and non-react files, *.svg *.png *.jpg
|-- components/
|   `-- // Reusable UI widgets, we will add a Calendar widget here
|-- lib/
|   `-- // typescript files containing utility functions
|-- ...
|-- next.config.ts     // project and router settings
|-- tailwind.config.ts // css settings and presets
|-- package.json       // dependencies and cli methods
`-- ...
```

Every page to exist in the website will be under the [app](./app/) directory and Next.js uses directory routing:

- `app/page.tsx` will be the home page `/` at `www.yoursite.com/`
- `app/calendar/[id]` will be accessible at `/calendar/john-cenas-schedule` where routes with `[...]` indicate path parameters

### Tailwind

Instead of using boring old vanilla CSS, we will use tailwind which provides every css class you will need. You can find all the available classes in the [docs](https://tailwindcss.com/docs/styling-with-utility-classes) (Pro tip: Ctrl-/ for search) (Pro Pro tip: install the Tailwind CSS Intellisense extension for VSCode)

You can configure you projects colour scheme in the [tailwind.config.ts](./tailwind.config.ts) file where you can provide your own colours, e.g.

```js
{
  ...
  extend: {
    colors: {
      accent: "#008AFF",
    },
  },
}
```

Will allow you to use `bg-accent` and `text-accent` and `border-accent`.

If you don't wanna do this, you can always provide a specific value with `[]` e.g. `bg-[#ff00ff]` to set the background to a specific colour or `p-[3px]` for 3px of padding

### React

To get started, lets create a calendar component. You can find the final product and comments in the [components/Calendar.tsx](/components/Calendar.tsx) file

> The golden rule of webdevelopment, someone has already made a javascript library to do the thing you want to do

We will be importing the `lodash` and `date-fns` packages to help us build our frontend. You can import any package you want with:

```sh
npm i lodash date-fns ...
```

If you find that the types for a given package are missing (you notice vscode is giving you alot of red lines and unknown type errors). Try run the following incase the types are packaged separately:

```sh
npm i @types/lodash
```

## Part 2

## Part 3

## Part 4

## Part 5
