brepi is a
[single-page application](https://en.wikipedia.org/wiki/Single-page_application)
where you can discover Brewdog's beers.

## The purpose of the project

The purpose of the project is to get familiar with React itself. By the end of
this project you will have a basic understanding of:

- how to work with React
- how to work with components
- how to pass properties around
- how to handle the state of a component
- how to write JSX
- and many more

But you are not going to get a deep understanding of React and that is not the
purpose of this project.

## What are you going to use?

- [create-react-app](https://github.com/facebook/create-react-app)
  - We don't want to waste time on setting up the React environment
- [Ant Design](https://ant.design/)
  - For design elements
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
  - Try **not** to use
    [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [Punk API](https://punkapi.com/)
  - For the data about the beers

## What are you NOT going to use?

- [Redux](https://redux.js.org/)
- [React Router](https://reacttraining.com/react-router/)
- and many more

## Specification

### Main page

The main page must display:

- the header
- at least 6 beer tiles
- the paginator

### Header

The header must display:

- a heading

### Beer tile

The beer tile must display the beer's:

- image
- name
- description on click

```gherkin
Given a beer tile without description
When I click on the beer tile
Then I should see the description

Given a beer tile with description
When I click on the beer tile
Then I should not see the description

Given a beer tile ("BT1") with description
Given an other beer tile ("BT2") without a description
When I click on BT2
Then I should see the description of BT2
But I should not see the description of BT1
```

### Paginator

The paginator should enable the user to list the next or previous page of beers.

### Mockup

You can use the following mockup to do the application but feel free to make it
unique!

![the mockup of brepi](brepi-mockup.jpg)
