# Async Exercise - The promisified book reservation (automatic)

Once again you have the book reservation example in index.js here. With the old callback style.

The example is updated and follows now at least the node callback convention (err, data). So we can convert this function to a promise now easily.

## Task

Please convert the findBook method to a promise. With util.promisify.

Then again update the calls to findBook and use the then() handler instead of passing a  callback

For the last case where we search a book that does not exist (=The DaVinciCode) => please add a catch handler to handle the error
