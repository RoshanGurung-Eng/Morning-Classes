const initialData = {
    stdName: 'Pratik Dhital',
    address:'ktm' 
}

const StudentReducer = (state=initialData, action)=>{
    // return state
    switch (action.type){
        case 'CHANGE_NAME':
            return{
                ...state,
                stdName: action.payload
            }
            default:
                return state
    }

}
export default StudentReducer