GhostGeneratorControl
=====================

Control displaying of Generator meta tag for Ghost blog


This app helps you control displaying of generator meta tag for Ghost blog that mentioned in this article [How to Control Ghost Blog's Generator Meta Tag](/how-to-control-ghost-generator-meta-tag/).

## Download
[Download GeneratorControl for Ghost](http://w3ball.com/download-generator-meta-tag-controlling-app-for-ghost/)

## Features
+ Hide Ghost's version mode.
+ Hide generator meta tag mode.


## Dependencies
+ Ghost App `ghost-app`.
+ Lo-Dash `lodash`.

## Compatibility

Ghost 0.5 (Latest is recommended)



## Installing
**Step 1**: Extract the downloaded file first.
**Step 2**: Open `config.js`

    // # GeneratorControl Configuration
    config = {
        // Available values: hide_all (default) | hide_version
        mode: 'hide_version'
    };

    // Export config
    module.exports = config;

Choose the working mode you want. It can be `'hide_version'` or `'hide_all'`. Save the file.

**Step 3**: Upload the folder `generatorcontrol` to `/content/apps/`

**Step 4**:
Use the sqllite database manager which you are family with, open up the database, and add the name of app to `activeApps` field in the `settings` table.

In this case, the app'name is `generatorcontrol`, the value of `activeApps` should be `["generatorcontrol"]`. Double quotes are required.
![install Generator MetaTag Controlling for Ghost](http://w3ball.com/content/images/2014/10/ghost-install-app.jpg)


Once added, restart Ghost and app will be installed & loaded. Once success, you can see the field `installedApps` also contains `["generatorcontrol"]`.

## Changelog
0.0.1 Initial publish


## Copyright & License

Copyright (c) 2014 W3Ball.com - Released under the MIT license.

## Problem?
Please feel free to leave a comment for problems you got on [W3Ball.com](http://w3ball.com/download-generator-meta-tag-controlling-app-for-ghost/)

Happy blogging with Ghost!
