import ACCOUNT from "../Actions/AccountAction";

const intitialState = {
    isOpenModal: false,
    isLoading: false,
    data: [],
    currentFormData: {},
    error: null
};

const accountReducer = (state = intitialState, action) => {
    switch (action.type) {
        case ACCOUNT.SET_MODAL:
            return {
                ...state,
                isOpenModal: action.payload,
                currentFormData: {}
            };
        case ACCOUNT.SET_CURRENT_FORM_DATA:
            return {
                ...state,
                currentFormData: action.payload
            };
        case ACCOUNT.FETCH_DATA_PENDING:
        case ACCOUNT.CREATE_DATA_PENDING:
        case ACCOUNT.UPDATE_DATA_PENDING:
        case ACCOUNT.DELETE_DATA_PENDING:
            return {
                ...state,
                isLoading: true
            };
        case ACCOUNT.FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: null
            };
        case ACCOUNT.CREATE_DATA_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.payload],
                isLoading: false,
                error: null,
                isOpenModal: true
            };
        case ACCOUNT.UPDATE_DATA_SUCCESS:
            return {
                ...state,
                data: state.data.map((emp) => emp.id === action.payload.id ? { ...action.payload } : emp),
                isLoading: false,
                error: null,
                isOpenModal: false,
                currentFormData: {}
            };
        case ACCOUNT.DELETE_DATA_SUCCESS:
            return {
                ...state,
                data: state.data.filter((emp) => emp.id !== action.payload.id),
                isLoading: false,
                error: null
            };
        case ACCOUNT.FETCH_DATA_FAILED:
        case ACCOUNT.CREATE_DATA_FAILED:
        case ACCOUNT.UPDATE_DATA_FAILED:
        case ACCOUNT.DELETE_DATA_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default accountReducer;