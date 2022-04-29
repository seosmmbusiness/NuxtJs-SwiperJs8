# Swiperjs8-Nuxt

Nuxt2 project with tailwindcss v3, postcss v8, prettier v2, eslint v8, stylelint v14 and swiperjs v8.

## Example How to make Swiper JS 8 work with Nuxt Js 2
Just add `build.standalone: true` in `nuxt.config.js` and use the simiale code as written in [NuxtJs-SwiperJs7](https://github.com/seosmmbusiness/NuxtJs-SwiperJs7) and [NuxtJs-SwiperJs](https://github.com/seosmmbusiness/NuxtJs-SwiperJs) to make it work.
Additional you need to add `externals` to your webpack config.

Currently tested with "swiper": "^8.1.4"

Project also uses:
    "nuxt": "^2.15.7",
    "@nuxtjs/tailwindcss": "^5.0.3",
    "postcss": "^8.3.5",
    "prettier": "^2.3.2",
    "stylelint": "^14.8.0",
    "eslint": "^8.14.0",

On 29.04.2022 it has no deps needed to update.

The project contains some unused dependencies for testing purposes. In a real project, you may have many more dependencies and there may be some bugs.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
