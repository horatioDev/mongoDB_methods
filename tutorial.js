// Explanation of MongoDB Code Snippets with Example Outputs


// INSERT ---------------------------------------------------------------------
// db.collection.insertOne({document})
// db.collection.insertOne({field: dataType})
// Inserting a single document into the 'students' collection with insertOne()
// Corrected Syntax: {name:"Ray", age:4, gpa:4.0}
db.students.insertOne({name:"Ray", age:4, gpa:4.0});

// Inserting multiple documents into the 'students' collection with insertMany()
// db.collection.insertOne({document1}, {document2}, {document3})
// db.collection.insertOne({field: dataType}, {field: dataType}, {field: dataType})
// Corrected Syntax: {name: "Xavier", age:36, gpa:3.6}, {name:"Mystery", age: 30, gpa: 3.0}
db.students.insertMany([
    {name: "Xavier", age:36, gpa:3.6},
    {name:"Mystery", age: 30, gpa: 3.0},
    {name: "horatioDev", age:40, gpa:4.0}
]);
// ----------------------------------------------------------------------------


// DATA TYPES -----------------------------------------------------------------
/*
field: dataType:

name: 'string' || "string",
age: number,
gpa: double,
fullTime: boolean,
registerDate: dateObj: new Date()
graduationDate: null,
languages: array = [ 'arrItem1', 'arrItem2', 'arrItem3' ],
address: nestedDocument = { street: '123 Fake St.', city: 'New City', zip: 12345 } 
*/

db.students.insertOne({name: 'Horatio',
age: 4,
gpa: 4,
fullTime: false,
registerDate: new Date(),
graduationDate: null,
languages: [ 'JavaScript', 'Express.js', 'MongoDB' ],
address: { street: '123 Fake St.', city: 'New City', zip: 12345 } })

/*
Example Output:
{
  name: 'Horatio',
  age: 4,
  gpa: 4,
  fullTime: false,
  registerDate: ISODate('2024-01-31T18:06:20.670Z'),
  graduationDate: null,
  languages: [ 'JavaScript', 'Express.js', 'MongoDB' ],
  address: { street: '123 Fake St.', city: 'New City', zip: 12345 } 
}
*/
// ----------------------------------------------------------------------------


// SORTING --------------------------------------------------------------------
// db.collection.find().sort({field: number })
// number = 1 => Ascending
// number = -1 => Descending

// Sorting documents in ascending order by 'name'
db.students.find().sort({name:1});
/*
Example Output:
[
  { "_id": ObjectId("65ba88c6dc351f1e416e15e4"), "name": "Mystery", "age": 30, "gpa": 3 },
  { "_id": ObjectId("65ba828adc351f1e416e15e2"), "name": "Ray", "age": 4, "gpa": 4 },
  { "_id": ObjectId("65ba88c6dc351f1e416e15e3"), "name": "Xavier", "age": 36, "gpa": 3.6 },
  { "_id": ObjectId("65ba88c6dc351f1e416e15e5"), "name": "horatioDev", "age": 40, "gpa": 4 },
  { "_id": ObjectId("65ba8c1cdc351f1e416e15e6"), "name": "Horatio", "age": 4, "gpa": 4 }
]
*/

// Sorting documents in descending order by 'name'
db.students.find().sort({name:-1});
/*
Example Output:
[
  { "_id": ObjectId("65ba8c1cdc351f1e416e15e6"), "name": "Horatio", "age": 4, "gpa": 4 },
  { "_id": ObjectId("65ba88c6dc351f1e416e15e5"), "name": "horatioDev", "age": 40, "gpa": 4 },
  { "_id": ObjectId("65ba88c6dc351f1e416e15e3"), "name": "Xavier", "age": 36, "gpa": 3.6 },
  { "_id": ObjectId("65ba828adc351f1e416e15e2"), "name": "Ray", "age": 4, "gpa": 4 },
  { "_id": ObjectId("65ba88c6dc351f1e416e15e4"), "name": "Mystery", "age": 30, "gpa": 3 }
]
*/

// Sorting documents in ascending order by 'gpa'
db.students.find().sort({gpa:1});
/*
Example Output:
[
  { "_id": ObjectId("65ba88c6dc351f1e416e15e4"), "name": "Mystery", "age": 30, "gpa": 3 },
  { "_id": ObjectId("65ba88c6dc351f1e416e15e3"), "name": "Xavier", "age": 36, "gpa": 3.6 },
  { "_id": ObjectId("65ba828adc351f1e416e15e2"), "name": "Ray", "age": 4, "gpa": 4 },
  { "_id": ObjectId("65ba88c6dc351f1e416e15e5"), "name": "horatioDev", "age": 40, "gpa": 4 },
  { "_id": ObjectId("65ba8c1cdc351f1e416e15e6"), "name": "Horatio", "age": 4, "gpa": 4 }
]
*/
// ----------------------------------------------------------------------------


// LIMITING -------------------------------------------------------------------
// db.collection.find().limit(number)
// number = the amount of records to return from the database query

// Limiting the number of documents returned to 1
db.students.find().limit(1);
/*
Example Output:
[
  { "_id": ObjectId("65ba828adc351f1e416e15e2"), "name": "Ray", "age": 4, "gpa": 4 }
]
*/

// Limiting the number of documents returned to 3
db.students.find().limit(3);
/*
Example Output:
[
  { "_id": ObjectId("65ba828adc351f1e416e15e2"), "name": "Ray", "age": 4, "gpa": 4 },
  { "_id": ObjectId("65ba88c6dc351f1e416e15e3"), "name": "Xavier", "age": 36, "gpa": 3.6 },
  { "_id": ObjectId("65ba88c6dc351f1e416e15e4"), "name": "Mystery", "age": 30, "gpa": 3 }
]
*/

// Sorting documents in descending order by 'gpa' and limiting to 1
db.students.find().sort({gpa:-1}).limit(1);
/*
Example Output:
[
  { "_id": ObjectId("65ba828adc351f1e416e15e2"), "name": "Ray", "age": 4, "gpa": 4 }
]
*/
// ----------------------------------------------------------------------------

// FIND -------------------------------------------------------------------
// db.collection.find({query}, {projection})
db.students.find({}, {name:true})
/*
Example Output: 
[
  { _id: ObjectId('65ba828adc351f1e416e15e2'), name: 'Ray' },
  { _id: ObjectId('65ba88c6dc351f1e416e15e3'), name: 'Xavier' },
  { _id: ObjectId('65ba88c6dc351f1e416e15e4'), name: 'Mystery' },
  { _id: ObjectId('65ba88c6dc351f1e416e15e5'), name: 'horatioDev' },
  { _id: ObjectId('65ba8c1cdc351f1e416e15e6'), name: 'Horatio' }
]
*/
db.students.find({}, {_id:false, name:true})
/*
Example Output: 
[
  { name: 'Ray' },
  { name: 'Xavier' },
  { name: 'Mystery' },
  { name: 'horatioDev' },
  { name: 'Horatio' }
]
*/
db.students.find({}, {_id:false, name:true, gpa:true})
/*
Example Output: 
[
  { name: 'Ray', gpa: 4 },
  { name: 'Xavier', gpa: 3.6 },
  { name: 'Mystery', gpa: 3 },
  { name: 'horatioDev', gpa: 4 },
  { name: 'Horatio', gpa: 4 }
]
*/
// ----------------------------------------------------------------------------

// UPDATING -------------------------------------------------------------------
// Updating a document to set the 'fullTime' field to true for the student named 'Ray'
// db.collection.updateOne({filter}, {update})
// db.collection.updateOne({field: dataType}, {$set: {newField:newDataType}})

// Corrected Syntax: {_id: ObjectId('65ba828adc351f1e416e15e2')}
db.students.updateOne({_id: ObjectId('65ba828adc351f1e416e15e2')}, {$set: {fullTime:true}});
/*
Example Output:
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
*/

// Finding the student named 'Ray' after the update
db.students.find({name:"Ray"});
/*
Example Output:
[
  {
    _id: ObjectId('65ba828adc351f1e416e15e2'),
    name: 'Ray',
    age: 4,
    gpa: 4,
    fullTime: true
  }
]
*/

// Updating a document to unset the 'fullTime' field for the student named 'Ray'
// db.collection.updateOne({filter}, {update})
// db.collection.updateOne({field: dataType}, {$unset: {fieldToRemove:''}})

db.students.updateOne({name: "Ray"}, {$unset: {fullTime: ''}});
/*
Example Output:
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
*/

// Updating a document to unset the 'fullTime' field for the student named 'Xavier'
db.students.updateOne({name: "Xavier"}, {$unset: {fullTime: ''}});
/*
Example Output:
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
*/

// Finding all students after the updates
db.students.find();
/*
Example Output:
[
  {
    _id: ObjectId('65ba828adc351f1e416e15e2'),
    name: 'Ray',
    age: 4,
    gpa: 4,
    fullTime: false
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e3'),
    name: 'Xavier',
    age: 36,
    gpa: 3.6,
    fullTime: false
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e4'),
    name: 'Mystery',
    age: 30,
    gpa: 3,
    fullTime: false
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e5'),
    name: 'horatioDev',
    age: 40,
    gpa: 4,
    fullTime: false
  },
  {
    _id: ObjectId('65ba8c1cdc351f1e416e15e6'),
    name: 'Horatio',
    age: 4,
    gpa: 4,
    fullTime: false,
    registerDate: ISODate('2024-01-31T18:06:20.670Z'),
    graduationDate: null,
    languages: [ 'JavaScript', 'Express.js', 'MongoDB' ],
    address: { street: '123 Fake St.', city: 'New City', zip: 12345 } 
  }
]
*/

// Updating multiple documents to set the 'fullTime' field to true for students where it doesn't exist
db.students.updateMany({fullTime:{$exists:false}}, {$set: {fullTime:true}});
/*
Example Output:
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
*/

// Finding all students after the bulk update
db.students.find();
/*
Example Output:
[
  {
    _id: ObjectId('65ba828adc351f1e416e15e2'),
    name: 'Ray',
    age: 4,
    gpa: 4,
    fullTime: true
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e3'),
    name: 'Xavier',
    age: 36,
    gpa: 3.6,
    fullTime: true
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e4'),
    name: 'Mystery',
    age: 30,
    gpa: 3,
    fullTime: true
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e5'),
    name: 'horatioDev',
    age: 40,
    gpa: 4,
    fullTime: true
  },
  {
    _id: ObjectId('65ba8c1cdc351f1e416e15e6'),
    name: 'Horatio',
    age: 4,
    gpa: 4,
    fullTime: true,
    registerDate: ISODate('2024-01-31T18:06:20.670Z'),
    graduationDate: null,
    languages: [ 'JavaScript', 'Express.js', 'MongoDB' ],
    address: { street: '123 Fake St.', city: 'New City', zip: 12345 } 
  }
]
*/
// ----------------------------------------------------------------------------


// DELETING -------------------------------------------------------------------
// db.collection.deleteOne({field: dataType})
// db.collection.deleteMany([{field: dataType}, ...])

db.students.deleteOne({name: "Ray"}) // Deletes the document with the field `name` equal to `"Ray"`
/*
Example Output:
{ acknowledged: true, deletedCount: 0 }
*/

db.students.find()
/*
Example Output:
[
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e3'),
    name: 'Xavier',
    age: 36,
    gpa: 3.6,
    fullTime: true
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e4'),
    name: 'Mystery',
    age: 30,
    gpa: 3,
    fullTime: false
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e5'),
    name: 'horatioDev',
    age: 40,
    gpa: 4,
    fullTime: false
  },
  {
    _id: ObjectId('65ba8c1cdc351f1e416e15e6'),
    name: 'Horatio',
    age: 4,
    gpa: 4,
    fullTime: false,
    registerDate: ISODate('2024-01-31T18:06:20.670Z'),
    graduationDate: null,
    languages: [ 'JavaScript', 'Express.js', 'MongoDB' ],
    address: { street: '123 Fake St.', city: 'New City', zip: 12345 }
  }
]
*/

db.students.deleteMany({registerDate: {$exists:false}})
/*
Example Output:
{ acknowledged: true, deletedCount: 3 }
*/

db.students.find()
/*
Example Output:
[
  {
    _id: ObjectId('65ba8c1cdc351f1e416e15e6'),
    name: 'Horatio',
    age: 4,
    gpa: 4,
    fullTime: false,
    registerDate: ISODate('2024-01-31T18:06:20.670Z'),
    graduationDate: null,
    languages: [ 'JavaScript', 'Express.js', 'MongoDB' ],
    address: { street: '123 Fake St.', city: 'New City', zip: 12345 }
  }
]
*/
db.students.deleteMany({fullTime:false})
/*
Example Output:
{ acknowledged: true, deletedCount: 1 }
*/
// ----------------------------------------------------------------------------


// COMPARISON OPERATORS -------------------------------------------------------
// Find all documents in the "students" collection where the name is not equal to "Ray"
db.students.find({name: {$ne: "Ray"}})

/* Output:
[
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e3'),
    name: 'Xavier',
    age: 36,
    gpa: 3.6,
    fullTime: true
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e4'),
    name: 'Mystery',
    age: 30,
    gpa: 3,
    fullTime: false
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e5'),
    name: 'horatioDev',
    age: 40,
    gpa: 4,
    fullTime: false
  },
  {
    _id: ObjectId('65ba8c1cdc351f1e416e15e6'),
    name: 'Horatio',
    age: 4,
    gpa: 4,
    fullTime: false,
    registerDate: ISODate('2024-01-31T18:06:20.670Z'),
    gradutionDate: null,
    languages: [ 'JavaScript', 'Express.js', 'MongoDB' ],
    address: { street: '123 Fake St.', city: 'New City', zip: 12345 }
  }
]
*/

// Find all documents in the "students" collection where the age is less than 36
db.students.find({age: {$lt: 36}})

/* Output:
[
  {
    _id: ObjectId('65ba828adc351f1e416e15e2'),
    name: 'Ray',
    age: 4,
    gpa: 4,
    fullTime: true
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e4'),
    name: 'Mystery',
    age: 30,
    gpa: 3,
    fullTime: false
  },
  {
    _id: ObjectId('65ba8c1cdc351f1e416e15e6'),
    name: 'Horatio',
    age: 4,
    gpa: 4,
    fullTime: false,
    registerDate: ISODate('2024-01-31T18:06:20.670Z'),
    gradutionDate: null,
    languages: [ 'JavaScript', 'Express.js', 'MongoDB' ],
    address: { street: '123 Fake St.', city: 'New City', zip: 12345 }
  }
]
*/

// Find all documents in the "students" collection where the age is less than or equal to 4
db.students.find({age: {$lte: 4}})

/* Output:
[
  {
    _id: ObjectId('65ba828adc351f1e416e15e2'),
    name: 'Ray',
    age: 4,
    gpa: 4,
    fullTime: true
  },
  {
    _id: ObjectId('65ba8c1cdc351f1e416e15e6'),
    name: 'Horatio',
    age: 4,
    gpa: 4,
    fullTime: false,
    registerDate: ISODate('2024-01-31T18:06:20.670Z'),
    gradutionDate: null,
    languages: [ 'JavaScript', 'Express.js', 'MongoDB' ],
    address: { street: '123 Fake St.', city: 'New City', zip: 12345 }
  }
]
*/

// Find all documents in the "students" collection where the age is greater than 30
db.students.find({age: {$gt: 30}})

/* Output:
[
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e3'),
    name: 'Xavier',
    age: 36,
    gpa: 3.6,
    fullTime: true
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e5'),
    name: 'horatioDev',
    age: 40,
    gpa: 4,
    fullTime: false
  }
]
*/

// Find all documents in the "students" collection where the age is greater than or equal to 40
db.students.find({age: {$gte: 40}})

/* Output:
[
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e5'),
    name: 'horatioDev',
    age: 40,
    gpa: 4,
    fullTime: false
  }
]
*/

// Find all documents in the "students" collection where the age is greater than 30 and less than 40
db.students.find({age: {$gt: 30, $lt:40}})

/* Output:
[
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e3'),
    name: 'Xavier',
    age: 36,
    gpa: 3.6,
    fullTime: true
  }
]
*/

// Find all documents in the "students" collection where the name is either 'Ray', 'Horatio', or 'horatioDev'
db.students.find({name: {$in:['Ray', 'Horatio', 'horatioDev']}})

/* Output:
[
  {
    _id: ObjectId('65ba828adc351f1e416e15e2'),
    name: 'Ray',
    age: 4,
    gpa: 4,
    fullTime: true
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e5'),
    name: 'horatioDev',
    age: 40,
    gpa: 4,
    fullTime: false
  },
  {
    _id: ObjectId('65ba8c1cdc351f1e416e15e6'),
    name: 'Horatio',
    age: 4,
    gpa: 4,
    fullTime: false,
    registerDate: ISODate('2024-01-31T18:06:20.670Z'),
    gradutionDate: null,
    languages: [ 'JavaScript', 'Express.js', 'MongoDB' ],
    address: { street: '123 Fake St.', city: 'New City', zip: 12345 } 
  }
]
*/

// Find all documents in the "students" collection where the name is not 'Ray', 'Horatio', or 'horatioDev'
db.students.find({name: {$nin:['Ray', 'Horatio', 'horatioDev']}})

/* Output:
[
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e3'),
    name: 'Xavier',
    age: 36,
    gpa: 3.6,
    fullTime: true
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e4'),
    name: 'Mystery',
    age: 30,
    gpa: 3,
    fullTime: false
  }
]
*/
// ----------------------------------------------------------------------------


// LOGICAL OPERATORS ----------------------------------------------------------
// Find all documents in the "students" collection where fullTime is true and age is less than or equal to 4
db.students.find({$and:[{fullTime:true}, {age: {$lte: 4}}]})

/* Output:
[
  {
    _id: ObjectId('65ba828adc351f1e416e15e2'),
    name: 'Ray',
    age: 4,
    gpa: 4,
    fullTime: true
  }
]
*/

// Find all documents in the "students" collection where fullTime is true or age is less than or equal to 4
db.students.find({$or:[{fullTime:true}, {age: {$lte: 4}}]})

/* Output:
[
  {
    _id: ObjectId('65ba828adc351f1e416e15e2'),
    name: 'Ray',
    age: 4,
    gpa: 4,
    fullTime: true
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e3'),
    name: 'Xavier',
    age: 36,
    gpa: 3.6,
    fullTime: true
  },
  {
    _id: ObjectId('65ba8c1cdc351f1e416e15e6'),
    name: 'Horatio',
    age: 4,
    gpa: 4,
    fullTime: false,
    registerDate: ISODate('2024-01-31T18:06:20.670Z'),
    gradutionDate: null,
    languages: [ 'JavaScript', 'Express.js', 'MongoDB' ],
    address: { street: '123 Fake St.', city: 'New City', zip: 12345 }
  }
]
*/

// Find all documents in the "students" collection where neither fullTime is true nor age is less than or equal to 4
db.students.find({$nor:[{fullTime:true}, {age: {$lte: 4}}]})

/* Output:
[
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e4'),
    name: 'Mystery',
    age: 30,
    gpa: 3,
    fullTime: false
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e5'),
    name: 'horatioDev',
    age: 40,
    gpa: 4,
    fullTime: false
  }
]
*/

// Find all documents in the "students" collection where age is not less than or equal to 4
db.students.find({age: {$not: {$lte: 4}}})

/* Output:
[
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e3'),
    name: 'Xavier',
    age: 36,
    gpa: 3.6,
    fullTime: true
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e4'),
    name: 'Mystery',
    age: 30,
    gpa: 3,
    fullTime: false
  },
  {
    _id: ObjectId('65ba88c6dc351f1e416e15e5'),
    name: 'horatioDev',
    age: null,
    gpa: 4,
    fullTime: false
  }
]
*/

// ----------------------------------------------------------------------------

// INDEXES -------------------------------------------------------------------
// Explain plan for finding documents where name is "Ray"
db.students.find({name: "Ray"}).explain("executionStats")

/*
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'school.students',
    indexFilterSet: false,
    parsedQuery: { name: { '$eq': 'Ray' } },
    queryHash: 'A2F868FD',
    planCacheKey: 'A2F868FD',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'COLLSCAN',
      filter: { name: { '$eq': 'Ray' } },
      direction: 'forward'
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 3,
    totalKeysExamined: 0,
    totalDocsExamined: 5,
    executionStages: {
      stage: 'COLLSCAN',
      filter: { name: { '$eq': 'Ray' } },
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 6,
      advanced: 1,
      needTime: 4,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      direction: 'forward',
      docsExamined: 5
    }
  },
  command: { find: 'students', filter: { name: 'Ray' }, '$db': 'school' },
  serverInfo: {
    host: 'horatio',
    port: 27017,
    version: '7.0.5',
    gitVersion: '7809d71e84e314b497f282ea8aa06d7ded3eb205'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted'
  },
  ok: 1
}
*/

// Create index on the "name" field
db.students.createIndex({name: 1})

/*
{
  "name_1"
}
*/

// Explain plan for finding documents where name is "Ray" using the index
db.students.find({name: "Ray"}).explain("executionStats")

/*
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'school.students',
    indexFilterSet: false,
    parsedQuery: { name: { '$eq': 'Ray' } },
    queryHash: 'A2F868FD',
    planCacheKey: 'A3E454E0',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',
        keyPattern: { name: 1 },
        indexName: 'name_1',
        isMultiKey: false,
        multiKeyPaths: { name: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { name: [ '["Ray", "Ray"]' ] }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 67,
    totalKeysExamined: 1,
    totalDocsExamined: 1,
    executionStages: {
      stage: 'FETCH',
      nReturned: 1,
      executionTimeMillisEstimate: 60,
      works: 2,
      advanced: 1,
      needTime: 0,
      needYield: 0,
      saveState: 1,
      restoreState: 1,
      isEOF: 1,
      docsExamined: 1,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 1,
        executionTimeMillisEstimate: 60,
        works: 2,
        advanced: 1,
        needTime: 0,
        needYield: 0,
        saveState: 1,
        restoreState: 1,
        isEOF: 1,
        keyPattern: { name: 1 },
        indexName: 'name_1',
        isMultiKey: false,
        multiKeyPaths: { name: [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { name: [ '["Ray", "Ray"]' ] },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  },
  command: { find: 'students', filter: { name: 'Ray' }, '$db': 'school' },
  serverInfo: {
    host: 'horatio',
    port: 27017,
    version: '7.0.5',
    gitVersion: '7809d71e84e314b497f282ea8aa06d7ded3eb205'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted'
  },
  ok: 1
}
*/

// Get the indexes of the "students" collection
db.students.getIndexes()

/*
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { name: 1 }, name: 'name_1' }
]
*/

// Drop the index named "name_1"
db.students.dropIndex("name_1")

/*
{ nIndexesWas: 2, ok: 1 }
*/

// Check the indexes again to verify the index "name_1" is dropped
db.students.getIndexes()

/*
[ { v: 2, key: { _id: 1 }, name: '_id_' } ]
*/

// ----------------------------------------------------------------------------


// COLLECTIONS ----------------------------------------------------------------
// Show existing collections in the "school" database
// show collections
/*
students
*/

// Create a capped collection named "teachers" with a max size of 10MB and a maximum document count of 100
db.createCollection("teachers", { capped: true, size: 10000000, max: 100 })
/*
{ ok: 1 }
*/

// Create a capped collection named "teachers" with additional options to disable auto-indexing
db.createCollection("teachers", { capped: true, size: 10000000, max: 100 }, { autoIndexId: false })
/*
{ ok: 1 }
*/

// Show collections after creating "teachers" collection
// show collections
/*
students
teachers
*/

// Create a regular collection named "courses"
db.createCollection("courses")
/*
{ ok: 1 }
*/

// Show collections after creating "courses" collection
// show collections
/*
courses
students
teachers
*/

// Drop the "courses" collection
db.courses.drop()
/*
true
*/

// Show collections after dropping "courses" collection
// show collections
/*
students
teachers
*/

// ----------------------------------------------------------------------------