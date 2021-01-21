import HandleApi from "./HandleApi";

const getStudents = async () => {
    return await HandleApi.APIGet('students');
};

const addStudent = async (params) => {
    return await HandleApi.APIPost('students', params);
};

const updateStudent = async (params) => {
    return await HandleApi.APIPut('students', params);
}

const deleteStudent = async (id) => {
    return await HandleApi.APIDelete('students', id);
}

const StudentService = { getStudents, addStudent, updateStudent, deleteStudent };

export default StudentService;
