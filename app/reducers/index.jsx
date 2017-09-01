import { combineReducers } from 'redux'
import axios from 'axios';


const initialState = {
    students: [],
    campuses: [],
    inputValue: '',
    gotClick: false,
    campusId: 0,
    campusName: '',
    campus: [],
    studentName: '', // KEEP TRACK OF THIS SHIT!!
}

const GET_CAMPUSES = "GET_CAMPUSES";
const GET_STUDENTS = "GET_STUDENTS";
const INPUT_VALUE = "INPUT_VALUE";
const CLICK_ME = "CLICK_ME";
const GET_CAMPUS_ID = "GET_CAMPUS_ID";
const GET_CAMPUS_NAME = "GET_CAMPUS_NAME";
const CLICK_OFF = "CLICK_OFF";
const GET_SINGLE_CAMPUS = "GET_SINGLE_CAMPUS"
const GET_STUDENT_NAME = "GET_STUDENT_NAME"

let getSingleCampus = (campus) => {
    const action = {type: GET_SINGLE_CAMPUS, campus};
    return action
}

let getCampuses =(campuses) => {
    const action = {type: GET_CAMPUSES, campuses};
    return action;
}

let getStudents = (students) => {
    const action = {type: GET_STUDENTS, students};
    return action;
}

let inputValue = inputValue => {
    const action = {type: INPUT_VALUE, inputValue};
    return action;
}

let getCampusId = (campusId) =>{
    const action = {type: GET_CAMPUS_ID, campusId};
    return action;
}

let handleClick = () => {
    const action = {type: CLICK_ME, gotClick: true};
    return action;
}

let clickOff = () => {
    const action = {type: CLICK_OFF, gotClick: false};
    return action;
}


let fetchCampuses = () => dispatch => {
    return axios.get("/api/campus")
      .then(res => res.data)
      .then(campuses => {
          const action = getCampuses(campuses);
          dispatch(action);
      })
}


let fetchStudents = students => dispatch => {
    return axios.get("/api/students")
      .then(res => res.data)
      .then(students => {
          const action = getStudents(students);
          dispatch(action);
      })
}

let deleteCampus = campusId => dispatch => {
    return axios.delete(`/api/campus/${campusId}`)
      .then(res => res.data)
      .then(campuses => {
          const action = getCampuses(campuses);
          dispatch(action);
      })
}

let deleteStudent = studentId => dispatch => {
    return axios.delete(`/api//students/${studentId}`)
      .then(res => res.data)
      .then(students => {
          const action = getStudents(students);
          dispatch(action);
      })
}

let postStudent = (inputValue, campusId) => dispatch =>{
    return axios.post('/api/students', {name: inputValue, campusId: campusId})
      .then(res => res.data)
      .then(students => {
          const action = getStudents(students);
          dispatch(action);
      })
}

let postCampus = (inputValue, randUrl) => dispatch => {
    return axios.post('/api/campus', {name: inputValue, url: randUrl})
      .then(res => res.data)
      .then(campuses => {
          const action = getCampuses(campuses);
          dispatch(action);
      })
}

// let fetchSingleCampus = (campId) => dispatch => {
//     return axios.get(`/api/campus/${campId}`)
//      .then(res => res.data)
//      .then(campus => {
//         const action = getSingleCampus(campus);
//         dispatch(action);
//      })
// }


/* ---------------------- */

let getCampusName = (campus) => {
    const action = {type: GET_CAMPUS_NAME, campus};
    return action;
}

let fetchCampusName = campusId => dispatch => {
    return axios.get(`/api/singlecampus/${campusId}`)
      .then(res => res.data)
      .then(campus => {
          const action = getCampusName(campus.name);
          dispatch(action);
      })
}

let getStudentName = studentName =>{
    const action = {type: GET_STUDENT_NAME, studentName};
    return action;
}

let fetchStudentName = studentId => dispatch => {
    return axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
          const action = getStudentName(student.name);
          dispatch(action);
      })
}

let fetchStudentCampusId = studentId => dispatch => {
    return axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
          const action = getCampusId(student.campusId);
          dispatch(action);
      })
}

export {
    clickOff,
    getCampuses, 
    getStudents, 
    inputValue,
    handleClick,
    getCampusId,
    getCampusName,
    fetchCampuses, 
    fetchStudents, 
    deleteCampus,
    deleteStudent,
    postStudent,
    postCampus,
    // fetchSingleCampus,
    fetchCampusName,
    getStudentName,
    fetchStudentName,
    fetchStudentCampusId
};

let rootReducer = (state = initialState, action)=>{
    switch(action.type){
        
        case GET_CAMPUSES:
          return Object.assign({}, state, {campuses: action.campuses});
        
        case GET_STUDENTS:
          return Object.assign({}, state, {students: action.students});

        case INPUT_VALUE:
          return Object.assign({}, state, {inputValue: action.inputValue});
        
        case CLICK_ME:
          return {gotClick: action.gotClick};
        
        case GET_CAMPUS_ID:
          return Object.assign({}, state, {campusId: action.campusId});
        
        case GET_CAMPUS_NAME:
          return Object.assign({}, state, {campus: action.campus})
        
        case CLICK_OFF:
          return {gotClick: action.gotClick}

        case GET_SINGLE_CAMPUS:
          return Object.assign({}, state, {campus: action.campus})

        case GET_STUDENT_NAME:
          return Object.assign({}, state, {studentName: action.studentName})

        default:
          return state;
    }
}


export default rootReducer;




// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };