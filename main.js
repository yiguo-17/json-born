const fs = require('fs');
const studentInfo = JSON.parse(fs.readFileSync('..//students.json',{encoding:'utf-8'}));
const studentsArr = studentInfo.students;
const getStudentByIndex = function(num){
  return studentsArr[num]
}

const getStudentByName = function(str){
  for(const student of studentsArr){
    if(student.name===str){return student;}
  }
  return -1;
}

const graduateStudent = function(str){
  for(let i=0; i<studentsArr.length;i++){
    if(studentsArr[i].name === str){
      studentInfo.students[i].term++;
      const newData = JSON.stringify(studentInfo);
      console.log(newData);
      fs.writeFileSync('../students.json',newData)
      return 
    }
  }
  return
}






if (typeof getStudentByIndex === 'undefined') {
  getStudentByIndex = undefined;
}

if (typeof getStudentByName === 'undefined') {
  getStudentByName = undefined;
}

if (typeof graduateStudent === 'undefined') {
  graduateStudent = undefined;
}


module.exports = {
  getStudentByIndex,
  getStudentByName,
  graduateStudent,
}
