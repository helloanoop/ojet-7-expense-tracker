# ojet-7-expense-tracker
A Simple Expense Tracker app built using OJET 7

### Dependencies
* Node > v8
* Ojet CLI 7.1.0
```bash
npm install -g @oracle/ojet-cli@7.1.0
```

### Workflow
```bash
# install
npm install

# build
ojet build

# run
ojet serve

# copy jet composites
cp -R src/js/jet-composites/* web/js/jet-composites/
```

### Theming
```bash
# add support for theming
ojet add sass

# add a theme
ojet create theme blueberry

# build with theme
ojet build --theme=blueberry

# serve with theme
ojet serve --theme=blueberry
```

## Contribute
Pull Requests always welcome, as well as any feedback or issues.
