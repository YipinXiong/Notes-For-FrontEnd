# Material UI



## [Basic idea](https://material-ui.com/styles/basics/)

The underlying mechanism for Material-UI is `JSS`, which means writing "CSS" by JavaScript, which called **<u>JSS object</u>**.

This webpage introduces three basic hook apis in Material UI which I personally prefer interpreting them as ***three apis to style your components*** , that is:

### Hook:

```react
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default function Hook() {
  const classes = useStyles();
  return <Button className={classes.root}>Hook</Button>;
}
```

Use CamelCase, because it is actually javascript.  

Use the customized styles by using the returned `classes` object.

> Note that, Why do we call it Hook? `use` prefix indicates this is a hook function having side-effects.

### Styled Component:

```react
import React from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

export default function StyledComponents() {
  return <MyButton>Styled Components</MyButton>;
}
```

### High-order Component:

```react
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
};

function HigherOrderComponent(props) {
  const { classes } = props;
  return <Button className={classes.root}>Higher-order component</Button>;
}

HigherOrderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HigherOrderComponent);
```

>Note that: this is a convention to name a High-Order-Component function with a `with`. In this case, `withStyles` consumes a configure object, `styples` , and returns a new component by passing configurations through `props`.



## Nesting selectors

```js
const useStyles = makeStyles({
  root: {
    padding: 16,
    color: 'red',
    '& p': {
      color: 'green',
      '& span': {
        color: 'blue'
      }
    }
  },
});
```

## Adapting based on props

All three styles are covered in the page. See the demos there.