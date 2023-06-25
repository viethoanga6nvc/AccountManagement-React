import API from "./API";

class AccountAPI {
    constructor() {
        this.url = "/Account";
    }

    getAccounts = () => {
        return API.get(this.url);
    };

    getAccountById = (id) => {
        return API.get(`${this.url}/${id}`);
    };

    createAccount = (data) => {
        return API.post(this.url, data);
    };

    updateAccount = (id, body) => {
        return API.put(`${this.url}/${id}`, body);
    };

    deleteAccount = (id) => {
        return API.delete(`${this.url}/${id}`);
    };
}

const accountAPI = new AccountAPI();

export default accountAPI;