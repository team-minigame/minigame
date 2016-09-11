# MINI GAME

## Backround

This is a tiny school project to explore build and automation tools. 

### About

The application is a little game (N.B. in swedish) where you guess what historical events occurs before another.

### Technologies used  

##### Main platform:

Node, Express, Angular, Firebase

##### Build/Automation tools:

- Browserify for bundling and compressing
- Mocha/Chai for unit testning
- Gulp for automating Browserify and SASS (including livereload, autoprefixer, rename, sass, sourcemaps, streamify, uglify & vinyl source stream).

### Credits 

[Hanna Andersson](https://github.com/hannaand), [Andreas Dagnell](https://github.com/andreasdjs), [Robert Lindell](https://github.com/robertlindell)

## Installation

#### Install project

```shell
$ npm install
```

## Start

#### Start SASS generation and activate live reload

```shell
$ gulp
```

#### Start server

```shell
$ npm start
```

#### Run tests

```shell
$ npm test
```

## Contributing

### A) Join the team and use git branches

#### Pre-req: contact owners to get involved in the team

#### 1. Create local branch on GitHub pages

```shell
git branch <branch_name>
git checkout <branch_name>
git pull origin <branch_name>
```
#### 2. Editing file

```shell
git add .
git commit -m “Comment”
```

#### 3. Pushing to github pages

```shell
git push origin <branch_name>
```

#### 4. Creaye pull request på Github Pages

```shell
Go to: https://github.com/team-minigame/minigame
Click: New pull request

Compare <branch_name> with master

Merge
```
#### 5. Delete branch locally:

```shell
git branch -d <feature-branch>
```

### B) Fork

1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request


