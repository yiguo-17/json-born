const fs = require('fs');
const {
  getStudentByIndex,
  getStudentByName,
  graduateStudent,
} = require('./main.js');


beforeAll(() => {
  const data = {
    "students": [
      {
        "name": "Mesuara",
        "term": 1
      },
      {
        "name": "JD",
        "term": 2
      },
      {
        "name": "Colin",
        "term": 1
      }
    ]
  }

  const newContents =JSON.stringify(data, null, 2);
  fs.writeFileSync('../students.json', newContents);
})

afterAll(() => {
  const data = {
    "students": [
      {
        "name": "Mesuara",
        "term": 1
      },
      {
        "name": "JD",
        "term": 2
      },
      {
        "name": "Colin",
        "term": 1
      }
    ]
  }

  const newContents =JSON.stringify(data, null, 2);
  fs.writeFileSync('../students.json', newContents);
})

describe('getStudentByIndex', () => {
  it(`given an index, return the student with that index from the students array in the students.json file`, () => {
    const student1 = {
      name: 'Mesuara',
      term: 1,
    }

    const student2 = {
      name: 'Colin',
      term: 1,
    }

    expect(getStudentByIndex(0)).toEqual(student1);
    expect(getStudentByIndex(2)).toEqual(student2);
  })
})

describe('getStudentByName', () => {
  it(`given a name, return the student with that name from the students array in the students.json file`, () => {
    const student1 = {
      name: 'Mesuara',
      term: 1,
    }

    const student2 = {
      name: 'JD',
      term: 2,
    }

    const student3 = {
      name: 'Colin',
      term: 1,
    }

    expect(getStudentByName('Mesuara')).toEqual(student1);
    expect(getStudentByName('JD')).toEqual(student2);
    expect(getStudentByName('Colin')).toEqual(student3);
  })

  it(`returns -1 if no student by that name is found`, () => {
    expect(getStudentByName('Batman')).toBe(-1);
    expect(getStudentByName('T-Rex')).toBe(-1);
    expect(getStudentByName('T-1000')).toBe(-1);
  })
})


describe('graduateStudent', () => {
  it(`given a student's name, up their term by 1 and write it back to the json file`, () => {
    const graduatedStudent1 = {
      name: 'Mesuara',
      term: 2,
    }

    const graduatedStudent2 = {
      name: 'JD',
      term: 3,
    }

    const graduatedStudent3 = {
      name: 'Colin',
      term: 2,
    }

    graduateStudent('Mesuara');
    graduateStudent('JD');
    graduateStudent('Colin');

    const file = fs.readFileSync('../students.json', 'utf8')
    const data = JSON.parse(file);

    expect(data.students[0]).toEqual(graduatedStudent1)
    expect(data.students[1]).toEqual(graduatedStudent2)
    expect(data.students[2]).toEqual(graduatedStudent3)
  })
})
