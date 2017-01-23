# Styleguides

## A presentation and resources about modern styleguides platforms

The presentation and features platforms are mostly orientated towards react components.

## SourceJS

If you're looking for a styleguide platform that is technology agnotic, SourceJS might be something to look at.

It features many options out of the box, and it's easy to add your own templates engines. Out of the box it supports `EJS`, `Markdown`, `HTML`.
The example in this repository enable `Jade (pug)`, `DSS`, and `React`.

### Running the example

2 examples are availeble, if you're going to use react, you should use the `sourcejs-react` example.
If you want to see the technical options you have try the `sourcejs-showcase` example.

To start a SourceJS example run:
```
npm run sourcejs-react:install
npm run sourcejs-react:start
```

## Storybook

If you need a react-component inventory platform, react storybook is a popular choice right now. It's easy to set up, flexible in use, and super fast.
It's also featuring a healty plugin system.

### running the example

1 example is availeble with a few useful plugin installed: `info`, `knobs`.

To run the example:
```
npm run storybook:start
```


## The presentation

The presentation used spectacle, which is a react presentation tool. It's great for giving react-topic presentation,
because you can write parts of your presentation **as react components**.

### running the presentation

Run the presentation by:
```
npm run presentation:start
```

Running the presentation will automaticlty open a browser window.

## Running the entire suite

Install `pm2` globally:
```
npm i pm2 -g
```

Running all examples and the presentation by:
```
npm run start
```

Once it's running you can monitor the running applications using `pm2 monit`, `pm2 logs`, `pm2 list`.
Stop all application using `pm2 stop all`.
