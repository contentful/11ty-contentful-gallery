
11ty-contentful-gallery
=====

An example photo Gallery made using [Contentful](https://www.contentful.com/) and [11ty](https://www.11ty.dev/). It's deployed via GitHub Actions onto GitHub Pages.

![Screenshot of Front Page](images/front_page.png)

What is this about?
=====

This example contains [11ty Javascript Data Files](https://www.11ty.dev/docs/data-js/) that take Contentful provided content to build a photo gallery. The front end utilizes [Bulma](https://bulma.io/) for layout and styling. When code is committed, this triggers a build process that utilizes [GitHub Actions for GitHub Pages](https://github.com/peaceiris/actions-gh-pages) to build and deploy the website.

![Screenshot of Photo Page](images/photo_page.png)

Getting started
=====

### Requirements

To deploy this project you'll need accounts for the following services:

- [Contentful](https://www.contentful.com)
- GitHub

### Setup

* Fork and clone this repository

#### The Contentful part (optional)

This repo currently uses an existing Contentful space. If you'd like to replace this space with your own, so you can modify the content, you're welcome to do so.

* Create a new space using the [Contentful CLI](https://github.com/contentful/contentful-cli)
  * `$ contentful space create --name "11ty-gallery"`
* Set the newly created space as default space for all further CLI operations
  * `$ contentful space use` (this will present you with a list of all available spaces – choose the one you just created)
* Import the provided content model (`./import/export.json`) into the newly created space
  * `$ contentful space import --content-file ./import/export.json`
* Update the space id and access token in [.env](.env)to use the api keys from your newly created space.

* On Contentful we have 2 Content Types. `Brand` and `photoSets`.
  * `Brand` is used to set the logo at the top of each page and name the website. You should only have one instance of this content type.
  * `photoSet` is where each set of photos lives. You can create as many of these, with as many photos as you want.

#### Build the site

* On the command line, navigate to your cloned repo and install your dependencies with `npm install`.
* Run Eleventy with `npx eleventy --serve`. We're using the `--serve` argument so eleventy will host the site for us.
* Navigiate to localhost:8080 to view the site.

#### The GitHub part (optional)

Since we're using GitHub Actions, we'll be able to use the existing [GitHub Actions for GitHub Pages](https://github.com/peaceiris/actions-gh-pages) repo. On your forked repo you'll need to [add an SSH Deploy key so GitHub actions will be able to deploy to GitHub pages](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-create-ssh-deploy-key). This repo already contains a [functional build script](.github/workflows/eleventy_build.yml) that will trigger when you make a commit.

Implementation Notes
=======

* This example uses one layout:
    - `_includes\layout.liquid`: the top level HTML structure
 * This example uses [liquid](https://www.11ty.dev/docs/languages/liquid/) templates to generate pages.
   - `index.liquid` generates the homepage
   - `photoSet-pages.liquid` takes a look for all content on Contentful of type `photoSet`. It creates a directory for each photoSet.


License
=======

Copyright (c) 2020 Contentful GmbH. Code released under the MIT license. See [LICENSE](LICENSE) for further details.
