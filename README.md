# Example Remix Vite App

* This is an example of a Remix Vite app that consumes a component libary that is using Stylex
* If you go to `app > routes > _index.tsx` this is the one file importing a component (`Button`) from the component library. It is also the only component in the component library that is using StyleX
* Component library: https://github.com/BMCwebdev/rac-stylex
* If you remove the use of the `colors` vars in the Button component (import statement and actual usage), everything will work fine.


***
Original ReadMe below
***

## Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
