[![Build Status](https://travis-ci.org/team-olmen/olm_client.svg?branch=master)](https://travis-ci.org/team-olmen/olm_client)

# Olm Client 

Client for students to create multiple choice questions to test their knowledge of the stuff they've learned.

## Features

An Angular4-based client for olm_api (<https://github.com/team-olmen/olm_api>) which allows:

* add / modify / delete / undelete / reset `modules` - a collection of multiple-choice questions
* add / modify / delete / undelete / reset `mcqs` - the multiple-choice questions
* add / modify / delete `sessions` - test your knowledge against an individual collection of `mcqs`
* invite / modify / manage / delete `users`
* supports a simple hierarchy consisting of admins and users
* add / modify / delete `exams` - arbitrary collection of notes
* add / modify / delete `protocolls` - arbitrary flatfile / markdown-based notes for `exams` to share impressions, tips and help

*reset* means that old revisions of those items are kept by the server so one can go back and restore an arbitray version

## First Steps

### 0a. Install dependencies

You'll need:

* `Node > 7.0.0` & `NPM > 4.0.0` (e.g. from <https://nodejs.org/en/> or <https://github.com/creationix/nvm> if you want to have several different node version installed side-by-side)
* a `SASS` compiler (if you want to change the paint. Read some more about it over at <http://sass-lang.com/install>)

### 0b. Get going on Angular 4

Check out the great tutorial at <https://angular.io/>.

### 1. Check out the code

```bash
# create a directory for your great edits
mkdir olm_client
# get the source code
git clone https://github.com/team-olmen/olm_client
cd olm_client
# install dependencies
npm install
```

There might be some warnings about unmet peer dependencies. **Ignore them**. They won't stop you ;) 

### 3. Go and get 'em

You should be all set up now. And ready to work on the code. If you run into errors, go ahead and fix them (or report them to me ;) ). Same applies to this documentation which will - with your help - improve over time.

We use the **angular cli**, which gives you two options how you can see your code in action:

1.  Compile ("transpile") **J**ust-**I**n-**T**ime:

    This will reload the page as soon as a change in code is detected. Those reloads take a bit longer since the code is compiled during loading. This lets you test small changes faster and may be your preferred method for development.

2.  Compile **A**head-**O**f-**T**ime:

    This will take a while and leave you with a project ready to deploy. Sometimes the aot-compiler finds some errors in your code which were missed by the jit-compiler. So before you commit any changes compile aot and see if you've missed something.

#### Compile Just-In-Time

Simply run:

```bash
ng serve
```

Your browser will be fired up and the project is served to you.

#### Compile Ahea-Of-Time

After you compiled the project ahead-of-time the `/dist` folder will be populated. If you want to deploy the compiled project you'll need to transfer the contents of this folder to your server. Make sure the index.html will be found at the domain's / subdomain's root.

##### Compile & Uglify:

```bash
ng build --prod
```

Different environments (aka configurations) can be loaded with


```bash
ng build --prod -e <your-environment>
```

## Improving the code

### Versioning

olm_api uses semantic versioning (<http://semver.org/>).

`TL;DR`:

```
MAJOR.MINOR.PATCH

MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards-compatible manner, and
PATCH version when you make backwards-compatible bug fixes.
```

To mark pre-releases you may add:

* `-rc.[0-9]*` for release-candidates
* `-beta.[0-9]*` for beta-releases
* `-alpha.[0-9]*` for alpha-releases

### Deploying

We have a Travis CI setup on travis-ci.org which does the testing, building and deploying for us.
Go ahead and read the docs to find more about it.
In general changes pushed on branch master will be deployed to *<http://olmen.de>*. Changes pushed to branch develop will be deployed to *<http://client-test.olmen.de>*.