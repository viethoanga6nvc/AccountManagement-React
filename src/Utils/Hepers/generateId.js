export function generateId() {
    let idStart = 0;

    if (localStorage && localStorage.getItem("listAccount")) {
        let listAccount = JSON.parse(localStorage.getItem("listAccount"));
        listAccount.forEach((account) => {
            if (account.id > idStart) {
                idStart = account.id;
            }
        });
    }

    let id = idStart + 1;

    return id;
}