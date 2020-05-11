11ty-contentful-gallery
=====

An example photo Gallery made using [Contentful](https://www.contentful.com/) and [11ty](https://www.11ty.dev/). It's deployed via GitHub Actions onto GitHub Pages.


What is this about?
=====

This example contains [11ty Javascript Data Files](https://www.11ty.dev/docs/data-js/) that take Contentful provided content to build a photo gallery. The front end utilizes [Bulma](https://bulma.io/) for layout and styling. When code is committed, this triggers a build process that utilizes (GitHub Actions for GitHub Pages)[https://github.com/peaceiris/actions-gh-pages] to build and deploy the website.


Getting started
=====

### Requirements

To deploy this project you'll need accounts for the following services:

- [Contentful](https://www.contentful.com)
- GitHub

### Setup

* Fork and clone this repository

#### The Contentful part (optional)

This repo currently uses an already existing Contentful space. If you'd like to replace this space with your own, so you can modify the content, you're welcome to do so.

* Create a new space using the Contentful CLI
  * `$ contentful space create --name "continuous delivery example"`
* Set the newly created space as default space for all further CLI operations
  * `$ contentful space use` (this will present you with a list of all available spaces – choose the one you just created)
* Import the provided content model (`./import/export.json`) into the newly created space
  * `$ contentful space import --content-file ./import/export.json`
* Update the space id and access token in [contentful-logo.js](_data/contentful-logo.js) and [contentful-photos.js](_data/contentful-photos.js) to use the api keys from your newly created space.

  #### The GitHub part (optional)

  Since we're using GitHub Actions, we'll be able to use the existing [GitHub Actions for GitHub Pages](https://github.com/peaceiris/actions-gh-pages) repo. On your forked repo you'll need to [add a SSH Deploy key so GitHub actions will be able to deploy to GitHub pages](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-create-ssh-deploy-key). This repo already contains a [functional build script](.github/workflows/eleventy_build.yml) that will trigger when you make a commit.

License
=======

Copyright (c) 2020 Contentful GmbH. Code released under the MIT license. See [LICENSE](LICENSE) for further details.
