let DB = {}; // save data in-memory as a document object


module.exports = {
    deleteItem: async function (uuid) {
        return new Promise((resolve, _) => {
            try {
                delete DB[uuid];
                resolve(uuid);
            } catch {
                resolve(null);
            }
        });
    },

    saveItem: async function (data) {
        return new Promise((resolve, _) => {
            console.log("Saved Object")
            let uid = generateID();
            DB[uid] = data;
            resolve(uid);
        });
    },

    getById: function (uuid) {
        return new Promise((resolve, _) => {
            try {
                resolve(DB[uuid]);
            } catch (error) {
                resolve(null);
            }
        });
    },

    getAll: function () {
        return new Promise((resolve, _) => {
            console.log(DB)
            resolve(DB);
        });
    },

    updateExisting: function (uuid, data) {
        return new Promise((resolve, _) => {
            if (DB.hasOwnProperty(uuid)) {
                DB[uuid]['message'] = data;
                resolve(uuid);
            } else {
                console.log("Failed to find message")
                resolve(null);
            }
        })
    }
}


function generateID() {
    return Date.now();
}