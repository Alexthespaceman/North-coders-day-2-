# Objects

Arrays are ordered collections of data we can use for storing multiple items. There are limitations to the use of arrays however:

```js
const details = ["Patricia", "Lloyd", 55, "St Marys", "Leigh", "Bolton"];
```

The array `details` stores multiple values representing details of a particular person. However, it becomes increasingly impossible to work out what the data represents as the only way of tracking items is by their index position.
We could instead use a `JavaScript` object in order to store the data values. An object is a collection of key-value pairs called **properties**. Below is an object with some data:

```js
const details = {
  firstName: "Patricia",
  lastName: "Lloyd",
  age: 55,
  placeOfWork: "St Marys",
};
```

---

## Accessing objects

Objects access refers to the process of "looking up" or accessing property values using a property key. Suppose we have an object with 2 properties, `name` and `age`

```js
const person = {
  name: "Anat",
  age: 24,
};
```

We can access the property value `"Anat"` by accessing the object with a property key:

```js
person.name; // evaluates to "Anat"
```

The above example shows dot notation where we access a property value by stating the name of an object writing a `.` and then adding a key after the dot. This notation will

### Dynamic access

Alternatively we could use a variable to access an object instead of dot notation. Consider the example below:

```js
```