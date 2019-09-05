/*
 * Copy all the content into browser's console to see the result
 *
 * It transforms a CSV string into a list of key-value objects
 */

const merge = (objects) => Object.assign(...objects);

const pick = (columns) => (xs) =>
  merge(columns.map((column) => ({[column.name]: xs[column.index]})));

const readFile = (fileName) => 'Bob,32\nAlice,25\n';

const parserFactory = ({delimiter, columns}) => (csvString) =>
  csvString
    .trim()
    .split('\n')
    .map((x) => x.split(delimiter))
    .map(pick(columns));

const parseNameAndAge = parserFactory({
  delimiter: ',',
  columns: [{name: 'name', index: 0}, {name: 'age', index: 1}],
});

parseNameAndAge(readFile('students.csv'));
