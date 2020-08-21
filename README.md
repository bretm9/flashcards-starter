# FlashCards

> A Front-End Project by [Bret Merritt](https://github.com/bretm9)

---
## Contents
1. [Overview](#overview)
1. [Technologies](#technologies)
1. [Gameplay](#gameplay)
1. [Install Guide](#install-guide)
---

## Overview
I am a Front-End student at Turing School of Software and Design. This project was my first assignment for Module 2. My main focus for this project was test-driven-design (or TDD).

This console tool allows users to play games of flashcards, and track their correct guesses.

## Technologies

  - Javascript
  - Mocha/Chai
  - Linter
  - Node
  - Git

 > [Back to the top](#flashcards)
---

# Gameplay

When the game starts, a message pops up in the console telling the player that a new game has begun, and indicates how many flashcards are in the deck.

The player is provided with a new question in the console, along with three answers to choose from. 

If the player answers correctly or incorrectly, appropriate feedback is produced, and the player is promted with a new question. 

Once all the flashcards have been answered, the console produces a message about the percentage of questions the player answered correctly, and the game ends.

![flash cards example gif](https://media.giphy.com/media/1zkb1q58eTiTH6D7wc/giphy.gif)
 > [Back to the top](#flashcards)
---

# Install Guide

## Fork This Repo

On the top right corner of this page, click the **Fork** button.

## Setup

Clone down the forked repo (from your GitHub):

```bash
git clone git@github.com:bretm9/flashcards-starter.git
```

Once you have cloned the repo, change into the directory using `cd` and install the library dependencies. Run:

```bash
npm install
```

## Start Game

Run `node index.js` from the root of your cloned repo to start the game.

## How To Play

When playing a game, use the arrow keys to select your answer, and hit enter to confirm. 
To exit the game and get back to your normal terminal functionality, hit control-C.
 
 > [Back to the top](#flashcards)
---
