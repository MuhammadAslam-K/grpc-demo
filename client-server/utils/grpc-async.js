
export const callClientMethod = (client, methodName, params) => {
    return new Promise((resolve, reject) => {
        client[methodName](params, (err, res) => {
            if (err) reject(err);
            else resolve(res);
        });
    });
};
