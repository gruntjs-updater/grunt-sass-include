# grunt-sass-include

[![Build Status](https://travis-ci.org/jchn/grunt-sass-include.svg?branch=master)](https://travis-ci.org/jchn/grunt-sass-include)

> Include sass files into a single file, so you can dynamically import new files

### Motivation

This plugin is made because you cannot import globs inside of sass. This plugin will let you do the globbing in grunt which will generate a sass file with all the separate imports in sass. Both sass and scss syntaxes are supported. You can then import this file inside of your main sass file.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sass-include --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sass-include');
```

## The "sass_include" task

### Overview
In your project's Gruntfile, add a section named `sass_include` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sass_include: {
    'import/to/this/file.sass': ['files/to/import/**/*.sass']
  },
});
```

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  sass_include: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* Nov. 03, 2014 - v0.1.0
