# gcds-svelte-template

This template is a starting point for building a [SvelteKit](https://kit.svelte.dev/) application with the [Government of Canada Design System](https://design-system.alpha.canada.ca/en/).

*Please note GCDS is still in alpha and this template is largely subject to change as the design system evolves and guidance becomes available. This is also an experimental, open source project that is not officially supported or endorsed by the Government of Canada.*

## About

This template utilizes GCDS's Web Components library to provide a starting point for building a SvelteKit application. [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) are a set of HTML elements that can be used to build a website or application. They are designed to be framework agnostic, meaning they can be used with any JavaScript framework.

## Get Started

- Clone this repository
- Install the dependencies with `npm install`
- Run the development server with `npm run dev`

To build and run the production server, use `npm run build` then `npm run preview`.

## Directory Structure

```
.
├── src
│   ├── lib
│   │   ├── components
│   │   ├── helpers
│   │   └── stores
│   ├── routes
│   │   ├── en
│   │   │   ├── page-english
│   │   │   │   ├── +layout.svelte
│   │   │   │   └── +page.svelte
│   │   │   ├── +layout.svelte
│   │   │   └── +page.svelte
│   │   ├── fr
│   │   │   ├── page-francais
│   │   │   │   ├── +layout.svelte
│   │   │   │   └── +page.svelte
│   │   │   ├── +layout.svelte
│   │   │   └── +page.svelte
│   │   ├── +layout.js
│   │   ├── +layout.svelte
│   │   └── +page.svelte
│   └── app.html
├── static
├── svelte.config.js
└── vite.config.js
```
The question of where to place page specific components is left up to the developer, for the above structure, I would recommend placing them in `$lib/components/pages/page-english`, and ensuring they receive a `lang` prop. I generally would also advise in this case to additionally create a `$lib/components/shared` directory for components that are shared between pages.