export const catchAsync = (fn) => (req, res, next) => {
    Promise
        .resolve(fn(req, res, next))
        .catch((err) => {
            console.error(err);
            if (err.type) {
                return res.status(err.errno || 400).json({
                    success: false,
                    message: err.message,
                    type: err.type,
                    errno: err.errno
                });
            }
            else {
                return res.status(500).json({
                    success: false,
                    message: "Something went wrong",
                    err,
                    errMessage: err.message || 'No error message',
                    type: "INTERNAL_ERROR",
                    errno: 500
                });
            }
        });
};
