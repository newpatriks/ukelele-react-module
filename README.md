## Ukelele React Module
This is a very basic react module that generates the headstock and the strings of an Ukelele in svg. It can also build a chord using the `chord` parameter when it gets created.

### Installation

- `src/ukelele.jsx`: Code for the component
- `src/ukelele.js`: Optional file with the basic chords for Ukelele.

### How to use
After importing the files to your code, you can do two different thigs:

1. Load a chord from ukelele.js
```
render() {
    return(
        <Ukelele chord={'A'}/>
        <Ukelele chord={'Cm'}/>
    )
}
```

2. Load your own chord.

The chords are structured as arrays of finger positions. So, imagine the chord you want to show is string 1 and 2, from the 2nd fret and using the finger 1 (index):

```
let myChord = [{
    string: [1,2],
    fret: 2,
    fingerId: 1
}];
```
And now you want to add one more finger to it. You want to use the middle finger (fingerId = 2) to press the 3th string from the 3th fret:

```
let myChord = [{
    string: [1,2],
    fret: 2,
    fingerId: 1
},{
    string: [2],
    fret: 3,
    fingerId: 2
}];
```

Finally you could send this to the component: (this is just an example, actually it'd sound really bad...)

```
<Ukelele chord={myChord}/>
```

### Credits
Jordi Llobet | @newpatriks
